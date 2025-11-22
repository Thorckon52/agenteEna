# Ejemplo Práctico: Sistema de Sustitución de Recursos

**Fecha:** 2025-11-22
**Escenario:** Escuela Rural Multigrado San Martín

---

## CONTEXTO DE LA ESCUELA

**Nombre:** Escuela Rural San Martín
**Ubicación:** Vereda El Roble, Municipio de Guamal (Meta)
**Tipo:** Multigrado (Grados 3°, 4° y 5° juntos)
**Docente:** Profesora María Elena Rodríguez
**Estudiantes:** 18 (6 de 3°, 7 de 4°, 5 de 5°)
**Zona:** Rural dispersa, 2 horas del casco urbano

### Recursos disponibles en el aula:

✅ **Tiene:**
- Mesitas para trabajo en grupo (4 mesas)
- Rincón de matemáticas (con algunos materiales básicos)
- Rincón de naturales
- Biblioteca aula (20 libros aproximadamente)

❌ **NO tiene:**
- Computador
- Internet
- TV
- Materiales didácticos comerciales (ábacos, Material Base 10, compases, etc.)
- Impresora
- Proyector

---

## PASO 1: SELECCIÓN DE ÁREA Y TEMA

La profesora María Elena completa el formulario del Agente ENA:

### Paso 4: Guías ENA y Área

```javascript
{
  area: "matematicas",
  edicion_guia: "2026",
  tema_general: "geometría_(figuras_planas_y_cuerpos_geométricos)"
}
```

---

## PASO 2: GUÍAS RECOMENDADAS

El sistema (paso 5) le muestra las guías ENA específicas para cada grado:

### Grado 3°:
- **Unidad 4, Guía 10:** Perímetro y área
- **Unidad 4, Guía 11:** Ángulos y triángulos

### Grado 4°:
- **Unidad 3, Guía 8:** Área de polígonos
- **Unidad 3, Guía 9:** Volumen de cuerpos
- **Unidad 4, Guía 10:** Transformaciones geométricas

### Grado 5°:
- **Unidad 3, Guía 7:** Área y perímetro de polígonos
- **Unidad 3, Guía 8:** Volumen de prismas y pirámides

---

## PASO 3: EXTRACCIÓN DE RECURSOS REQUERIDOS

El backend analiza los JSONs de RAS 2026 y extrae los recursos que requieren estas guías:

### Recursos requeridos (según guías):

```javascript
[
  // De Guía 10 (Grado 3) - Perímetro y área
  "Regla",
  "Cinta métrica",
  "Cuaderno",
  "Lápiz",
  "Papel cuadriculado",

  // De Guía 11 (Grado 3) - Ángulos y triángulos
  "Regla",
  "Compás",
  "Transportador",
  "Escuadras",
  "Palitos",
  "Plastilina",

  // De Guía 8 (Grado 4) - Área de polígonos
  "Regla",
  "Papel cuadriculado",
  "Tijeras punta roma",
  "Cuaderno",

  // De Guía 9 (Grado 4) - Volumen
  "Cubos de madera",
  "Cajas de diferentes tamaños",
  "Regla",

  // De Guía 7 (Grado 5) - Área y perímetro
  "Regla",
  "Compás",
  "Transportador",
  "Papel cuadriculado",

  // De Guía 8 (Grado 5) - Volumen de prismas
  "Cubos de madera",
  "Cartulina",
  "Tijeras",
  "Pegamento"
]
```

### Recursos únicos (sin duplicados):

```javascript
[
  "Regla",
  "Cinta métrica",
  "Compás",
  "Transportador",
  "Escuadras",
  "Papel cuadriculado",
  "Palitos",
  "Plastilina",
  "Tijeras punta roma",
  "Cubos de madera",
  "Cajas de diferentes tamaños",
  "Cartulina",
  "Pegamento",
  "Cuaderno",
  "Lápiz"
]
```

---

## PASO 4: COMPARACIÓN CON RECURSOS DISPONIBLES

### Análisis del sistema:

```javascript
// Recursos del docente (del formulario paso 3)
recursos_disponibles: [
  "Mesitas para trabajo en grupo",
  "Rincon de matematicas",
  "Rincon de naturales",
  "Biblioteca aula"
]

// El sistema asume que en "Rincón de matemáticas" puede haber algunos básicos
// pero no los instrumentos comerciales específicos
```

### Resultado del análisis:

