import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta a la carpeta output
const outputPath = path.join(__dirname, "../../output");

// Ediciones disponibles con datos
const EDICIONES_DISPONIBLES = ["2026"];

/**
 * GET /api/guias-data/areas
 * Devuelve las áreas disponibles con sus ediciones
 */
router.get("/areas", (req, res) => {
  try {
    const areas = fs.readdirSync(outputPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => ({
        id: dirent.name.toLowerCase(),
        nombre: dirent.name,
        ediciones: EDICIONES_DISPONIBLES
      }));

    res.json({
      success: true,
      data: {
        areas,
        edicionesDisponibles: EDICIONES_DISPONIBLES,
        mensaje: "Solo la edición 2026 tiene guías digitalizadas disponibles"
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error al obtener las áreas"
    });
  }
});

/**
 * GET /api/guias-data/temas/:area
 * Devuelve los temas generales (unidades) de un área específica
 * Query params: grado (opcional), edicion (por defecto 2026)
 */
router.get("/temas/:area", (req, res) => {
  try {
    const { area } = req.params;
    const { grado, edicion = "2026" } = req.query;

    // Verificar si la edición está disponible
    if (!EDICIONES_DISPONIBLES.includes(edicion)) {
      return res.json({
        success: false,
        disponible: false,
        mensaje: `La edición ${edicion} no está disponible. Solo tenemos acceso a las guías de la edición 2026.`,
        edicionesDisponibles: EDICIONES_DISPONIBLES
      });
    }

    // Buscar la carpeta del área (case insensitive)
    const carpetas = fs.readdirSync(outputPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory());

    const carpetaArea = carpetas.find(
      c => c.name.toLowerCase() === area.toLowerCase()
    );

    if (!carpetaArea) {
      return res.status(404).json({
        success: false,
        error: `Área "${area}" no encontrada`
      });
    }

    const areaPath = path.join(outputPath, carpetaArea.name);
    const archivos = fs.readdirSync(areaPath)
      .filter(f => f.endsWith(".json"));

    // Recopilar temas de todos los grados o de uno específico
    const temasMap = new Map();
    const gradosDisponibles = [];

    archivos.forEach(archivo => {
      const gradoNum = parseInt(archivo.match(/grado_(\d+)/)?.[1] || "0");
      if (grado && gradoNum !== parseInt(grado)) return;

      gradosDisponibles.push(gradoNum);

      const contenido = JSON.parse(
        fs.readFileSync(path.join(areaPath, archivo), "utf-8")
      );

      if (contenido.unidades && Array.isArray(contenido.unidades)) {
        contenido.unidades.forEach(unidad => {
          const key = unidad.titulo.toLowerCase().trim();
          if (!temasMap.has(key)) {
            temasMap.set(key, {
              id: key.replace(/\s+/g, "_").replace(/[^a-z0-9_áéíóúñü]/gi, ""),
              titulo: unidad.titulo,
              grados: [gradoNum],
              numeroUnidad: unidad.numero
            });
          } else {
            const existing = temasMap.get(key);
            if (!existing.grados.includes(gradoNum)) {
              existing.grados.push(gradoNum);
            }
          }
        });
      }
    });

    // Convertir Map a array y ordenar
    const temas = Array.from(temasMap.values())
      .sort((a, b) => a.numeroUnidad - b.numeroUnidad);

    res.json({
      success: true,
      disponible: true,
      data: {
        area: carpetaArea.name,
        edicion,
        gradosDisponibles: [...new Set(gradosDisponibles)].sort(),
        temas
      }
    });

  } catch (error) {
    console.error("Error al obtener temas:", error);
    res.status(500).json({
      success: false,
      error: "Error al obtener los temas"
    });
  }
});

/**
 * GET /api/guias-data/temas-por-grado/:area/:grado
 * Devuelve los temas (unidades) disponibles para un grado específico de un área
 */
router.get("/temas-por-grado/:area/:grado", (req, res) => {
  try {
    const { area, grado } = req.params;
    const gradoNum = parseInt(grado);

    // Buscar la carpeta del área (case insensitive)
    const carpetas = fs.readdirSync(outputPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory());

    const carpetaArea = carpetas.find(
      c => c.name.toLowerCase() === area.toLowerCase()
    );

    if (!carpetaArea) {
      return res.status(404).json({
        success: false,
        error: `Área "${area}" no encontrada`
      });
    }

    const areaPath = path.join(outputPath, carpetaArea.name);
    const archivoGrado = `grado_${gradoNum}.json`;
    const rutaArchivo = path.join(areaPath, archivoGrado);

    if (!fs.existsSync(rutaArchivo)) {
      return res.status(404).json({
        success: false,
        error: `No hay datos para grado ${gradoNum} en ${carpetaArea.name}`
      });
    }

    const contenido = JSON.parse(fs.readFileSync(rutaArchivo, "utf-8"));

    const temas = contenido.unidades.map(unidad => ({
      id: unidad.numero,
      titulo: unidad.titulo,
      desempeno_general: unidad.desempeno_general || "",
      cantidad_guias: unidad.guias ? unidad.guias.length : 0
    }));

    res.json({
      success: true,
      data: {
        area: carpetaArea.name,
        grado: gradoNum,
        temas
      }
    });

  } catch (error) {
    console.error("Error al obtener temas por grado:", error);
    res.status(500).json({
      success: false,
      error: "Error al obtener los temas"
    });
  }
});

/**
 * GET /api/guias-data/guias/:area/:grado/:unidad
 * Devuelve las guías específicas de una unidad para un grado
 */
router.get("/guias/:area/:grado/:unidad", (req, res) => {
  try {
    const { area, grado, unidad } = req.params;
    const gradoNum = parseInt(grado);
    const unidadNum = parseInt(unidad);

    // Buscar la carpeta del área
    const carpetas = fs.readdirSync(outputPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory());

    const carpetaArea = carpetas.find(
      c => c.name.toLowerCase() === area.toLowerCase()
    );

    if (!carpetaArea) {
      return res.status(404).json({
        success: false,
        error: `Área "${area}" no encontrada`
      });
    }

    const areaPath = path.join(outputPath, carpetaArea.name);
    const rutaArchivo = path.join(areaPath, `grado_${gradoNum}.json`);

    if (!fs.existsSync(rutaArchivo)) {
      return res.status(404).json({
        success: false,
        error: `No hay datos para grado ${gradoNum}`
      });
    }

    const contenido = JSON.parse(fs.readFileSync(rutaArchivo, "utf-8"));
    const unidadData = contenido.unidades.find(u => u.numero === unidadNum);

    if (!unidadData) {
      return res.status(404).json({
        success: false,
        error: `Unidad ${unidadNum} no encontrada`
      });
    }

    const guias = unidadData.guias.map(guia => ({
      numero: guia.numero,
      titulo: guia.titulo,
      concepto: guia.concepto || "",
      desempeno: guia.desempeno || ""
    }));

    res.json({
      success: true,
      data: {
        area: carpetaArea.name,
        grado: gradoNum,
        unidad: {
          numero: unidadData.numero,
          titulo: unidadData.titulo,
          desempeno_general: unidadData.desempeno_general || ""
        },
        guias
      }
    });

  } catch (error) {
    console.error("Error al obtener guías:", error);
    res.status(500).json({
      success: false,
      error: "Error al obtener las guías"
    });
  }
});

/**
 * GET /api/guias-data/todas-guias/:area/:grado
 * Devuelve TODAS las guías de todas las unidades para un grado específico
 */
router.get("/todas-guias/:area/:grado", (req, res) => {
  try {
    const { area, grado } = req.params;
    const gradoNum = parseInt(grado);

    // Buscar la carpeta del área
    const carpetas = fs.readdirSync(outputPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory());

    const carpetaArea = carpetas.find(
      c => c.name.toLowerCase() === area.toLowerCase()
    );

    if (!carpetaArea) {
      return res.status(404).json({
        success: false,
        error: `Área "${area}" no encontrada`
      });
    }

    const areaPath = path.join(outputPath, carpetaArea.name);
    const rutaArchivo = path.join(areaPath, `grado_${gradoNum}.json`);

    if (!fs.existsSync(rutaArchivo)) {
      return res.status(404).json({
        success: false,
        error: `No hay datos para grado ${gradoNum}`
      });
    }

    const contenido = JSON.parse(fs.readFileSync(rutaArchivo, "utf-8"));

    // Recopilar todas las guías de todas las unidades
    const todasLasGuias = [];

    contenido.unidades.forEach(unidad => {
      if (unidad.guias && Array.isArray(unidad.guias)) {
        unidad.guias.forEach(guia => {
          todasLasGuias.push({
            unidad: unidad.numero,
            unidad_titulo: unidad.titulo,
            numero: guia.numero,
            titulo: guia.titulo,
            concepto: guia.concepto || "",
            desempeno: guia.desempeno || ""
          });
        });
      }
    });

    // Ordenar por número de guía
    todasLasGuias.sort((a, b) => a.numero - b.numero);

    res.json({
      success: true,
      data: {
        area: carpetaArea.name,
        grado: gradoNum,
        total_guias: todasLasGuias.length,
        guias: todasLasGuias
      }
    });

  } catch (error) {
    console.error("Error al obtener todas las guías:", error);
    res.status(500).json({
      success: false,
      error: "Error al obtener las guías"
    });
  }
});

/**
 * GET /api/guias-data/verificar-edicion/:edicion
 * Verifica si una edición está disponible
 */
router.get("/verificar-edicion/:edicion", (req, res) => {
  const { edicion } = req.params;
  const disponible = EDICIONES_DISPONIBLES.includes(edicion);

  res.json({
    success: true,
    edicion,
    disponible,
    mensaje: disponible
      ? `La edición ${edicion} está disponible`
      : `La edición ${edicion} no está disponible. Solo tenemos acceso a las guías de la edición 2026.`,
    edicionesDisponibles: EDICIONES_DISPONIBLES
  });
});

export default router;
