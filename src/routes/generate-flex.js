import { Router } from "express";
import fs from "fs";
import path from "path";
import OpenAI from "openai";
import { getGuidelines } from "../utils/guidelines.js";
//import schema from "../schemas/planFlexible.json" assert { type: "json" };

const router = Router();

const schemaPath = path.resolve("src/schemas/planFlexible.json");
const schemaFile = JSON.parse(fs.readFileSync(schemaPath, "utf8"));
const jsonSchema = schemaFile.schema ?? schemaFile;

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function ensureDefaults(obj) {
  obj.metadatos ||= {
    version_schema: "1.0.0",
    fecha_generacion: new Date().toISOString().slice(0, 10),
    autor: "Agente ENA",
  };
  obj.contexto ||= {
    institucion: "Instituci�n",
    departamento: "Departamento",
    municipio: "Municipio",
    zona: "Rural",
    tipo_aula: "multigrado",
    grados: ["3�"],
    duracion_clase_min: 60,
    estudiantes_por_grado: { "3�": 1 },
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
    obj.contexto.organizacion_salon ||= "filas";
    obj.contexto.frecuencia_uso_recursos ||= "sin_definir";
    if (typeof obj.contexto.gobierno_estudiantil_activo !== "boolean") {
      obj.contexto.gobierno_estudiantil_activo = false;
    }
    obj.contexto.comites_funcionando ||= { hay: false, lista: [] };
    obj.contexto.comites_funcionando.lista ||= [];
    obj.contexto.instrumentos_aula ||= [];
  }
  obj.alineacion_curricular ||= {
    area: "Matemática",
    temas_prioritarios: ["Tema"],
    desempenos_esperados: ["Desempeño"],
    ras_dba_referencia: [],
  };
  obj.planificacion ||= {
    modalidad: "flexible",
    duracion_total_plan_min: 180,
  };
  obj.por_grados ||= [];
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

    const promptMsg2 = `Genera un plan docente flexible personalizado por grado a partir del siguiente contexto. Distribuye el plan en ${semanas} semanas (aproximadamente entre 2 y 3 semanas) y, en cada actividad, indica 'Semana N:' dentro de la descripcion. No agregues campos fuera del schema.
${JSON.stringify(
      docenteInput,
      null,
      2
    )}`;

    const guidelines = (await getGuidelines(openai)) || "";
    const effectivePrompt = (guidelines
      ? `Sigue estrictamente estos lineamientos ENA 2025:\n${guidelines}\n\n`
      : "") + (typeof promptMsg2 !== 'undefined' ? promptMsg2 : promptMsg);

    const resp = await openai.responses.create({
      model: "gpt-4.1",
      input: [
        { role: "system", content: "Eres un asistente experto en planeación educativa." },
        { role: "user", content: effectivePrompt },
      ],
      // Lineamientos en memoria; no se usa file_search
      text: {
        format: {
          type: "json_schema",
          name: "PlanDocenteFlexible",
          strict: true,
          schema: jsonSchema,
        },
      },
    });

    // Extraer JSON generado
    const text = resp.output_text;
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