```javascript
{
  recursos_completos: [
    "Cuaderno",      // Básico universal
    "Lápiz",         // Básico universal
    "Palitos",       // Del entorno
    "Cajas de diferentes tamaños"  // Recicladas
  ],

  recursos_faltantes: [
    "Regla",
    "Cinta métrica",
    "Compás",
    "Transportador",
    "Escuadras",
    "Papel cuadriculado",
    "Plastilina",
    "Tijeras punta roma",
    "Cubos de madera",
    "Cartulina",
    "Pegamento"
  ]
}
```

---

## PASO 5: SUGERENCIAS DE ALTERNATIVAS

El sistema genera sugerencias automáticas para cada recurso faltante:

### 1. Regla

```javascript
{
  recurso_faltante: "Regla",
  categoria: "Instrumento de medición",
  alternativas: [
    "Tira de cartón marcada en centímetros",
    "Regla casera (palo marcado)",
    "Cinta métrica",
    "Usar el borde del cuaderno como referencia"
  ],
  instrucciones_fabricacion: "Fabricar regla casera: cortar cartón de 30 cm, marcar cada centímetro con lápiz y regla de préstamo",
  notas: "Una regla casera es suficiente para muchas actividades de medición"
}
```

### 2. Compás

```javascript
{
  recurso_faltante: "Compás",
  categoria: "Instrumento de geometría",
  alternativas: [
    "Compás casero (lápiz + cuerda)",
    "Tapa circular para trazar círculos",
    "Plato pequeño",
    "Vaso",
    "Dos lápices unidos con cuerda o banda elástica"
  ],
  instrucciones_fabricacion: "Compás casero: atar un lápiz al extremo de una cuerda de 5-10 cm, fijar el otro extremo con un alfiler o dedo en el centro",
  notas: "Para círculos pequeños se pueden usar tapas o vasos como plantilla"
}
```

### 3. Transportador

```javascript
{
  recurso_faltante: "Transportador",
  categoria: "Instrumento de medición",
  alternativas: [
    "Transportador casero (fotocopia plastificada)",
    "Escuadras para ángulos de 90°, 45°, 60°",
    "Círculo de cartón dividido en grados",
    "Estimación visual de ángulos"
  ],
  instrucciones_fabricacion: "Fotocopiar un transportador y pegarlo en cartón, o dibujar uno en cartulina con compás",
  notas: "Para primaria básica a menudo basta con identificar ángulos rectos, agudos y obtusos sin medir grados exactos"
}
```

### 4. Plastilina

```javascript
{
  recurso_faltante: "Plastilina",
  categoria: "Material moldeable",
  alternativas: [
    "Masa casera (harina + sal + agua + colorante)",
    "Arcilla",
    "Barro",
    "Masa de pan"
  ],
  instrucciones_fabricacion: "Masa casera: 2 tazas de harina + 1 taza de sal + 1 taza de agua + colorante. Mezclar y amasar hasta consistencia suave.",
  notas: "La plastilina casera es más económica y no tóxica"
}
```

### 5. Papel cuadriculado

```javascript
{
  recurso_faltante: "Papel cuadriculado",
  categoria: "Material de papel",
  alternativas: [
    "Cuaderno cuadriculado de matemáticas",
    "Dibujar cuadrícula en hoja blanca con regla",
    "Fotocopia de hoja cuadriculada para compartir",
    "Usar cuaderno de líneas y contar espacios"
  ],
  notas: "Si no hay cuaderno cuadriculado, los estudiantes pueden dibujar su propia cuadrícula"
}
```

### 6-11. Otros recursos

```javascript
"Cartulina" → "Cartón delgado (cajas recicladas)", "Hojas blancas pegadas"
"Pegamento" → "Pegamento casero (harina + agua)", "Engrudo"
"Tijeras punta roma" → "Tijeras escolares compartidas", "Rasgar con las manos"
"Escuadras" → "Escuadra casera de cartón", "Esquina de una hoja (90°)"
"Cinta métrica" → "Metro de costura", "Cuerda marcada cada 10 cm"
"Cubos de madera" → "Cubos de cartón", "Cajas pequeñas de fósforos"
```

---

## PASO 6: CONTEXTO GENERADO PARA OPENAI

El sistema construye este texto que se agrega al prompt:

