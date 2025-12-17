/**
 * Sistema de Sustitución de Recursos Didácticos
 *
 * Mapea recursos requeridos en guías RAS con alternativas disponibles
 * cuando el docente no cuenta con los materiales especificados.
 *
 * @module recursos-alternativos
 */

/**
 * Mapeo de recursos didácticos con sus alternativas
 * Categorías: Materiales concretos, Tecnología, Instrumentos de medición, Material visual
 */
export const MAPEO_RECURSOS_ALTERNATIVOS = {
  // === MATERIALES MANIPULATIVOS ===
  "Semillas": {
    categoria: "Material concreto manipulativo",
    alternativas: ["Piedritas", "Granos (fríjol, lenteja, maíz)", "Tapas de botella", "Botones", "Palitos", "Fichas", "Material del entorno (hojas secas, piedras pequeñas)"],
    notas: "Cualquier material pequeño y abundante del entorno sirve para conteo y agrupación"
  },
  "Piedritas": {
    categoria: "Material concreto manipulativo",
    alternativas: ["Semillas", "Granos", "Tapas", "Fichas", "Botones", "Material del entorno"],
    notas: "Se pueden recolectar en el patio escolar o camino a la escuela"
  },
  "Fichas": {
    categoria: "Material concreto manipulativo",
    alternativas: ["Tapas de colores", "Círculos de cartón", "Botones", "Semillas pintadas", "Piedritas", "Pedazos de cartulina recortados"],
    notas: "Las fichas se pueden fabricar cortando cartón o cartulina en círculos"
  },
  "Tapas": {
    categoria: "Material concreto manipulativo",
    alternativas: ["Fichas", "Tapas de botella plástica", "Círculos de cartón", "Botones", "Semillas grandes"],
    notas: "Las tapas de gaseosa o agua son abundantes y gratuitas"
  },
  "Palitos": {
    categoria: "Material concreto manipulativo",
    alternativas: ["Palillos de dientes", "Palitos de helado", "Ramitas secas del patio", "Pitillos cortados", "Palillos de bambú"],
    notas: "Se pueden recolectar ramitas del entorno y lavarlas"
  },
  "Fichas de colores": {
    categoria: "Material concreto manipulativo",
    alternativas: ["Tapas pintadas con témpera", "Círculos de cartulina de colores", "Semillas pintadas", "Botones de colores", "Papel iris recortado en círculos"],
    notas: "Si no hay fichas comerciales, se fabrican pintando tapas o cortando papel de colores"
  },
  "Material concreto": {
    categoria: "Material concreto manipulativo",
    alternativas: ["Semillas", "Piedritas", "Tapas", "Palitos", "Botones", "Material del entorno (hojas, piedras, ramas)"],
    notas: "Término genérico para cualquier objeto manipulable que represente unidades"
  },

  // === MATERIAL BASE 10 Y ÁBACOS ===
  "Ábaco": {
    categoria: "Material de valor posicional",
    alternativas: ["Ábaco casero (palos y cuentas/tapas)", "Material Base 10 casero", "Tabla de valor posicional dibujada", "Palitos agrupados en decenas con ligas", "Dibujos en el cuaderno"],
    instrucciones_fabricacion: "Construir ábaco casero con palos (palitos de bambú o ramas) y cuentas (semillas grandes, tapas perforadas, o bolitas de plastilina)",
    notas: "El ábaco casero es muy efectivo y puede fabricarse con material reciclado"
  },
  "Material Base 10": {
    categoria: "Material de valor posicional",
    alternativas: ["Palitos sueltos y atados con ligas (unidades y decenas)", "Cuadritos de papel (1x1 cm) y tiras de 10 cuadritos", "Ábaco casero", "Semillas sueltas y en grupos de 10", "Dibujos de cubitos, barritas y placas"],
    instrucciones_fabricacion: "Usar palitos: 1 palito = 1 unidad, 10 palitos atados = 1 decena, 10 decenas = 1 centena",
    notas: "El Material Base 10 comercial puede reemplazarse con palitos agrupados"
  },

  // === MATERIAL GEOMÉTRICO ===
  "Regla": {
    categoria: "Instrumento de medición",
    alternativas: ["Tira de cartón marcada en centímetros", "Regla casera (palo marcado)", "Cinta métrica", "Usar el borde del cuaderno como referencia"],
    instrucciones_fabricacion: "Fabricar regla casera: cortar cartón de 30 cm, marcar cada centímetro con lápiz y regla de préstamo",
    notas: "Una regla casera es suficiente para muchas actividades de medición"
  },
  "Cinta métrica": {
    categoria: "Instrumento de medición",
    alternativas: ["Metro de costura", "Cuerda marcada cada 10 cm", "Regla larga", "Pasos (calibrar cuánto mide un paso del estudiante)"],
    notas: "Para mediciones largas se puede usar una cuerda marcada o medir con pasos"
  },
  "Transportador": {
    categoria: "Instrumento de medición",
    alternativas: ["Transportador casero (fotocopia plastificada)", "Escuadras para ángulos de 90°, 45°, 60°", "Círculo de cartón dividido en grados", "Estimación visual de ángulos"],
    instrucciones_fabricacion: "Fotocopiar un transportador y pegarlo en cartón, o dibujar uno en cartulina con compás",
    notas: "Para primaria básica a menudo basta con identificar ángulos rectos, agudos y obtusos sin medir grados exactos"
  },
  "Escuadras": {
    categoria: "Instrumento de geometría",
    alternativas: ["Escuadra casera de cartón", "Esquina de una hoja (90°)", "Triángulo de cartón", "Doblar papel para formar ángulos"],
    instrucciones_fabricacion: "Cortar cartón en forma de triángulo rectángulo con ángulos de 90°-45°-45° o 90°-60°-30°",
    notas: "Las escuadras caseras funcionan bien para trazar líneas perpendiculares y paralelas"
  },
  "Compás": {
    categoria: "Instrumento de geometría",
    alternativas: ["Compás casero (lápiz + cuerda)", "Tapa circular para trazar círculos", "Plato pequeño", "Vaso", "Dos lápices unidos con cuerda o banda elástica"],
    instrucciones_fabricacion: "Compás casero: atar un lápiz al extremo de una cuerda de 5-10 cm, fijar el otro extremo con un alfiler o dedo en el centro",
    notas: "Para círculos pequeños se pueden usar tapas o vasos como plantilla"
  },

  // === MATERIAL VISUAL Y GRÁFICO ===
  "Tarjetas numéricas": {
    categoria: "Material visual",
    alternativas: ["Tarjetas caseras (cartón + marcador)", "Fichas de papel", "Cartulina recortada", "Papel reciclado"],
    instrucciones_fabricacion: "Cortar cartón o cartulina en rectángulos de 5x8 cm y escribir números con marcador",
    notas: "Las tarjetas caseras son igualmente efectivas que las comerciales"
  },
  "Tabla del 100": {
    categoria: "Material visual",
    alternativas: ["Tabla dibujada en el cuaderno", "Tabla en cartulina grande para el aula", "Fotocopia de tabla", "Dibujar tabla en el tablero"],
    instrucciones_fabricacion: "Dibujar cuadrícula de 10x10 y escribir números del 1 al 100",
    notas: "Cada estudiante puede tener su tabla en el cuaderno, y una grande en la pared del aula"
  },
  "Recta numérica": {
    categoria: "Material visual",
    alternativas: ["Recta dibujada en el cuaderno", "Recta en tira de cartón", "Recta en el piso con tiza", "Cuerda con números colgados"],
    instrucciones_fabricacion: "Dibujar línea horizontal y marcar puntos equidistantes numerados",
    notas: "Una recta numérica en el piso permite hacer actividades cinestésicas (saltar sobre los números)"
  },
  "Láminas": {
    categoria: "Material visual",
    alternativas: ["Dibujos en el tablero", "Ilustraciones en cartulina", "Imágenes recortadas de revistas", "Dibujos de los estudiantes"],
    notas: "Las láminas comerciales se pueden reemplazar con dibujos elaborados por docente y estudiantes"
  },
  "Carteles": {
    categoria: "Material visual",
    alternativas: ["Cartulina con marcador", "Papel periódico grande", "Varias hojas pegadas", "Tablero (escribir y borrar)"],
    notas: "Los carteles permanentes se pueden hacer en cartulina; los temporales en papel reciclado"
  },

  // === TECNOLOGÍA E INFORMÁTICA ===
  "Computador": {
    categoria: "Tecnología digital",
    alternativas: ["Tablets", "Celulares", "Sala de informática compartida", "Computador del docente (proyección)", "Actividades sin TIC usando material concreto"],
    notas: "Si no hay computadores, adaptar actividades digitales a material físico o usar 1 dispositivo para demostración grupal",
    adaptacion_pedagogica: "Convertir simulaciones digitales en experimentos con material concreto; reemplazar búsquedas web por libros de biblioteca"
  },
  "Internet": {
    categoria: "Tecnología digital",
    alternativas: ["Biblioteca física", "Enciclopedias", "Libros de texto", "Material impreso previamente", "Videos descargados (si hay electricidad)"],
    notas: "Preparar material offline: imprimir recursos, descargar videos en USB, usar libros físicos",
    adaptacion_pedagogica: "Las investigaciones se hacen consultando libros, entrevistando personas de la comunidad, o con material que el docente prepare"
  },
  "TV": {
    categoria: "Tecnología audiovisual",
    alternativas: ["Video beam", "Computador", "Tablet", "Radio", "Láminas grandes", "Teatro o dramatización"],
    notas: "Los contenidos audiovisuales se pueden reemplazar con narraciones orales, dramatizaciones o láminas ilustradas"
  },
  "Grabadora": {
    categoria: "Tecnología audiovisual",
    alternativas: ["Celular con parlante", "Tablet", "Computador", "Radio", "Cantar en vivo sin grabación"],
    notas: "Para escuchar música o audio, usar celular, radio, o cantar/recitar en vivo"
  },
  "Tablet": {
    categoria: "Tecnología digital",
    alternativas: ["Celular", "Computador", "Actividades en papel", "Material manipulativo"],
    notas: "Similar a computador: adaptar a material físico si no hay dispositivos"
  },
  "Calculadora": {
    categoria: "Tecnología de cálculo",
    alternativas: ["Calculadora del celular", "Ábaco", "Cálculo mental", "Algoritmos escritos", "Material Base 10"],
    notas: "En primaria se prioriza el cálculo mental y algoritmos; la calculadora es opcional"
  },

  // === MATERIALES DE ARTE Y MANUALIDADES ===
  "Vinilos o témperas": {
    categoria: "Material artístico",
    alternativas: ["Témperas caseras (harina + colorante vegetal)", "Acuarelas", "Colores o crayolas", "Tintes naturales (remolacha, café, achiote)", "Tierra de colores disuelta en agua"],
    instrucciones_fabricacion: "Témpera casera: mezclar 1 taza de harina + 1 taza de agua + colorante vegetal o tinte natural",
    notas: "Los tintes naturales son económicos y conectan con el entorno"
  },
  "Colores": {
    categoria: "Material artístico",
    alternativas: ["Crayolas", "Lápices de colores", "Marcadores", "Témperas", "Tintes naturales"],
    notas: "Priorizar lápices de colores por durabilidad; las crayolas se derriten en climas cálidos"
  },
  "Marcadores": {
    categoria: "Material artístico",
    alternativas: ["Lápices de colores", "Crayolas", "Bolígrafos de colores", "Témperas con pincel"],
    notas: "Los marcadores se secan rápido; mejor usar lápices de colores"
  },
  "Tijeras punta roma": {
    categoria: "Herramienta",
    alternativas: ["Tijeras escolares compartidas", "Rasgar papel con las manos (sin tijeras)", "Tijeras del docente para cortes previos"],
    notas: "Si hay pocas tijeras, trabajar por turnos o que el docente prepare cortes previamente"
  },
  "Pegamento": {
    categoria: "Material de adhesión",
    alternativas: ["Pegamento casero (harina + agua)", "Engrudo (almidón de yuca)", "Cinta adhesiva", "Grapas", "Costura con hilo"],
    instrucciones_fabricacion: "Pegamento casero: mezclar 2 cucharadas de harina + 3 cucharadas de agua, calentar hasta espesar",
    notas: "El engrudo de harina funciona muy bien para papel y cartón"
  },
  "Arcilla": {
    categoria: "Material moldeable",
    alternativas: ["Arcilla natural del entorno (barro)", "Plastilina", "Masa casera (harina + sal + agua)", "Plastilina casera"],
    instrucciones_fabricacion: "Masa casera: 2 tazas de harina + 1 taza de sal + 1 taza de agua + colorante",
    notas: "La arcilla natural se puede recoger en ríos, quebradas o zonas húmedas"
  },
  "Plastilina": {
    categoria: "Material moldeable",
    alternativas: ["Masa casera (harina + sal + agua + colorante)", "Arcilla", "Barro", "Masa de pan"],
    instrucciones_fabricacion: "Ver receta en 'Arcilla'",
    notas: "La plastilina casera es más económica y no tóxica"
  },

  // === PAPEL Y CARTÓN ===
  "Cartulina": {
    categoria: "Material de papel",
    alternativas: ["Cartón delgado (cajas recicladas)", "Hojas blancas pegadas", "Papel periódico", "Hojas de cuaderno viejo"],
    notas: "Las cajas de cereales, galletas o zapatos son cartón excelente y gratuito"
  },
  "Papel iris": {
    categoria: "Material de papel",
    alternativas: ["Papel de colores reciclado (revistas, propaganda)", "Papel crepe", "Papel seda", "Papel bond pintado con témpera", "Cartulina de colores"],
    notas: "Las revistas y propaganda tienen papel brillante de colores que se puede reutilizar"
  },
  "Papel periódico": {
    categoria: "Material de papel",
    alternativas: ["Periódicos viejos", "Revistas", "Papel bond usado por un lado", "Hojas de cuaderno viejas"],
    notas: "El papel periódico reciclado es abundante y gratuito"
  },
  "Octavo de cartulina": {
    categoria: "Material de papel",
    alternativas: ["Cartón de caja recortado", "4 hojas blancas pegadas", "Papel grueso reciclado"],
    notas: "Un octavo de cartulina mide aprox 14x10 cm; se puede cortar de cartón reciclado"
  },

  // === MATERIAL DE LABORATORIO Y EXPERIMENTOS ===
  "Recipientes plásticos": {
    categoria: "Material de laboratorio",
    alternativas: ["Botellas plásticas cortadas", "Envases de yogurt o margarina", "Vasos desechables", "Tarros reciclados"],
    notas: "Los envases de alimentos reciclados son abundantes y gratuitos"
  },
  "Recipiente metálico": {
    categoria: "Material de laboratorio",
    alternativas: ["Olla vieja", "Tarro de leche en polvo", "Lata grande", "Recipiente de aluminio"],
    notas: "Solicitar a las familias ollas o tarros que ya no usen"
  },
  "Cuchara de palo": {
    categoria: "Herramienta de cocina",
    alternativas: ["Cuchara metálica", "Paleta de madera", "Palo limpio del entorno", "Cuchara plástica resistente"],
    notas: "Las familias suelen tener cucharas de palo viejas que pueden donar"
  },

  // === MATERIAL ESPECÍFICO DE CIENCIAS ===
  "Lupa": {
    categoria: "Instrumento científico",
    alternativas: ["Lupa casera (botella con agua)", "Gota de agua sobre objeto transparente", "Observación directa de cerca", "Celular con zoom de cámara"],
    instrucciones_fabricacion: "Lupa casera: llenar botella plástica transparente con agua y mirar a través de ella",
    notas: "Una gota de agua sobre plástico transparente funciona como lupa pequeña"
  },
  "Termómetro": {
    categoria: "Instrumento científico",
    alternativas: ["Termómetro del botiquín escolar", "Observación de sensaciones (calor/frío)", "Termómetro casero (botella + pitillo + colorante)"],
    instrucciones_fabricacion: "Termómetro casero: botella con agua coloreada y pitillo; el nivel sube con calor",
    notas: "Para primaria básica a menudo basta con observar si algo está caliente, tibio o frío"
  },
  "Imanes": {
    categoria: "Material científico",
    alternativas: ["Imán de nevera", "Imán de parlante viejo", "Demostración con imán del docente"],
    notas: "Los imanes de nevera publicitarios son abundantes y gratuitos"
  },

  // === MATERIAL DEL ENTORNO (SIEMPRE DISPONIBLE) ===
  "Elementos naturales del entorno": {
    categoria: "Material del entorno",
    alternativas: ["Hojas", "Flores", "Semillas", "Piedras", "Tierra", "Arena", "Palos", "Conchas (si hay río/mar)"],
    notas: "El entorno natural provee abundante material gratuito para ciencias, arte y matemáticas"
  },
  "Hojas secas": {
    categoria: "Material del entorno",
    alternativas: ["Hojas frescas", "Pétalos", "Ramas pequeñas", "Pasto seco"],
    notas: "Material abundante y gratuito en cualquier entorno rural"
  },

  // === RECURSOS BÁSICOS UNIVERSALES ===
  "Cuaderno": {
    categoria: "Material escolar básico",
    alternativas: ["Hojas sueltas en carpeta", "Cuaderno compartido (una asignatura por cuaderno)", "Pizarra individual (tabla + marcador borrable)"],
    notas: "El cuaderno es esencial; si no hay, usar hojas sueltas organizadas en carpeta"
  },
  "Lápiz": {
    categoria: "Material escolar básico",
    alternativas: ["Bolígrafo", "Carboncillo (en caso extremo)", "Tiza sobre papel oscuro"],
    notas: "El lápiz es esencial y económico; priorizar en el presupuesto"
  },
  "Borrador": {
    categoria: "Material escolar básico",
    alternativas: ["Miga de pan", "Borrador compartido", "Tachar en vez de borrar"],
    notas: "En caso de escasez, se puede compartir entre varios estudiantes"
  }
};

