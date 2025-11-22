# Resumen Comparativo: Análisis de Asignaturas RAS 2026 FEN

**Fecha de generación:** 2025-11-22
**Proyecto:** Agente ENA - Sistema de generación de planes docentes
**Fuente:** Redes de Aprendizaje Semestral (RAS) 2026 - Fundación Escuela Nueva (FEN)

---

## 1. INVENTARIO GENERAL DE CONTENIDOS

### Asignaturas Procesadas

| Asignatura | Grados Cubiertos | Total Guías | Archivo JSON |
|------------|------------------|-------------|--------------|
| **Lenguaje** | 1, 2, 3, 4, 5 | 242 guías | `lenguaje.json` |
| **Matemáticas** | 1, 2, 3, 4, 5 | 60 guías | `matematicas.json` / `matematicas_ras_2026.json` |
| **Ciencias Naturales** | 2, 3, 4, 5 | 96 guías | `ciencias_naturales.json` |
| **Ciencias Sociales** | 2, 3, 4, 5 | 88 guías | `ciencias_sociales.json` |
| **Ética** | 2, 3, 4, 5 | 48 guías | `etica.json` |
| **Tecnología** | 2, 3, 4, 5 | 48 guías | `tecnologia_ras_2026.json` |
| **Emprendimiento** | Nivel 1 | Variable | `emprendimiento.json` |
| **Transición** | Preescolar | Variable | `transicion.json` |

**Total estimado:** ~590 guías aproximadamente

---

## 2. ESTRUCTURA CURRICULAR COMÚN

### Patrón organizativo de las RAS 2026

Todas las asignaturas siguen una estructura pedagógica consistente:

```
Asignatura
├── Grados
│   ├── Unidades (4 por grado generalmente)
│   │   ├── Desempeño general
│   │   ├── Guías (2-3 por unidad)
│   │   │   ├── Nombre
│   │   │   ├── Conceptos y procedimientos
│   │   │   ├── Recursos
│   │   │   └── Evidencias de aprendizaje (según asignatura)
```

**Observación clave:** La consistencia en la estructura facilita la generación automatizada de planes docentes en el Agente ENA.

---

## 3. ANÁLISIS COMPARATIVO POR DIMENSIÓN

### 3.1. Cobertura por grados

| Grado | Lenguaje | Matemáticas | C. Naturales | C. Sociales | Ética | Tecnología |
|-------|----------|-------------|--------------|-------------|-------|------------|
| **Preescolar** | ✓ (Transición) | ✓ | - | - | - | - |
| **1°** | ✓ (48 guías) | ✓ (12 guías) | - | - | - | - |
| **2°** | ✓ (20 guías) | ✓ (12 guías) | ✓ (24 guías) | ✓ (23 guías) | ✓ (12 guías) | ✓ (12 guías) |
| **3°** | ✓ (20 guías) | ✓ (12 guías) | ✓ (24 guías) | ✓ (21 guías) | ✓ (12 guías) | ✓ (12 guías) |
| **4°** | ✓ (26 guías) | ✓ (12 guías) | ✓ (24 guías) | ✓ (20 guías) | ✓ (12 guías) | ✓ (12 guías) |
| **5°** | ✓ (24 guías) | ✓ (12 guías) | ✓ (24 guías) | ✓ (21 guías) | ✓ (12 guías) | ✓ (12 guías) |

**Conclusión:**
- **Lenguaje y Matemáticas** tienen mayor cobertura (desde grado 1°)
- **Las demás asignaturas** inician en grado 2°
- **Matemáticas** tiene estructura más uniforme (12 guías por grado)

---

### 3.2. Número de unidades por grado

| Asignatura | Unidades por grado | Patrón |
|------------|-------------------|--------|
| Lenguaje | 4 unidades | Consistente |
| Matemáticas | 4 unidades | Consistente |
| C. Naturales | 4 unidades | Consistente |
| C. Sociales | 4 unidades | Consistente |
| Ética | 4 unidades | Consistente |
| Tecnología | 4 unidades | Consistente |

**Patrón universal:** Todas las asignaturas organizan el contenido en **4 unidades por grado**.

---

### 3.3. Recursos más utilizados (transversal)

#### Top 10 recursos comunes entre asignaturas:

1. **Hojas blancas / papel** - Presente en todas
2. **Lápices de colores** - Presente en todas
3. **Marcadores** - Presente en todas
4. **Cartulina** - Presente en todas
5. **Tijeras** - Presente en todas
6. **Pegamento** - Presente en todas
7. **Regla** - Matemáticas, C. Naturales, Tecnología
8. **Biblioteca o Internet** - Lenguaje, C. Sociales, Ética
9. **Materiales reciclables** - Tecnología, C. Naturales, Ética
10. **Revistas / periódicos** - C. Sociales, Lenguaje, Ética