```
⚠️ ADAPTACIÓN DE RECURSOS:

El docente NO cuenta con los siguientes recursos:

1. **Regla** (Instrumento de medición)
   ALTERNATIVAS SUGERIDAS:
   - Tira de cartón marcada en centímetros
   - Regla casera (palo marcado)
   - Cinta métrica
   FABRICACIÓN: Fabricar regla casera: cortar cartón de 30 cm, marcar cada centímetro con lápiz y regla de préstamo
   Nota: Una regla casera es suficiente para muchas actividades de medición

2. **Compás** (Instrumento de geometría)
   ALTERNATIVAS SUGERIDAS:
   - Compás casero (lápiz + cuerda)
   - Tapa circular para trazar círculos
   - Plato pequeño
   FABRICACIÓN: Compás casero: atar un lápiz al extremo de una cuerda de 5-10 cm, fijar el otro extremo con un alfiler o dedo en el centro
   Nota: Para círculos pequeños se pueden usar tapas o vasos como plantilla

3. **Transportador** (Instrumento de medición)
   ALTERNATIVAS SUGERIDAS:
   - Transportador casero (fotocopia plastificada)
   - Escuadras para ángulos de 90°, 45°, 60°
   - Círculo de cartón dividido en grados
   FABRICACIÓN: Fotocopiar un transportador y pegarlo en cartón, o dibujar uno en cartulina con compás
   Nota: Para primaria básica a menudo basta con identificar ángulos rectos, agudos y obtusos sin medir grados exactos

[... continúa con los 11 recursos faltantes ...]

📋 INSTRUCCIÓN PARA EL PLAN:
En cada actividad que requiera recursos faltantes, DEBES:
1. Mencionar el recurso ideal de la guía ENA
2. Sugerir EXPLÍCITAMENTE las alternativas indicadas arriba
3. Adaptar la metodología si es necesario según la alternativa
4. Incluir instrucciones de fabricación cuando aplique

Ejemplo: "Los estudiantes trabajarán con Material Base 10 (Guía 8). Como alternativa, usarán palitos agrupados con ligas: 1 palito suelto = 1 unidad, 10 palitos atados = 1 decena."
```

---

## PASO 7: PLAN DOCENTE GENERADO

El modelo GPT-4.1 genera el plan integrando las alternativas. Aquí un ejemplo de actividad:

### Actividad Grado 3°: Midiendo perímetros en el patio

```json
{
  "nombre": "Midiendo perímetros en el patio",
  "descripcion": "Semana 1: Trabajo práctico con la Unidad 4, Guía 10 (Perímetro y área), específicamente las actividades A, B y C.

Guía ENA: Unidad 4, Guía 10 (Perímetro y área) - Actividades A, B y C

Descripción: Los estudiantes de 3° saldrán al patio a medir perímetros de espacios reales mientras el docente trabaja con otros grados en el aula.

RECURSOS NECESARIOS:

1. REGLA (recurso ideal de la guía)
   ❌ NO DISPONIBLE en la escuela
   ✅ ALTERNATIVA: Fabricar reglas caseras de cartón

   📐 Instrucciones de fabricación (Actividad inicial):
   - Conseguir cartón de cajas recicladas (galletas, zapatos, cereales)
   - Cortar tiras de cartón de 30 cm de largo x 3 cm de ancho
   - Usar la regla del docente o una regla que se pida prestada del pueblo
   - Marcar cada centímetro con lápiz y marcador
   - Escribir los números: 1, 2, 3... hasta 30
   - Cada estudiante tendrá su regla casera permanente

   Tiempo de fabricación: 15 minutos
   Material: Cartón reciclado (gratuito)

2. CINTA MÉTRICA (recurso ideal de la guía)
   ❌ NO DISPONIBLE
   ✅ ALTERNATIVA: Usar pasos calibrados

   📏 Metodología:
   - Cada estudiante mide cuánto mide su paso normal (usando regla casera)
   - Anotan: \"Mi paso mide ___ cm\"
   - Para medir espacios grandes, cuentan pasos y multiplican
   - Ejemplo: Si el paso mide 50 cm y dieron 12 pasos → 12 × 50 = 600 cm = 6 metros

Concepto: El perímetro es la medida del contorno de una figura. Para calcularlo se suman las longitudes de todos sus lados. Se mide en unidades de longitud (cm, m).

Proceso:
1. FABRICACIÓN DE HERRAMIENTAS (15 minutos):
   - Fabricar reglas caseras de cartón siguiendo las instrucciones
   - Calibrar el tamaño del paso de cada estudiante
   - Anotar en el cuaderno: \"Mi regla mide 30 cm. Mi paso mide ___ cm\"

2. SALIDA AL PATIO (20 minutos):
   - En grupos de 3 estudiantes (2 grupos de 3)
   - Identificar 3 espacios rectangulares del patio:
     * La cancha de fútbol
     * El jardín de flores
     * La zona de juegos
   - Medir cada lado usando:
     * Regla casera para lados cortos (menos de 30 cm)
     * Pasos para lados largos (más de 30 cm)

3. REGISTRO DE MEDIDAS (10 minutos):
   - Completar la tabla de la Guía 10, Actividad B:

   | Espacio       | Lado 1 | Lado 2 | Lado 3 | Lado 4 | Perímetro |
   |---------------|--------|--------|--------|--------|-----------|
   | Cancha        | ___ m  | ___ m  | ___ m  | ___ m  | ___ m     |
   | Jardín        | ___ cm | ___ cm | ___ cm | ___ cm | ___ cm    |
   | Zona de juegos| ___ m  | ___ m  | ___ m  | ___ m  | ___ m     |

4. CÁLCULO DE PERÍMETROS (15 minutos):
   - Sumar los lados de cada espacio
   - Perímetro = Lado 1 + Lado 2 + Lado 3 + Lado 4
   - Verificar cálculos con compañeros

5. REFLEXIÓN (10 minutos):
   - Completar Actividad C de la Guía 10: Preguntas de reflexión
   - ¿Cuál espacio tiene mayor perímetro? ¿Por qué?
   - ¿Qué diferencias encontraron al medir con regla vs con pasos?
   - ¿En qué situaciones es mejor usar cada método?

Producto:
- 1 regla casera de cartón por estudiante (para uso permanente)
- Tabla de la Guía 10 completada con al menos 3 espacios medidos
- Cálculos correctos del perímetro con unidades (cm o m)
- Respuestas escritas a las preguntas de reflexión de la Actividad C

Evaluación:
- Precisión de la regla casera fabricada (±5 mm de error aceptable)
- Correcta medición de lados (evidencia en la tabla)
- Cálculos de perímetro correctos (suma de los 4 lados)
- Uso apropiado de unidades (cm para objetos pequeños, m para espacios grandes)
- Participación en el trabajo grupal

Tiempo total: 70 minutos

NOTA PARA LA DOCENTE:
Esta actividad NO requiere materiales comerciales. Todo se fabrica con cartón reciclado que se puede conseguir en las casas de los estudiantes o en la tienda del pueblo. Las reglas caseras quedan para uso permanente en el Rincón de Matemáticas."
}
```

