# CLAUDE.md

Este archivo proporciona orientación a Claude Code (claude.ai/code) cuando trabaja con código en este repositorio.

## Descripción del Proyecto

**Agente ENA** es un sistema de generación de planes docentes flexibles para el modelo educativo Escuela Nueva Activa (ENA) en Colombia. Utiliza la API de OpenAI para generar planes personalizados por grado basándose en contextos específicos del aula (multigrado/monogrado, recursos disponibles, dificultades de aprendizaje, etc.).

## Comandos de Desarrollo

- **Iniciar en desarrollo (watch mode)**: `npm run dev`
- **Iniciar en producción**: `npm start`
- **Instalar dependencias**: `npm install`

## Arquitectura del Sistema

### Flujo Principal de Generación

1. El cliente (frontend en `public/index.html`) envía datos del contexto educativo al endpoint `/api/generate-flex`
2. El router (`src/routes/generate-flex.js`) procesa la solicitud y:
   - Carga lineamientos ENA 2025 desde PDF usando `getGuidelines()` (caché inteligente)
   - Construye un prompt estructurado con el contexto del docente
   - Envía la petición a OpenAI Responses API con `json_schema` strict
   - Aplica valores por defecto con `ensureDefaults()`
   - Retorna el plan docente en formato JSON

### Componentes Clave

#### `src/routes/generate-flex.js`
Endpoint principal que orquesta la generación de planes:
- Usa OpenAI Responses API (modelo `gpt-4.1`) con `json_schema` strict para garantizar salida válida
- Valida contra el schema en `src/schemas/planFlexible.json`
- Distribuye el plan en ~3 semanas con indicador "Semana N:" en cada actividad
- Función `ensureDefaults()` asegura que campos opcionales tengan valores mínimos válidos

#### `src/utils/guidelines.js`
Sistema de caché para lineamientos ENA:
- Lee PDF desde carpeta `Insumos/` (busca archivos con "ena" o "planeaci" en el nombre)
- Sube el PDF a OpenAI Files API y lo procesa con `gpt-4.1-mini`
- Cachea resultados en `src/guidelines/cache.json` verificando `mtime` del PDF
- Si el PDF cambia (mtime diferente), regenera los lineamientos automáticamente

#### `src/utils/enaDoc.js`
Funciones auxiliares para manejo de documentos ENA (actualmente en desuso directo):
- `ensureEnaAttachment()`: Sube PDF a OpenAI Files
- `ensureEnaVectorStore()`: Crea vector store para búsqueda semántica

#### `src/schemas/planFlexible.json`
Schema JSON strict que define la estructura completa del plan docente:
- Metadatos, contexto del aula, alineación curricular
- Planificación por grados con objetivos, actividades, evaluación
- Adaptaciones (ritmos, multigrado, apoyos entre pares)
- Articulaciones ENA (gobierno estudiantil, comités, familia)
- Seguimiento con indicadores e instrumentos

### Variables de Entorno

Requiere un archivo `.env` con:
```
OPENAI_API_KEY=tu_clave_aqui
PORT=3000  # opcional, por defecto 3000
```

### Carpetas de Datos

- **`Insumos/`**: Almacena documentos PDF de referencia ENA 2025 (lineamientos oficiales)
- **`src/guidelines/`**: Caché automático de lineamientos extraídos del PDF
- **`public/`**: Frontend estático (HTML/CSS/JS)

## Consideraciones Técnicas

- **Módulos ES**: El proyecto usa `"type": "module"` en `package.json`, todos los imports deben incluir extensión `.js`
- **JSON Schema Strict**: OpenAI garantiza que la salida coincida exactamente con el schema, pero `ensureDefaults()` asegura valores mínimos para campos opcionales
- **Caché inteligente**: Los lineamientos se regeneran solo si el PDF fuente cambia (verificación por `mtimeMs`)
- **Multigrado vs Monogrado**: El prompt adapta actividades según `tipo_aula` y `estudiantes_por_grado` del contexto
- **Diferenciación por recursos**: El sistema ajusta actividades según `recursos_aula` (ej: sin TIC si no hay computadores)

## Extensiones Futuras

Para agregar nuevas funcionalidades:
1. Modificar el schema en `src/schemas/planFlexible.json` (SIEMPRE mantener `strict: true` y `additionalProperties: false`)
2. Actualizar `ensureDefaults()` para nuevos campos opcionales
3. Ajustar el prompt en `generate-flex.js` para instruir al modelo sobre los nuevos campos
4. Regenerar la caché de lineamientos si es necesario (`force: true` en `getGuidelines()`)
- Quiero que este proyecto el dinero se maneje en dolares