**Recursos tecnológicos específicos:**
- **Computador:** Tecnología (grados 2-5)
- **Internet:** Transversal como recurso de consulta
- **Calculadora:** Matemáticas (grados 3-5), C. Naturales (grado 5)

---

## 4. TEMAS TRANSVERSALES ENTRE ASIGNATURAS

### 4.1. Medio ambiente y sostenibilidad

| Asignatura | Enfoque | Grados |
|------------|---------|--------|
| **C. Naturales** | Ecosistemas, recursos naturales, contaminación | 2-5 |
| **Tecnología** | Reciclaje, uso racional de recursos, huella ecológica | 2, 4, 5 |
| **C. Sociales** | Recursos naturales del municipio/departamento | 2-4 |
| **Ética** | Cuidado de la vida, bienestar comunitario | 2-5 |

**Oportunidad de articulación:** Proyectos integrados sobre desarrollo sostenible.

---

### 4.2. Derechos y deberes

| Asignatura | Enfoque | Grados |
|------------|---------|--------|
| **C. Sociales** | Derechos de los niños, Constitución Política | 2-5 |
| **Ética** | Derechos humanos, Manual de Convivencia | 2-5 |
| **Lenguaje** | Expresión de derechos mediante textos | 3-5 |

**Oportunidad de articulación:** Gobierno estudiantil, proyectos de convivencia.

---

### 4.3. Comunicación

| Asignatura | Enfoque | Grados |
|------------|---------|--------|
| **Lenguaje** | Expresión oral y escrita, medios de comunicación | 1-5 |
| **Tecnología** | Telecomunicaciones, Internet, mensajería | 5 |
| **C. Sociales** | Medios de comunicación masiva | 5 |
| **Ética** | Comunicación y convivencia | 3-5 |

**Oportunidad de articulación:** Periódico escolar, podcast, emisora estudiantil.

---

### 4.4. Familia y comunidad

| Asignatura | Enfoque | Grados |
|------------|---------|--------|
| **Ética** | Familia como núcleo, valores familiares | 2-5 |
| **C. Sociales** | Tipos de familia, organización comunitaria | 2-5 |
| **Lenguaje** | La familia (narrativas) | 1-2 |

**Oportunidad de articulación:** Escuela de padres, proyectos de participación familiar.

---

### 4.5. Pensamiento científico y experimental

| Asignatura | Enfoque | Grados |
|------------|---------|--------|
| **C. Naturales** | Método científico, experimentación | 2-5 |
| **Matemáticas** | Resolución de problemas, razonamiento lógico | 1-5 |
| **Tecnología** | Diseño, construcción, prototipado | 2-5 |

**Oportunidad de articulación:** Ferias científicas, proyectos STEAM.

---

## 5. PROGRESIÓN CURRICULAR POR ASIGNATURA

### 5.1. Lenguaje (242 guías, grados 1-5)

**Progresión temática:**

| Grado | Enfoque principal | Temas clave |
|-------|------------------|-------------|
| **1°** | Alfabetización inicial | Vocales, consonantes, rondas, cuerpo, familia |
| **2°** | Lectoescritura consolidada | Familia, tiempo-espacio, textos diversos |
| **3°** | Expresión y comprensión | Narraciones, poemas, teatro, símbolos |
| **4°** | Géneros literarios | Cuento, fábula, mito, poesía, teatro |
| **5°** | Textos complejos | Descripción, narración, comunicación, oración |

**Competencias desarrolladas:**
- Comunicativa (oral y escrita)
- Literaria (comprensión y producción)
- Semiótica (interpretación de signos)

---

### 5.2. Matemáticas (60 guías, grados 1-5)

**Progresión temática:**

| Grado | Enfoque principal | Temas clave |
|-------|------------------|-------------|
| **1°** | Números hasta 100 | Conteo, sumas, restas, medición no convencional |
| **2°** | Números hasta 999 | Operaciones básicas, fracciones simples, geometría |
| **3°** | Números grandes | Multiplicación, división, fracciones, área/perímetro |
| **4°** | Operaciones avanzadas | Números grandes, fracciones/decimales, volumen |
| **5°** | Números complejos | Potencias, enteros, razones, probabilidad |

**Componentes transversales:**
- Razonamiento matemático
- Resolución de problemas
- Modelación matemática
- Comunicación matemática

---

