import { Router } from "express";
import fs from "fs";
import path from "path";
import OpenAI from "openai";
import { getGuidelines } from "../utils/guidelines.js";
import {
  analizarRecursos,
  extraerRecursosDeGuias,
  generarTextoSugerencias
} from "../utils/recursos-alternativos.js";
//import schema from "../schemas/planFlexible.json" assert { type: "json" };

const router = Router();

const schemaPath = path.resolve("src/schemas/planFlexible.json");
const schemaFile = JSON.parse(fs.readFileSync(schemaPath, "utf8"));
const jsonSchema = schemaFile.schema ?? schemaFile;

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

/**
 * Carga todos los JSONs de guías RAS 2026
 * @returns {Object} Objeto con los JSONs cargados por asignatura
 */
function cargarJSONsRAS() {
  const dirGuias = path.resolve("src/data/guias_ras_2026");
  const asignaturas = ["matematicas", "lenguaje", "ciencias_naturales", "ciencias_sociales", "etica", "tecnologia"];
  const jsons = {};

  asignaturas.forEach(asignatura => {
    try {
      const rutaJSON = path.join(dirGuias, `${asignatura}_ras_2026.json`);
      if (fs.existsSync(rutaJSON)) {
        jsons[asignatura] = JSON.parse(fs.readFileSync(rutaJSON, "utf8"));
      }
    } catch (err) {
      console.warn(`⚠️ No se pudo cargar ${asignatura}_ras_2026.json:`, err.message);
    }
  });

  return jsons;
}

function ensureDefaults(obj) {
  obj.metadatos ||= {
    version_schema: "2.0.0",
    fecha_generacion: new Date().toISOString().slice(0, 10),
    autor: "Agente ENA",
  };
  obj.contexto ||= {
    institucion: "Institución",
    departamento: "Departamento",
    municipio: "Municipio",
    zona: "Rural",
    tipo_aula: "multigrado",
    grados: ["3°"],
    duracion_clase_min: 60,
    estudiantes_por_grado: { "3°": 1 },
    recursos_aula: []
  };
  if (obj.contexto) {
    obj.contexto.departamento ||= "Departamento";
    obj.contexto.duracion_clase_min ||= 60;
    obj.contexto.recursos_aula ||= [];
    obj.contexto.dificultades_lectura ||= { hay: false, por_grado: {} };
    obj.contexto.dificultades_lectura.por_grado ||= {};
    obj.contexto.dificultades_escritura ||= { hay: false, por_grado: {} };
    obj.contexto.dificultades_escritura.por_grado ||= {};
    obj.contexto.dificultades_comprension ||= { hay: false, por_grado: {} };
    obj.contexto.dificultades_comprension.por_grado ||= {};
    obj.contexto.organizacion_salon ||= "grupos";
    obj.contexto.frecuencia_uso_recursos ||= "regular";
    if (typeof obj.contexto.gobierno_estudiantil_activo !== "boolean") {
      obj.contexto.gobierno_estudiantil_activo = false;
    }
    obj.contexto.comites_funcionando ||= { hay: false, lista: [] };
    obj.contexto.comites_funcionando.lista ||= [];
    obj.contexto.instrumentos_aula ||= [];
  }
  obj.alineacion_curricular ||= {
    area: "Matemáticas",
    temas_prioritarios: ["Tema"],
    desempenos_esperados: ["Desempeño"],
    ras_dba_referencia: [],
  };
  obj.planificacion ||= {
    modalidad: "flexible",
    duracion_total_plan_min: 180,
  };
  // Nueva estructura de cronograma con 3 momentos
  obj.cronograma ||= {
    momento_1_grupal: {
      nombre: "Actividad de apertura grupal",
      descripcion: "Actividad inicial para todos los grados",
      duracion_min: 15,
      objetivo: "Motivar y contextualizar el tema",
      materiales: [],
      dinamica: "Todos los estudiantes participan juntos"
    },
    momento_2_por_grados: [],
    momento_3_grupal: {
      nombre: "Actividad de cierre grupal",
      descripcion: "Actividad de cierre para todos los grados",
      duracion_min: 15,
      objetivo: "Consolidar y compartir aprendizajes",
      materiales: [],
      dinamica: "Socialización grupal"
    }
  };
  obj.adaptaciones ||= {
    ritmos_aprendizaje: [],
    estrategias_multigrado: [],
    apoyos_pares: [],
    materiales_alternativos: [],
  };
  obj.articulaciones_ENA ||= {
    gobierno_estudiantil: [],
    comites_y_roles: [],
    convivencia_y_rutinas: [],
    familia_comunidad: [],
  };
  obj.seguimiento ||= {
    indicadores: ["participación"],
    frecuencia: "semanal",
    instrumentos: ["lista de cotejo"],
  };
  obj.observaciones_docente ||= [];
  return obj;
}