/**
 * Normaliza nombres de recursos para facilitar coincidencias
 * Elimina tildes, convierte a minúsculas, elimina espacios extra
 */
function normalizarRecurso(recurso) {
  return recurso
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Eliminar tildes
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Busca un recurso en el mapeo considerando variaciones de nombre
 */
export function buscarRecursoEnMapeo(recursoOriginal) {
  const normalizado = normalizarRecurso(recursoOriginal);

  // Búsqueda exacta
  for (const [clave, datos] of Object.entries(MAPEO_RECURSOS_ALTERNATIVOS)) {
    if (normalizarRecurso(clave) === normalizado) {
      return { recurso: clave, ...datos };
    }
  }

  // Búsqueda parcial (ej: "Fichas de colores" contiene "Fichas")
  for (const [clave, datos] of Object.entries(MAPEO_RECURSOS_ALTERNATIVOS)) {
    const claveNorm = normalizarRecurso(clave);
    if (normalizado.includes(claveNorm) || claveNorm.includes(normalizado)) {
      return { recurso: clave, ...datos };
    }
  }

  return null;
}

/**
 * Compara recursos requeridos con recursos disponibles
 * y genera sugerencias de alternativas
 *
 * @param {string[]} recursosRequeridos - Array de recursos que requiere la actividad
 * @param {string[]} recursosDisponibles - Array de recursos que tiene el docente
 * @returns {Object} - Análisis con recursos faltantes y alternativas sugeridas
 */
export function analizarRecursos(recursosRequeridos, recursosDisponibles) {
  const disponiblesNorm = recursosDisponibles.map(normalizarRecurso);
  const resultados = {
    recursos_completos: [],
    recursos_faltantes: [],
    sugerencias_alternativas: []
  };

  recursosRequeridos.forEach(recursoReq => {
    const reqNorm = normalizarRecurso(recursoReq);

    // Verificar si el recurso está disponible (búsqueda flexible)
    const estaDisponible = disponiblesNorm.some(dispNorm =>
      reqNorm.includes(dispNorm) || dispNorm.includes(reqNorm) || reqNorm === dispNorm
    );

    if (estaDisponible) {
      resultados.recursos_completos.push(recursoReq);
    } else {
      resultados.recursos_faltantes.push(recursoReq);

      // Buscar alternativas en el mapeo
      const infoRecurso = buscarRecursoEnMapeo(recursoReq);

      if (infoRecurso) {
        resultados.sugerencias_alternativas.push({
          recurso_faltante: recursoReq,
          categoria: infoRecurso.categoria,
          alternativas: infoRecurso.alternativas,
          instrucciones_fabricacion: infoRecurso.instrucciones_fabricacion || null,
          notas: infoRecurso.notas,
          adaptacion_pedagogica: infoRecurso.adaptacion_pedagogica || null
        });
      } else {
        // Recurso no encontrado en mapeo - sugerir genéricamente
        resultados.sugerencias_alternativas.push({
          recurso_faltante: recursoReq,
          categoria: "No categorizado",
          alternativas: ["Consultar con otros docentes", "Buscar material reciclado equivalente", "Adaptar con material del entorno"],
          notas: "Este recurso no está en el mapeo estándar. Considere adaptaciones locales."
        });
      }
    }
  });

  return resultados;
}

/**
 * Extrae todos los recursos únicos requeridos por un conjunto de guías
 *
 * @param {Object} guiasRecomendadas - Objeto con guías por grado
 * @param {Object} todosLosJSONs - Objeto con todos los JSONs de RAS cargados por asignatura
 * @param {string} asignaturaActual - Asignatura actual (matematicas, lenguaje, etc.)
 * @returns {string[]} - Array de recursos únicos requeridos
 */
export function extraerRecursosDeGuias(guiasRecomendadas, todosLosJSONs, asignaturaActual = 'matematicas') {
  const recursosUnicos = new Set();

  // Convertir nombre de asignatura del formulario al formato del JSON
  const mapeoAsignaturas = {
    'matematicas': 'matematicas',
    'lenguaje': 'lenguaje',
    'sociales': 'ciencias_sociales',
    'Tecnología': 'tecnologia',
    'tecnologia': 'tecnologia',
    'Naturales': 'ciencias_naturales',
    'naturales': 'ciencias_naturales',
    'etica': 'etica',
    'ética': 'etica'
  };

  const asignaturaJSON = mapeoAsignaturas[asignaturaActual] || asignaturaActual;

  Object.entries(guiasRecomendadas).forEach(([gradoKey, guias]) => {
    const gradoNum = gradoKey.replace('grado_', '');

    guias.forEach(guia => {
      // Usar la asignatura actual del contexto
      const jsonAsignatura = todosLosJSONs[asignaturaJSON];

      if (!jsonAsignatura) {
        console.warn(`⚠️ No se encontró JSON para asignatura: ${asignaturaJSON}`);
        return;
      }

      const datosGrado = jsonAsignatura.grados[`grado_${gradoNum}`];
      if (!datosGrado) {
        console.warn(`⚠️ No se encontró grado ${gradoNum} en ${asignaturaJSON}`);
        return;
      }

      // Buscar la guía específica
      datosGrado.unidades?.forEach(unidad => {
        if (unidad.numero === guia.unidad || unidad.numero === parseInt(guia.unidad)) {
          unidad.guias?.forEach(g => {
            if (g.numero === guia.guia || g.numero === parseInt(guia.guia)) {
              // Agregar recursos de esta guía
              if (g.recursos && Array.isArray(g.recursos)) {
                g.recursos.forEach(rec => recursosUnicos.add(rec));
              }
            }
          });
        }
      });
    });
  });

  return Array.from(recursosUnicos);
}

/**
 * Genera un texto descriptivo que prioriza ADAPTAR actividades
 * a los recursos disponibles antes de sugerir nuevos materiales
 */
export function generarTextoSugerencias(analisisRecursos) {
  const recursosDisponibles = analisisRecursos.recursos_completos || [];

  if (analisisRecursos.recursos_faltantes.length === 0) {
    return `\n✅ RECURSOS VERIFICADOS: El docente cuenta con todos los recursos necesarios.

📦 RECURSOS DISPONIBLES EN EL AULA:
${recursosDisponibles.map((r, i) => `   ${i + 1}. ${r}`).join('\n')}

✅ Diseña las actividades utilizando estos recursos sin problemas.\n`;
  }

  let texto = "\n" + "=".repeat(80) + "\n";
  texto += "🎯 VERIFICACIÓN DE RECURSOS Y ADAPTACIÓN DE ACTIVIDADES\n";
  texto += "=".repeat(80) + "\n\n";

  // Primero mostrar qué SÍ tiene el docente
  texto += "📦 RECURSOS QUE EL DOCENTE SÍ TIENE DISPONIBLES:\n";
  if (recursosDisponibles.length > 0) {
    recursosDisponibles.forEach((r, i) => {
      texto += `   ✅ ${r}\n`;
    });
  } else {
    texto += "   (Recursos básicos del aula)\n";
  }
  texto += "\n";

  // Luego mostrar recursos que las guías requieren pero NO están disponibles
  texto += `⚠️ RECURSOS QUE LAS GUÍAS REQUIEREN PERO NO ESTÁN DISPONIBLES (${analisisRecursos.recursos_faltantes.length}):\n`;
  analisisRecursos.recursos_faltantes.forEach((r, i) => {
    texto += `   ❌ ${r}\n`;
  });
  texto += "\n";

  texto += "=".repeat(80) + "\n";
  texto += "🔴 REGLA OBLIGATORIA: ADAPTAR ANTES DE SUGERIR\n";
  texto += "=".repeat(80) + "\n\n";

  texto += `PRIORIDAD DE DISEÑO DE ACTIVIDADES:\n\n`;

  texto += `1️⃣ PRIORIDAD MÁXIMA - USAR SOLO LO DISPONIBLE:\n`;
  texto += `   • Diseña TODAS las actividades usando ÚNICAMENTE los recursos que el docente SÍ tiene\n`;
  texto += `   • Si la guía original requiere algo no disponible, REDISEÑA la actividad\n`;
  texto += `   • El objetivo de aprendizaje se mantiene, pero el método se adapta\n\n`;

  texto += `2️⃣ SEGUNDA OPCIÓN - MATERIALES DEL ENTORNO (sin costo):\n`;
  texto += `   • Si no se puede lograr el objetivo con recursos del aula, usa materiales naturales gratuitos:\n`;
  texto += `     - Piedras, hojas, semillas, palos del patio escolar\n`;
  texto += `     - Tierra, arena, agua\n`;
  texto += `     - Material reciclado que ya exista (cajas, botellas, tapas)\n\n`;

  texto += `3️⃣ ÚLTIMA OPCIÓN - FABRICACIÓN CASERA SENCILLA:\n`;
  texto += `   • Solo si es IMPOSIBLE lograr el objetivo de otra forma\n`;
  texto += `   • Debe ser algo que se fabrique en menos de 10 minutos\n`;
  texto += `   • Con materiales que SEGURO existen en cualquier escuela rural\n\n`;

  texto += `❌ PROHIBIDO:\n`;
  texto += `   • NO sugieras comprar materiales nuevos\n`;
  texto += `   • NO asumas que el docente conseguirá recursos que no tiene\n`;
  texto += `   • NO diseñes actividades que requieran los recursos faltantes\n\n`;

  // Mostrar alternativas específicas para los recursos faltantes
  texto += "=".repeat(80) + "\n";
  texto += "📋 CÓMO ADAPTAR CADA RECURSO FALTANTE:\n";
  texto += "=".repeat(80) + "\n\n";

  analisisRecursos.sugerencias_alternativas.forEach((sug, index) => {
    texto += `${index + 1}. SI LA GUÍA REQUIERE: "${sug.recurso_faltante}"\n`;

    if (sug.adaptacion_pedagogica) {
      texto += `   🎯 ADAPTACIÓN PEDAGÓGICA:\n`;
      texto += `      ${sug.adaptacion_pedagogica}\n`;
    }

    texto += `   ✅ ALTERNATIVAS GRATUITAS:\n`;
    sug.alternativas.slice(0, 4).forEach((alt, i) => {
      texto += `      • ${alt}\n`;
    });

    if (sug.instrucciones_fabricacion) {
      texto += `   🔧 Si necesitas fabricar: ${sug.instrucciones_fabricacion}\n`;
    }

    texto += `   💡 ${sug.notas}\n\n`;
  });

  texto += "=".repeat(80) + "\n";
  texto += "📝 FORMATO OBLIGATORIO EN CADA ACTIVIDAD:\n";
  texto += "=".repeat(80) + "\n\n";

  texto += `En el campo "materiales" de CADA actividad, SOLO incluye:\n`;
  texto += `   • Recursos de la lista de disponibles (arriba)\n`;
  texto += `   • Materiales del entorno natural (piedras, hojas, etc.)\n`;
  texto += `   • Materiales reciclados básicos (papel usado, cajas)\n\n`;

  texto += `En el campo "descripcion", explica la ADAPTACIÓN:\n`;
  texto += `   • Cómo se logra el objetivo de aprendizaje SIN el recurso original\n`;
  texto += `   • Qué material alternativo se usa y por qué funciona igual\n\n`;

  texto += `EJEMPLO DE ACTIVIDAD CORRECTAMENTE ADAPTADA:\n\n`;
  texto += `Guía original requiere: "Ábaco" (NO DISPONIBLE)\n`;
  texto += `{\n`;
  texto += `  "nombre": "Valor posicional con material del entorno",\n`;
  texto += `  "descripcion": "Semana 1: Trabajamos valor posicional.\n\n`;
  texto += `ADAPTACIÓN: La guía sugiere usar ábaco, pero usaremos palitos y ligas\n`;
  texto += `que son gratuitos y cumplen el mismo objetivo pedagógico.\n\n`;
  texto += `Concepto: Cada posición tiene un valor diferente (unidades, decenas).\n\n`;
  texto += `Proceso:\n`;
  texto += `1. Cada estudiante recolecta 30 palitos del patio (5 min)\n`;
  texto += `2. 1 palito = 1 unidad, 10 palitos atados = 1 decena (10 min)\n`;
  texto += `3. Representar números agrupando palitos (20 min)\n\n`;
  texto += `Producto: Representación de 5 números con palitos",\n`;
  texto += `  "materiales": ["Palitos del patio", "Ligas o cordel", "Cuaderno"],\n`;
  texto += `  ...\n`;
  texto += `}\n\n`;

  texto += "=".repeat(80) + "\n\n";

  return texto;
}

export default {
  MAPEO_RECURSOS_ALTERNATIVOS,
  buscarRecursoEnMapeo,
  analizarRecursos,
  extraerRecursosDeGuias,
  generarTextoSugerencias
};