### 5.3. Ciencias Naturales (96 guías, grados 2-5)

**Progresión temática:**

| Grado | Enfoque principal | Temas clave |
|-------|------------------|-------------|
| **2°** | Seres vivos y entorno | Clasificación, ciclos de vida, fuerza, materia |
| **3°** | Ecosistemas | Reinos, relaciones, energía, luz, sonido |
| **4°** | Sistema solar y Tierra | Planetas, ecosistemas, mezclas, fuerzas |
| **5°** | Cuerpo humano | Células, sistemas corporales, química, electricidad |

**Proceso científico:**
- Explorar hechos y fenómenos
- Observar, recoger y organizar información
- Analizar problemas
- Utilizar diferentes métodos de análisis
- Compartir resultados

---

### 5.4. Ciencias Sociales (88 guías, grados 2-5)

**Progresión temática:**

| Grado | Enfoque principal | Temas clave |
|-------|------------------|-------------|
| **2°** | Familia y comunidad | Identidad, familia, municipio, paisaje |
| **3°** | Municipio y departamento | Organización, autoridades, región, historia |
| **4°** | Colombia y América | Derechos, clima, grupos étnicos, Colonia |
| **5°** | Historia de Colombia | Constitución, territorio, independencia, siglo XX |

**Dimensiones:**
- Espacial (geografía)
- Temporal (historia)
- Política (organización)
- Cultural (identidad)

---

### 5.5. Ética (48 guías, grados 2-5)

**Progresión temática:**

| Grado | Enfoque principal | Temas clave |
|-------|------------------|-------------|
| **2°** | Autoimagen y cuerpo | Rasgos físicos, emociones, sentidos, necesidades |
| **3°** | Vida y bienestar | Salud, higiene, solidaridad, diversión |
| **4°** | Familia y comunidad | Familia, escuela, comunidad, dignidad |
| **5°** | Valores morales | Familia, aptitudes, comunidad, humanización |

**Ejes formativos:**
- Autoconocimiento
- Convivencia
- Valores morales
- Resolución de conflictos

---

### 5.6. Tecnología (48 guías, grados 2-5)

**Progresión temática:**

| Grado | Enfoque principal | Temas clave |
|-------|------------------|-------------|
| **2°** | Reconocimiento básico | Objetos naturales/artificiales, transformación |
| **3°** | Artefactos analógicos | Mecanismos, madera, luz, medición |
| **4°** | Evolución tecnológica | Inventos, sistemas en vivienda, energías |
| **5°** | Materiales avanzados | Caucho/plástico, transporte, telecomunicaciones |

**Componentes de competencia:**
- NET&I (Naturaleza y evolución de T&I)
- UAT&I (Uso y apropiación de T&I)
- SPT&I (Solución de problemas con T&I)
- TIS (Tecnología, informática y sociedad)

---

## 6. ENFOQUE STEAM: ANÁLISIS TRANSVERSAL

### Distribución del enfoque STEAM por asignatura

| Componente STEAM | Lenguaje | Matemáticas | C. Naturales | C. Sociales | Ética | Tecnología |
|------------------|----------|-------------|--------------|-------------|-------|------------|
| **Science** | Bajo | Medio | Alto | Bajo | Bajo | Alto |
| **Technology** | Medio | Medio | Medio | Bajo | Bajo | Alto |
| **Engineering** | Bajo | Alto | Medio | Bajo | Bajo | Alto |
| **Arts** | Alto | Medio | Bajo | Medio | Alto | Medio |
| **Mathematics** | Bajo | Alto | Medio | Bajo | Bajo | Medio |

**Observación:**
- **Tecnología** es la asignatura más explícitamente STEAM
- **Matemáticas y C. Naturales** tienen componentes STEM fuertes
- **Lenguaje y Ética** aportan principalmente desde Arts (creatividad, expresión)

---

## 7. METODOLOGÍA ESCUELA NUEVA ACTIVA

### Elementos comunes en todas las asignaturas

#### 7.1. Trabajo colaborativo
- **Gobierno estudiantil** (Ética, C. Sociales)
- **Comités de trabajo** (Tecnología, C. Naturales)
- **Proyectos grupales** (Lenguaje, Matemáticas)

#### 7.2. Aprendizaje autónomo
- **Guías autoinstructivas** (todas las asignaturas)
- **Actividades A, B, C** con diferenciación
- **Autoevaluación** y coevaluación

#### 7.3. Contextualización
- **Uso del entorno** como recurso de aprendizaje
- **Relación con la comunidad** (todas las asignaturas)
- **Adaptación rural/urbana**

