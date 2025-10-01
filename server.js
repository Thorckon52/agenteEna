import "dotenv/config";
import express from "express";
import morgan from "morgan";
import flexRouter from "./src/routes/generate-flex.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

// Necesario para __dirname en módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(morgan("dev"));
app.use(express.json());

// 👉 Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, "public")));

// Ruta API
app.use("/api/generate-flex", flexRouter);

// Ruta raíz
app.get("/", (req, res) => {
  res.send({ message: "Servidor funcionando 🚀" });
});

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