### Actividad Grado 4°: Construcción de polígonos

```json
{
  "nombre": "Construcción de polígonos con materiales caseros",
  "descripcion": "Semana 1: Trabajo con la Unidad 3, Guía 8 (Área de polígonos), actividades A y B.

Guía ENA: Unidad 3, Guía 8 (Área de polígonos) - Actividades A y B

Descripción: Mientras 3° mide en el patio, los estudiantes de 4° trabajarán de forma autónoma construyendo polígonos con materiales alternativos.

RECURSOS NECESARIOS:

1. COMPÁS (recurso ideal)
   ❌ NO DISPONIBLE
   ✅ ALTERNATIVA 1: Compás casero con lápiz y cuerda
   ✅ ALTERNATIVA 2: Tapas circulares para círculos pequeños

   🔧 Instrucciones compás casero:
   - Cuerda o pita de 10 cm
   - Atar un lápiz en un extremo
   - Fijar el otro extremo con un alfiler (o sostener con el dedo)
   - Girar el lápiz manteniendo la cuerda tensa → círculo perfecto

   🔧 Método con tapas:
   - Recolectar tapas de diferentes tamaños (gaseosa, agua, frascos)
   - Colocar la tapa sobre el papel
   - Trazar el contorno con lápiz
   - Sirve para círculos pequeños

2. REGLA (recurso ideal)
   ✅ DISPONIBLE: Reglas caseras fabricadas en la actividad anterior de 3°
   💡 Los estudiantes de 4° pueden usar las mismas reglas de cartón

3. PAPEL CUADRICULADO (recurso ideal)
   ❌ NO DISPONIBLE
   ✅ ALTERNATIVA: Dibujar cuadrícula en hoja blanca

   📐 Instrucciones:
   - Usar la regla casera
   - Marcar puntos cada 1 cm en horizontal
   - Marcar puntos cada 1 cm en vertical
   - Unir puntos con líneas → cuadrícula de 1x1 cm
   - Hacer una hoja cuadriculada grande (15x15 cm) para toda la semana

Concepto: Un polígono es una figura plana cerrada formada por segmentos de recta llamados lados. Los polígonos se clasifican según su número de lados: triángulo (3), cuadrilátero (4), pentágono (5), hexágono (6), etc.

Proceso:
1. PREPARACIÓN DE MATERIALES (15 minutos):
   - Fabricar compás casero con cuerda y lápiz
   - Recolectar tapas de diferentes tamaños
   - Dibujar hoja cuadriculada con regla casera

2. CONSTRUCCIÓN DE POLÍGONOS (30 minutos):
   - Seguir la Guía 8, Actividad A: Tipos de polígonos

   a) Triángulo:
      - Dibujar 3 puntos en el papel
      - Unir con regla casera
      - Clasificar: equilátero, isósceles o escaleno

   b) Cuadrilátero:
      - Dibujar 4 puntos
      - Unir con regla
      - Identificar: cuadrado, rectángulo, rombo, trapecio

   c) Pentágono:
      - Marcar 5 puntos equidistantes en un círculo (usar compás casero)
      - Unir los puntos

   d) Hexágono:
      - Marcar 6 puntos en un círculo
      - Unir los puntos

3. MEDICIÓN DE LADOS (20 minutos):
   - Usar regla casera para medir cada lado de los polígonos
   - Registrar medidas en la tabla de la Guía 8
   - Calcular perímetro de cada polígono

4. AUTO-EVALUACIÓN (5 minutos):
   - Verificar que todos los lados estén unidos
   - Comprobar que las figuras estén cerradas
   - Revisar cálculos de perímetro

Producto:
- 1 hoja cuadriculada dibujada a mano (para uso permanente)
- 1 compás casero funcional
- 6 polígonos dibujados (2 triángulos, 2 cuadriláteros, 1 pentágono, 1 hexágono)
- Tabla de la Guía 8, Actividad A completada con medidas y perímetros
- Clasificación correcta de cada polígono

Evaluación:
- Precisión en el trazado de figuras (uso correcto de regla y compás casero)
- Polígonos cerrados correctamente
- Medidas registradas con unidades (cm)
- Cálculos de perímetro correctos
- Autonomía en el trabajo (siguiendo la guía sin ayuda continua)

Tiempo total: 70 minutos

VENTAJA MULTIGRADO:
Mientras 3° trabaja en el patio, 4° trabaja autónomamente en el aula. Los materiales fabricados (compás casero, hoja cuadriculada) quedan para uso permanente."
}
```