#### 7.4. Evaluación formativa
- **Evidencias de aprendizaje** específicas por competencia
- **Criterios de desempeño** observables
- **Portafolio de aprendizaje**

---

## 8. OPORTUNIDADES DE ARTICULACIÓN CURRICULAR

### Proyectos integrados sugeridos por grado

#### Grado 2°
**Proyecto:** "Mi comunidad y yo"
- **Lenguaje:** Descripción de la comunidad
- **Matemáticas:** Conteo de población, medición de espacios
- **C. Naturales:** Recursos naturales de la comunidad
- **C. Sociales:** Organización comunitaria
- **Ética:** Convivencia y valores
- **Tecnología:** Objetos tecnológicos en la comunidad

#### Grado 3°
**Proyecto:** "Exploradores de nuestro departamento"
- **Lenguaje:** Guías turísticas, leyendas regionales
- **Matemáticas:** Distancias, áreas de regiones
- **C. Naturales:** Ecosistemas del departamento
- **C. Sociales:** División política, historia departamental
- **Ética:** Solidaridad con comunidades vecinas
- **Tecnología:** Medios de transporte regional

#### Grado 4°
**Proyecto:** "Viaje por la historia de Colombia"
- **Lenguaje:** Crónicas históricas, biografías
- **Matemáticas:** Líneas de tiempo, estadísticas poblacionales
- **C. Naturales:** Biodiversidad colombiana
- **C. Sociales:** Conquista, Colonia, Independencia
- **Ética:** Derechos humanos en la historia
- **Tecnología:** Inventos históricos colombianos

#### Grado 5°
**Proyecto:** "Colombia: presente y futuro"
- **Lenguaje:** Ensayos, debates, periódico escolar
- **Matemáticas:** Estadísticas nacionales, economía
- **C. Naturales:** Recursos naturales, conservación
- **C. Sociales:** Constitución, organización política actual
- **Ética:** Construcción de ciudadanía
- **Tecnología:** Telecomunicaciones, Internet

---

## 9. RECURSOS DIGITALES Y TIC

### Uso de tecnología por asignatura

| Asignatura | Recursos digitales mencionados | Frecuencia |
|------------|-------------------------------|------------|
| **Lenguaje** | Internet para consultas, videos | Media |
| **Matemáticas** | Calculadora, computador (opcional) | Media |
| **C. Naturales** | Microscopio, termómetro, videos | Media |
| **C. Sociales** | Internet, mapas digitales | Alta |
| **Ética** | Internet para investigación | Baja |
| **Tecnología** | Computador, Internet, dispositivos | Alta |

**Observación:** Aunque se menciona el uso de TIC, la mayoría de actividades están diseñadas para funcionar **sin dependencia tecnológica**, adaptándose a contextos rurales con recursos limitados.

---

## 10. COMPARACIÓN DE COMPLEJIDAD COGNITIVA

### Taxonomía de Bloom predominante por asignatura

| Asignatura | Recordar | Comprender | Aplicar | Analizar | Evaluar | Crear |
|------------|----------|------------|---------|----------|---------|-------|
| **Lenguaje** | ★★☆ | ★★★ | ★★★ | ★★☆ | ★★☆ | ★★★ |
| **Matemáticas** | ★★☆ | ★★★ | ★★★ | ★★★ | ★★☆ | ★★☆ |
| **C. Naturales** | ★★☆ | ★★★ | ★★★ | ★★★ | ★★★ | ★★☆ |
| **C. Sociales** | ★★★ | ★★★ | ★★☆ | ★★☆ | ★★☆ | ★☆☆ |
| **Ética** | ★☆☆ | ★★★ | ★★★ | ★★★ | ★★★ | ★★☆ |
| **Tecnología** | ★★☆ | ★★★ | ★★★ | ★★☆ | ★★☆ | ★★★ |

**Leyenda:** ★★★ = Alto, ★★☆ = Medio, ★☆☆ = Bajo

---

## 11. RECOMENDACIONES PARA EL AGENTE ENA

### 11.1. Priorización de contenidos

Cuando el usuario solicite generar un plan docente, el Agente ENA debe:

1. **Identificar temas transversales** para potenciar la articulación
2. **Respetar la progresión curricular** de cada asignatura
3. **Adaptar recursos** según el contexto (rural/urbano, disponibilidad)
4. **Incluir componentes STEAM** cuando sea pertinente
5. **Generar actividades diferenciadas** para contextos multigrado

---

### 11.2. Estrategias de contextualización

