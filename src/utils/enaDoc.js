import fs from "fs";
import path from "path";

let cachedFileId = null;
let cachedVectorStoreId = null;

function findEnaPdf() {
  const dir = path.resolve("Insumos");
  if (!fs.existsSync(dir)) return null;
  const files = fs.readdirSync(dir).filter((f) => f.toLowerCase().endsWith(".pdf"));
  if (files.length === 0) return null;
  // Prefer a file that includes 'ENA' or 'planeaci' in the name
  const preferred = files.find((f) => /ena|planeaci/i.test(f)) || files[0];
  return path.join(dir, preferred);
}

export async function ensureEnaAttachment(openai) {
  try {
    if (cachedFileId) return cachedFileId;
    const pdfPath = findEnaPdf();
    if (!pdfPath) return null;
    const stream = fs.createReadStream(pdfPath);
    const file = await openai.files.create({ file: stream, purpose: "assistants" });
    cachedFileId = file.id;
    return cachedFileId;
  } catch (err) {
    // If upload fails, continue without attachment
    return null;
  }
}

export async function ensureEnaVectorStore(openai) {
  try {
    if (cachedVectorStoreId) return cachedVectorStoreId;
    const pdfPath = findEnaPdf();
    if (!pdfPath) return null;

    // Create a vector store
    const vs = await openai.vectorStores.create({ name: "ENA_2025_VectorStore" });

    // Try the high-level upload to vector store (preferred)
    try {
      if (openai.vectorStores.fileBatches?.uploadAndPoll) {
        await openai.vectorStores.fileBatches.uploadAndPoll(vs.id, {
          files: [fs.createReadStream(pdfPath)],
        });
      } else {
        // Fallback: upload file then attach to vector store
        const file = await openai.files.create({ file: fs.createReadStream(pdfPath), purpose: "assistants" });
        await openai.vectorStores.files.create(vs.id, { file_id: file.id });
      }
    } catch (e) {
      // As a last resort, upload file then attach
      const file = await openai.files.create({ file: fs.createReadStream(pdfPath), purpose: "assistants" });
      if (openai.vectorStores.files?.create) {
        await openai.vectorStores.files.create(vs.id, { file_id: file.id });
      }
    }

    cachedVectorStoreId = vs.id;
    return cachedVectorStoreId;
  } catch (err) {
    return null;
  }
}