// 📌 Endpoint principal
router.post("/", async (req, res) => {
  try {
    const docenteInput = req.body;

    const promptMsg = `Genera un plan docente flexible personalizado por grado a partir del siguiente contexto. Usa 'estudiantes_por_grado' para ajustar objetivos, actividades, diferenciación (apoyos, agrupaciones, ritmos) y tiempos por grado. Considera 'contexto.recursos_aula' para proponer actividades factibles con los materiales disponibles y alternativas sin TIC cuando no haya computador. Si 'contexto.tipo_aula' es 'multigrado', incluye actividades conjuntas entre los grados para optimizar el tiempo del docente (indica claramente qué hacen juntos y qué hace cada grado). En cada actividad escribe una descripción muy detallada que incluya: Descripción, Concepto (explicación), Proceso (pasos) y Producto (entregable). Disena una planeacion estandar que cubra aproximadamente tres semanas (entre dos y tres semanas) y etiqueta cada actividad con 'Semana N:' dentro de la descripcion. Incluye en 'contexto' la clave 'duracion_clase_min' (usa 60 si no hay otra referencia). Devuelve SOLO JSON válido que siga el schema:\n${JSON.stringify(
      docenteInput,
      null,
      2
    )}`;

    const userMsg = `Genera un plan docente flexible a partir del siguiente contexto:\n${JSON.stringify(
      docenteInput,
      null,
      2
    )}\n\nDevuelve SOLO JSON válido que siga el schema.`;

    // Planeacion estandar de tres semanas
    const semanas = 3;
    const totalMin = 180;
    docenteInput.planificacion = { modalidad: "flexible", duracion_total_plan_min: totalMin };

    // Extraer guías ENA recomendadas si vienen en el contexto
    let guiasENAContext = '';
    if (docenteInput.guias_ena_recomendadas) {
      guiasENAContext = '\n\n📚 GUÍAS ENA RECOMENDADAS POR GRADO:\n';
      guiasENAContext += 'IMPORTANTE: Las actividades deben hacer referencia explícita a estas guías específicas de Escuela Nueva.\n';
      guiasENAContext += 'SIEMPRE menciona el GRADO ACADÉMICO cuando referencie una guía (ej: "Guía 10 de 3°" o "Guía 10 para Grado 3°").\n';
      guiasENAContext += 'En cada actividad, indica claramente qué guía(s) y para qué grado deben consultar los estudiantes.\n\n';

      Object.entries(docenteInput.guias_ena_recomendadas).forEach(([grado, guias]) => {
        const gradoNum = grado.replace('grado_', '');
        guiasENAContext += `\nGRADO ${gradoNum}°:\n`;
        guias.forEach(guia => {
          guiasENAContext += `  • Unidad ${guia.unidad}, Guía ${guia.guia} (Grado ${gradoNum}°): "${guia.nombre}"\n`;
        });
      });

      guiasENAContext += '\nEjemplo de cómo referenciar las guías en las actividades:\n';
      guiasENAContext += '"Los estudiantes de 3° trabajarán con la Guía 10 de Grado 3° (Unidad 4: Perímetro y área) realizando..."\n';
      guiasENAContext += '"Consultar la Guía 11 para Grado 3° (Unidad 4) para profundizar en ángulos y triángulos..."\n';
      guiasENAContext += '"Los estudiantes de 4° utilizarán la Guía 8 de Grado 4° (Unidad 3: Fracciones) para..."\n';
    }

    // 📚 Análisis de recursos: comparar recursos requeridos vs disponibles
    let recursosContext = '';

    console.log('\n📚 DEBUG - Guías ENA Seleccionadas:');
    console.log('   - guias_ena_recomendadas presente?', !!docenteInput.guias_ena_recomendadas);
    if (docenteInput.guias_ena_recomendadas) {
      Object.entries(docenteInput.guias_ena_recomendadas).forEach(([grado, guias]) => {
        console.log(`   - ${grado}: ${guias.length} guía(s)`);
        guias.forEach(g => console.log(`     * Unidad ${g.unidad}, Guía ${g.guia}: ${g.nombre}`));
      });
    }

    console.log('\n🔍 DEBUG - Análisis de Recursos:');
    console.log('   - contexto presente?', !!docenteInput.contexto);
    console.log('   - recursos_aula:', docenteInput.contexto?.recursos_aula);

    if (docenteInput.guias_ena_recomendadas) {
      const todosLosJSONs = cargarJSONsRAS();
      const asignaturaActual = docenteInput.alineacion_curricular?.area || 'matematicas';

      console.log(`   - Asignatura actual: ${asignaturaActual}`);

      const recursosRequeridos = extraerRecursosDeGuias(
        docenteInput.guias_ena_recomendadas,
        todosLosJSONs,
        asignaturaActual
      );
      const recursosDisponibles = docenteInput.contexto?.recursos_aula || [];

      console.log(`   - Recursos requeridos extraídos: ${recursosRequeridos.length}`);
      console.log(`   - Recursos requeridos:`, recursosRequeridos);
      console.log(`   - Recursos disponibles del docente: ${recursosDisponibles.length}`);
      console.log(`   - Recursos disponibles:`, recursosDisponibles);

      const analisisRecursos = analizarRecursos(recursosRequeridos, recursosDisponibles);

      console.log(`   - Recursos completos: ${analisisRecursos.recursos_completos.length}`);
      console.log(`   - Recursos faltantes: ${analisisRecursos.recursos_faltantes.length}`);
      console.log(`   - Faltantes:`, analisisRecursos.recursos_faltantes);

      recursosContext = '\n\n' + generarTextoSugerencias(analisisRecursos) + '\n';

      console.log(`   - Longitud del contexto generado: ${recursosContext.length} caracteres`);
      console.log(`   - Contexto de recursos:\n${recursosContext.substring(0, 500)}...`);
    } else {
      console.log('   ⚠️ No hay guías ENA recomendadas, saltando análisis de recursos');
    }

    // 👨‍🏫 Contexto del docente para personalización
    let docenteContext = '';
    if (docenteInput.informacion_docente) {
      const info = docenteInput.informacion_docente;

      docenteContext = '\n\n' + '='.repeat(80) + '\n';
      docenteContext += '👨‍🏫 PERFIL DEL DOCENTE Y PERSONALIZACIÓN DEL PLAN\n';
      docenteContext += '='.repeat(80) + '\n\n';

      docenteContext += `DOCENTE: ${info.nombre}\n\n`;

      // Experiencia con ENA
      const experienciaLabels = {
        'sin_experiencia': 'Sin experiencia (primera vez con ENA)',
        'menos_1_año': 'Menos de 1 año de experiencia con ENA',
        '1_3_años': 'Entre 1 y 3 años de experiencia con ENA',
        '3_5_años': 'Entre 3 y 5 años de experiencia con ENA',
        'mas_5_años': 'Más de 5 años de experiencia con ENA'
      };
      docenteContext += `EXPERIENCIA ENA: ${experienciaLabels[info.experiencia_ena] || info.experiencia_ena}\n`;

      // Formación
      const formacionLabels = {
        'si': 'Ha recibido formación oficial en Escuela Nueva',
        'no': 'No ha recibido formación oficial (conoce el modelo por lectura)',
        'capacitacion_autonoma': 'Está aprendiendo de forma autónoma'
      };
      docenteContext += `FORMACIÓN: ${formacionLabels[info.formacion_ena] || info.formacion_ena}\n\n`;

      // Preferencias de planificación
      const enfoqueLabels = {
        'equilibrado': 'EQUILIBRADO (teoría y práctica)',
        'practico': 'PRÁCTICO (énfasis en actividades hands-on)',
        'teorico': 'TEÓRICO (más conceptual)',
        'ludico': 'LÚDICO (énfasis en juego y exploración)'
      };
      docenteContext += `ENFOQUE PREFERIDO: ${enfoqueLabels[info.enfoque_plan] || info.enfoque_plan}\n`;

      const evaluacionLabels = {
        'proceso': 'PROCESO (evaluación formativa continua)',
        'producto': 'PRODUCTO (evidencias finales)',
        'mixta': 'MIXTA (proceso y producto)'
      };
      docenteContext += `PRIORIDAD EN EVALUACIÓN: ${evaluacionLabels[info.prioridad_evaluacion] || info.prioridad_evaluacion}\n`;
      docenteContext += `TIEMPO DISPONIBLE SEMANAL: ${info.tiempo_disponible_semanal} minutos\n\n`;

      // Necesidades especiales
      if (info.necesidades_especiales && info.necesidades_especiales.trim()) {
        docenteContext += `NECESIDADES ESPECIALES O CONSIDERACIONES:\n${info.necesidades_especiales}\n\n`;
      }

      // Objetivos adicionales
      if (info.objetivos_adicionales && info.objetivos_adicionales.trim()) {
        docenteContext += `OBJETIVOS ADICIONALES DEL DOCENTE:\n${info.objetivos_adicionales}\n\n`;
      }

      docenteContext += '='.repeat(80) + '\n';
      docenteContext += '📋 INSTRUCCIONES DE PERSONALIZACIÓN SEGÚN PERFIL DEL DOCENTE:\n';
      docenteContext += '='.repeat(80) + '\n\n';

      // Instrucciones según experiencia
      if (info.experiencia_ena === 'sin_experiencia' || info.experiencia_ena === 'menos_1_año') {
        docenteContext += `1. LENGUAJE Y EXPLICACIONES:\n`;
        docenteContext += `   - Usa lenguaje claro y sencillo\n`;
        docenteContext += `   - Explica términos pedagógicos de ENA (trabajo colaborativo, rincones, etc.)\n`;
        docenteContext += `   - Incluye pasos muy detallados en cada actividad\n`;
        docenteContext += `   - Proporciona ejemplos concretos de cómo implementar cada estrategia\n\n`;
      } else if (info.experiencia_ena === 'mas_5_años') {
        docenteContext += `1. LENGUAJE Y EXPLICACIONES:\n`;
        docenteContext += `   - Puedes usar terminología avanzada de ENA\n`;
        docenteContext += `   - Enfócate en innovación y profundización\n`;
        docenteContext += `   - Sugiere variaciones y extensiones de las actividades\n\n`;
      } else {
        docenteContext += `1. LENGUAJE Y EXPLICACIONES:\n`;
        docenteContext += `   - Equilibra terminología ENA con explicaciones claras\n`;
        docenteContext += `   - Proporciona detalles suficientes sin ser excesivamente básico\n\n`;
      }

      // Instrucciones según enfoque
      if (info.enfoque_plan === 'practico') {
        docenteContext += `2. DISEÑO DE ACTIVIDADES (Enfoque PRÁCTICO):\n`;
        docenteContext += `   - PRIORIZA actividades manipulativas y experimentales\n`;
        docenteContext += `   - Reduce explicaciones teóricas al mínimo necesario\n`;
        docenteContext += `   - Incluye MUCHAS actividades hands-on con material concreto\n`;
        docenteContext += `   - Enfatiza el aprendizaje por descubrimiento y exploración\n`;
        docenteContext += `   - Cada concepto debe enseñarse primero con actividad práctica\n\n`;
      } else if (info.enfoque_plan === 'ludico') {
        docenteContext += `2. DISEÑO DE ACTIVIDADES (Enfoque LÚDICO):\n`;
        docenteContext += `   - Convierte CADA actividad en un juego o desafío\n`;
        docenteContext += `   - Usa gamificación: puntos, niveles, retos, misiones\n`;
        docenteContext += `   - Incluye elementos de competencia amistosa entre equipos\n`;
        docenteContext += `   - Aprovecha el juego libre y la exploración creativa\n`;
        docenteContext += `   - Conecta los conceptos con historias, personajes o aventuras\n\n`;
      } else if (info.enfoque_plan === 'teorico') {
        docenteContext += `2. DISEÑO DE ACTIVIDADES (Enfoque TEÓRICO):\n`;
        docenteContext += `   - Dedica tiempo a explicaciones conceptuales profundas\n`;
        docenteContext += `   - Incluye análisis, comparaciones y clasificaciones\n`;
        docenteContext += `   - Proporciona lecturas complementarias y definiciones formales\n`;
        docenteContext += `   - Enfatiza la comprensión de principios y teorías\n\n`;
      } else {
        docenteContext += `2. DISEÑO DE ACTIVIDADES (Enfoque EQUILIBRADO):\n`;
        docenteContext += `   - Balancea teoría y práctica en cada semana\n`;
        docenteContext += `   - Alterna actividades conceptuales con manipulativas\n`;
        docenteContext += `   - Asegura que cada concepto se explique Y se practique\n\n`;
      }

      // Instrucciones según prioridad de evaluación
      if (info.prioridad_evaluacion === 'proceso') {
        docenteContext += `3. EVALUACIÓN (Prioridad en PROCESO):\n`;
        docenteContext += `   - Enfatiza evaluación formativa continua\n`;
        docenteContext += `   - Incluye observación directa, retroalimentación inmediata\n`;
        docenteContext += `   - Proporciona autoevaluación y coevaluación frecuentes\n`;
        docenteContext += `   - Minimiza pruebas escritas finales\n\n`;
      } else if (info.prioridad_evaluacion === 'producto') {
        docenteContext += `3. EVALUACIÓN (Prioridad en PRODUCTO):\n`;
        docenteContext += `   - Define productos finales claros y evaluables\n`;
        docenteContext += `   - Incluye rúbricas específicas para cada producto\n`;
        docenteContext += `   - Enfatiza evidencias tangibles del aprendizaje\n\n`;
      } else {
        docenteContext += `3. EVALUACIÓN (MIXTA - proceso y producto):\n`;
        docenteContext += `   - Combina evaluación formativa durante el proceso\n`;
        docenteContext += `   - Y evaluación sumativa de productos finales\n`;
        docenteContext += `   - Balancea retroalimentación continua con evidencias tangibles\n\n`;
      }

      // Instrucciones para necesidades especiales
      if (info.necesidades_especiales && info.necesidades_especiales.trim()) {
        docenteContext += `4. ADAPTACIONES PARA NECESIDADES ESPECIALES:\n`;
        docenteContext += `   - CONSIDERA las necesidades especiales mencionadas arriba\n`;
        docenteContext += `   - Proporciona adaptaciones específicas cuando sea relevante\n`;
        docenteContext += `   - Asegura que las actividades sean inclusivas y accesibles\n\n`;
      }

      // Instrucciones para objetivos adicionales
      if (info.objetivos_adicionales && info.objetivos_adicionales.trim()) {
        docenteContext += `5. OBJETIVOS ADICIONALES:\n`;
        docenteContext += `   - INTEGRA los objetivos adicionales del docente en las actividades\n`;
        docenteContext += `   - Busca oportunidades para abordar estos objetivos específicos\n\n`;
      }

      docenteContext += '='.repeat(80) + '\n\n';

      console.log('\n👨‍🏫 DEBUG - Información del Docente:');
      console.log(`   - Nombre: ${info.nombre}`);
      console.log(`   - Experiencia: ${info.experiencia_ena}`);
      console.log(`   - Enfoque: ${info.enfoque_plan}`);
      console.log(`   - Contexto del docente generado: ${docenteContext.length} caracteres`);
    }

    // Construir lista de recursos disponibles para el prompt
    const recursosDisponiblesLista = docenteInput.contexto?.recursos_aula || [];
    const instrumentosDisponibles = docenteInput.contexto?.instrumentos_aula || [];

    const promptMsg2 = `Genera un plan docente flexible personalizado por grado a partir del siguiente contexto.

═══════════════════════════════════════════════════════════════════════════════
🎯 PASO 1: VERIFICACIÓN DE RECURSOS DISPONIBLES (CRÍTICO)
═══════════════════════════════════════════════════════════════════════════════

ANTES de diseñar cualquier actividad, considera que el docente SOLO tiene estos recursos:

📦 RECURSOS DISPONIBLES EN EL AULA:
${recursosDisponiblesLista.length > 0 ? recursosDisponiblesLista.map(r => `   ✅ ${r}`).join('\n') : '   (Solo recursos básicos: cuaderno, lápiz, tablero)'}

🏫 INSTRUMENTOS ENA DISPONIBLES:
${instrumentosDisponibles.length > 0 ? instrumentosDisponibles.map(i => `   ✅ ${i}`).join('\n') : '   (Ninguno especificado)'}

⚠️ REGLA DE ORO: ADAPTAR, NO SUGERIR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DISEÑA actividades que SOLO usen los recursos listados arriba
2. Si la guía ENA requiere algo NO disponible → ADAPTA la actividad
3. PRIORIZA materiales del entorno natural (piedras, hojas, palos) - son GRATIS
4. NUNCA asumas que el docente conseguirá recursos que no tiene
5. En "materiales" de cada actividad, SOLO lista recursos disponibles o del entorno

═══════════════════════════════════════════════════════════════════════════════
📋 PASO 2: ESTRUCTURA OBLIGATORIA DEL CRONOGRAMA - 3 MOMENTOS
═══════════════════════════════════════════════════════════════════════════════

El plan DEBE seguir la estructura de 3 MOMENTOS dentro del campo "cronograma":

🟢 MOMENTO 1: ACTIVIDAD GRUPAL DE APERTURA (momento_1_grupal)
   - Duración: 10-20 minutos aproximadamente
   - TODOS los grados participan JUNTOS en la misma actividad
   - Objetivo: Motivar, contextualizar el tema, activar conocimientos previos
   - Ejemplos: dinámica de grupo, pregunta generadora, video corto, lectura en voz alta,
     lluvia de ideas, juego introductorio, exploración de materiales
   - El docente dirige esta actividad mientras todos los estudiantes participan
   - Campo "dinamica": describe cómo interactúan todos los grados juntos

🟡 MOMENTO 2: TRABAJO INDIVIDUAL POR GRADOS (momento_2_por_grados)
   - Este es el MOMENTO MÁS LARGO (60-80% del tiempo total)
   - Cada grado trabaja con SU PROPIA GUÍA ENA de forma autónoma
   - Mientras un grado trabaja solo, el docente puede atender a otro grado
   - Para CADA grado incluir:
     * "grado": el grado (ej: "3°")
     * "guia_referencia": la guía ENA específica que trabajan (ej: "Unidad 1, Guía 2: Números a sus puestos")
     * "objetivos": objetivos específicos para ese grado
     * "actividades": array con las actividades detalladas
     * "evaluacion": estrategias de evaluación específicas
     * "observaciones": notas para el docente
   - Las actividades deben ser progresivas y permitir trabajo autónomo
   - Incluir al menos 2-3 actividades por grado
   - En la descripción de cada actividad, indicar "Semana N:"

🔴 MOMENTO 3: ACTIVIDAD GRUPAL DE CIERRE (momento_3_grupal)
   - Duración: 10-20 minutos aproximadamente
   - TODOS los grados vuelven a reunirse
   - Objetivo: Socializar aprendizajes, consolidar, resolver dudas, conectar contenidos
   - Ejemplos: puesta en común, exposición de trabajos, reflexión grupal,
     juego de repaso, compromiso para la siguiente clase
   - Permite que estudiantes de diferentes grados compartan y aprendan entre sí
   - Campo "dinamica": describe cómo se cierra la sesión con todos

═══════════════════════════════════════════════════════════════════════════════
⏱️ DISTRIBUCIÓN DEL TIEMPO
═══════════════════════════════════════════════════════════════════════════════

Distribuye el plan en ${semanas} semanas (aproximadamente entre 2 y 3 semanas).
En cada actividad del momento 2, indica "Semana N:" al inicio de la descripción.

Distribución típica para una sesión de 60 minutos:
- Momento 1 (Grupal apertura): ~10-15 minutos
- Momento 2 (Por grados): ~35-45 minutos (el más extenso)
- Momento 3 (Grupal cierre): ~10-15 minutos

═══════════════════════════════════════════════════════════════════════════════
📝 EVALUACIÓN POR GRADO
═══════════════════════════════════════════════════════════════════════════════

Para cada grado en momento_2_por_grados, el campo 'evaluacion' debe contener:
- Estrategias de evaluación formativa (observación, retroalimentación, autoevaluación)
- Instrumentos específicos (rúbricas, listas de cotejo, portafolios)
- Criterios alineados con los objetivos del grado

${guiasENAContext}
${recursosContext}
${docenteContext}

No agregues campos fuera del schema.
${JSON.stringify(
      docenteInput,
      null,
      2
    )}`;

    const guidelines = (await getGuidelines(openai)) || "";
    const effectivePrompt = (guidelines
      ? `Sigue estrictamente estos lineamientos ENA 2025:\n${guidelines}\n\n`
      : "") + (typeof promptMsg2 !== 'undefined' ? promptMsg2 : promptMsg);

    // 🔍 DEBUG FINAL: Mostrar el prompt completo que se envía
    console.log('\n' + '='.repeat(80));
    console.log('📤 PROMPT FINAL ENVIADO A OPENAI:');
    console.log('='.repeat(80));
    console.log('Longitud total del prompt:', effectivePrompt.length, 'caracteres');
    console.log('\nIncluye guías ENA?', guiasENAContext.length > 0);
    console.log('Incluye recursos alternativos?', recursosContext.length > 0);
    console.log('Incluye perfil docente?', docenteContext.length > 0);
    console.log('\n--- PREVIEW DEL PROMPT (últimos 2000 caracteres) ---');
    console.log(effectivePrompt.slice(-2000));
    console.log('='.repeat(80) + '\n');

    const resp = await openai.chat.completions.create({
      model: "gpt-4o-2024-08-06",
      messages: [
        { role: "system", content: "Eres un asistente experto en planeación educativa para Escuela Nueva Activa en Colombia." },
        { role: "user", content: effectivePrompt },
      ],
      response_format: {
        type: "json_schema",
        json_schema: {
          name: "PlanDocenteFlexible",
          strict: true,
          schema: jsonSchema,
        },
      },
      temperature: 0.7,
    });

    // Extraer JSON generado
    const text = resp.choices[0].message.content;
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      throw new Error("El modelo no devolvió JSON válido: " + text.slice(0, 200));
    }

    // Asegurar valores mínimos
    const safe = ensureDefaults(parsed);

    return res.json(safe);
  } catch (err) {
    console.error("❌ Generate-flex error:", err);
    return res.status(400).json({ error: "Generación inválida", details: String(err) });
  }
});

export default router;