- **Multigrado:** Identificar temas comunes entre grados consecutivos (ej: ecosistemas en C. Naturales 2-3)
- **Monogrado:** Profundizar en temas específicos del grado
- **Recursos limitados:** Priorizar materiales del entorno y reciclables
- **Dificultades de aprendizaje:** Utilizar las actividades A (básicas) y proporcionar apoyos visuales

---

### 11.3. Generación de planes flexibles

El Agente ENA puede generar:

1. **Planes semanales** (1 semana, 1 asignatura)
2. **Planes quincenales** (2 semanas, varias asignaturas)
3. **Planes mensuales** (4 semanas, integración curricular)
4. **Proyectos integrados** (tema transversal, varias asignaturas)

**Parámetros configurables:**
- Grado(s)
- Asignatura(s)
- Duración (semanas)
- Contexto (multigrado, recursos, necesidades especiales)
- Articulaciones ENA (gobierno estudiantil, comités, familia)

---

## 12. ESTADÍSTICAS GENERALES

### 12.1. Distribución de guías por asignatura

```
Lenguaje        ████████████████████████ 242 guías (41%)
C. Naturales    ████████████████ 96 guías (16%)
C. Sociales     ██████████████ 88 guías (15%)
Matemáticas     ██████████ 60 guías (10%)
Ética           ████████ 48 guías (8%)
Tecnología      ████████ 48 guías (8%)
Otros           ██ 10 guías (2%)
```

---

### 12.2. Cobertura por grado

| Grado | Asignaturas disponibles | Guías estimadas |
|-------|------------------------|-----------------|
| **Preescolar** | 2 | ~10 |
| **1°** | 2 | ~60 |
| **2°** | 6 | ~103 |
| **3°** | 6 | ~101 |
| **4°** | 6 | ~106 |
| **5°** | 6 | ~105 |

---

## 13. CONCLUSIONES Y HALLAZGOS CLAVE

### 13.1. Fortalezas del currículo RAS 2026

1. **Coherencia estructural:** Todas las asignaturas siguen el mismo patrón organizativo
2. **Enfoque competencial:** Se desarrollan competencias específicas por asignatura
3. **Contextualización:** Adaptado a realidades rurales colombianas
4. **Recursos accesibles:** Uso de materiales del entorno y bajo costo
5. **Metodología activa:** Escuela Nueva promueve autonomía y colaboración

---

### 13.2. Oportunidades de mejora

1. **Integración STEAM:** Aunque Tecnología tiene enfoque explícito, se puede fortalecer en otras asignaturas
2. **Recursos digitales:** Mayor aprovechamiento de TIC cuando estén disponibles
3. **Articulación horizontal:** Más proyectos integrados entre asignaturas del mismo grado
4. **Articulación vertical:** Secuencias de aprendizaje más claras entre grados
5. **Evaluación:** Mayor énfasis en rúbricas y criterios de desempeño observables

---

### 13.3. Aplicación en el Agente ENA

El análisis comparativo permite al Agente ENA:

1. **Generar planes coherentes** con la estructura RAS 2026
2. **Identificar conexiones** entre asignaturas para proyectos integrados
3. **Adaptar contenidos** según contexto (multigrado, recursos, NEE)
4. **Sugerir recursos** apropiados por asignatura y grado
5. **Distribuir contenidos** en períodos semanales de forma equilibrada

---

## 14. PRÓXIMOS PASOS

### Para el desarrollo del Agente ENA:

1. ✅ **Base de datos completa:** JSONs de todas las asignaturas generados
2. ⏳ **Sistema de búsqueda semántica:** Implementar búsqueda de contenidos por tema
3. ⏳ **Generador de planes flexibles:** Algoritmo que combine asignaturas según parámetros
4. ⏳ **Módulo de articulación:** Identificar automáticamente temas transversales
5. ⏳ **Adaptador contextual:** Modificar planes según multigrado/recursos/NEE

---

**Elaborado por:** Claude Code (Agente ENA)
**Versión:** 1.0
**Última actualización:** 2025-11-22

---

## Anexo: Índice de archivos JSON

- `src/data/guias_ras_2026/lenguaje.json`
- `src/data/guias_ras_2026/matematicas.json`
- `src/data/guias_ras_2026/ciencias_naturales.json`
- `src/data/guias_ras_2026/ciencias_sociales.json`
- `src/data/guias_ras_2026/etica.json`
- `src/data/guias_ras_2026/emprendimiento.json`
- `src/data/guias_ras_2026/transicion.json`
- `src/data/guias_ras_2026/tecnologia_ras_2026.json` (nuevo)
- `src/data/guias_ras_2026/matematicas_ras_2026.json` (nuevo)

---

**FIN DEL DOCUMENTO**
