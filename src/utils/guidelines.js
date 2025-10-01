import fs from "fs";
import path from "path";

const CACHE_DIR = path.resolve("src/guidelines");
const CACHE_FILE = path.join(CACHE_DIR, "cache.json");

function findEnaPdf() {
  const dir = path.resolve("Insumos");
  if (!fs.existsSync(dir)) return null;
  const files = fs.readdirSync(dir).filter((f) => f.toLowerCase().endsWith(".pdf"));
  if (files.length === 0) return null;
  const preferred = files.find((f) => /ena|planeaci/i.test(f)) || files[0];
  return path.join(dir, preferred);
}

export function loadCachedGuidelines() {
  try {
    if (!fs.existsSync(CACHE_FILE)) return null;
    const raw = JSON.parse(fs.readFileSync(CACHE_FILE, "utf8"));
    return raw;
  } catch {
    return null;
  }
}

export function saveCachedGuidelines(payload) {
  if (!fs.existsSync(CACHE_DIR)) fs.mkdirSync(CACHE_DIR, { recursive: true });
  fs.writeFileSync(CACHE_FILE, JSON.stringify(payload, null, 2), "utf8");
}

export async function getGuidelines(openai, { force = false } = {}) {
  const pdfPath = findEnaPdf();
  if (!pdfPath) return null;

  const pdfStat = fs.statSync(pdfPath);
  const pdfMtime = pdfStat.mtimeMs;

  const cached = loadCachedGuidelines();
  if (!force && cached && cached.source_mtime === pdfMtime && cached.text) {
    return cached.text;
  }

  // Generate once using the file in a single Responses API call
  const prompt =
    "Lee el documento ENA 2025 adjunto y extrae lineamientos claros para la planeación docente flexible en aulas mono/multigrado: principios, estructura mínima del plan, diferenciación por número de estudiantes y por grado, evaluación y seguimiento, articulaciones ENA. Devuelve entre 12 y 20 viñetas concretas (frases cortas).";

  // Sube el PDF y referencia por file_id (más robusto que data URL)
  const uploaded = await openai.files.create({ file: fs.createReadStream(pdfPath), purpose: "assistants" });

  const resp = await openai.responses.create({
    model: "gpt-4.1-mini",
    input: [
      { role: "system", content: "Eres un experto en planeación ENA; resume en viñetas prácticas." },
      {
        role: "user",
        content: [
          { type: "input_text", text: prompt },
          { type: "input_file", file_id: uploaded.id },
        ],
      },
    ],
  });

  const text = resp.output_text?.trim?.() || "";
  saveCachedGuidelines({ text, source_mtime: pdfMtime, updated_at: Date.now() });
  return text;
}