---

## RESULTADOS DEL SISTEMA

### ✅ Resultados para la docente María Elena:

1. **Plan 100% implementable:** Todas las actividades tienen alternativas viables
2. **Costo cero:** Solo usa material reciclado y del entorno
3. **Instrucciones claras:** Sabe exactamente cómo fabricar cada herramienta
4. **Alineación curricular:** Sigue las guías RAS 2026 oficiales
5. **Gestión multigrado:** Actividades diferenciadas por grado con recursos compartidos

### ✅ Resultados para los estudiantes:

1. **Aprendizaje STEAM:** Fabrican sus propias herramientas (diseño, medición, construcción)
2. **Autonomía:** Tienen sus propios materiales (regla, compás, cuadrícula)
3. **Economía familiar:** No necesitan comprar materiales comerciales
4. **Conexión con el entorno:** Usan recursos locales
5. **Creatividad:** Aprenden que se puede aprender sin materiales comerciales

### ✅ Métricas del plan generado:

| Métrica                      | Valor |
|------------------------------|-------|
| Recursos requeridos totales  | 15    |
| Recursos faltantes           | 11    |
| Recursos con alternativas    | 11    |
| Cobertura de alternativas    | 100%  |
| Costo de materiales          | $0    |
| Actividades implementables   | 100%  |

---

## CONCLUSIÓN

El Sistema de Sustitución de Recursos permite que la **Escuela Rural San Martín** implemente completamente el plan de Geometría para grados 3°, 4° y 5° **SIN COMPRAR UN SOLO MATERIAL COMERCIAL**.

Todo se fabrica con:
- ✅ Cartón de cajas recicladas
- ✅ Cuerda o pita
- ✅ Tapas de botellas
- ✅ Material del entorno (palitos, barro)
- ✅ Ingredientes de cocina (harina, sal, agua) para plastilina casera

**El sistema no solo sugiere alternativas, sino que:**
1. Integra las alternativas directamente en las actividades
2. Proporciona instrucciones paso a paso de fabricación
3. Estima tiempos realistas
4. Mantiene coherencia con guías ENA oficiales
5. Respeta la pedagogía de Escuela Nueva Activa

---

**Desarrollado por:** Agente ENA
**Contexto:** Fundación Escuela Nueva (FEN)
**Última actualización:** 2025-11-22
