# Documentación: Campo de Temas Generales en 04GuiasENAAreas.html

**Fecha:** 2025-11-22
**Archivo modificado:** `public/04GuiasENAAreas.html`

---

## 1. DESCRIPCIÓN DE LA FUNCIONALIDAD

Se agregó un nuevo campo de selección **"Temas Generales"** que se actualiza dinámicamente según el área/asignatura seleccionada por el usuario. Este campo presenta los temas transversales más comunes de cada asignatura según el análisis de las Redes de Aprendizaje Semestral (RAS) 2026 de la Fundación Escuela Nueva.

---

## 2. CAMBIOS IMPLEMENTADOS

### 2.1. Campo HTML agregado

```html
<label for="temas_generales">Temas Generales (según área seleccionada)</label>
<select id="temas_generales" required="" disabled="">
    <option value="">Primero selecciona un área</option>
</select>
```

**Características:**
- Campo `required` para validación obligatoria
- Inicia `disabled` hasta que se seleccione un área
- Se ubica entre "Edición de las Guías ENA" y el contenedor de guías

---

### 2.2. Lógica JavaScript implementada

#### Estructura de datos: `temasGeneralesPorAsignatura`

Objeto que contiene los temas transversales por cada asignatura:

```javascript
const temasGeneralesPorAsignatura = {
  'matematicas': [...],
  'lenguaje': [...],
  'sociales': [...],
  'Tecnología': [...],
  'Naturales': [...],
  'ética': [...]
};
```

#### Evento de cambio de área

```javascript
document.getElementById("materia").addEventListener("change", function() {
  const areaSeleccionada = this.value;
  const selectTemas = document.getElementById("temas_generales");

  // Limpiar y actualizar opciones según área seleccionada
  // Habilitar/deshabilitar el select
});
```

---

## 3. TEMAS GENERALES POR ASIGNATURA

### 3.1. Matemáticas (8 temas)

1. Resolución de problemas
2. Valor posicional y sistema decimal
3. Operaciones básicas (suma, resta, multiplicación, división)
4. Números racionales (fracciones y decimales)
5. Geometría (figuras planas y cuerpos geométricos)
6. Medición (longitud, masa, capacidad, tiempo)
7. Estadística y datos
8. Pensamiento algebraico (patrones y secuencias)

---

### 3.2. Lenguaje (8 temas)

1. Alfabetización inicial
2. Comprensión lectora
3. Producción textual (narrativa, descriptiva, expositiva)
4. Literatura (cuento, fábula, mito, poesía, teatro)
5. Comunicación oral
6. Medios de comunicación
7. Gramática y ortografía
8. Lenguaje corporal y simbólico

---

### 3.3. Ciencias Sociales (8 temas)

1. Familia y comunidad
2. Organización política y territorial (municipio, departamento, país)
3. Geografía y medio ambiente
4. Historia de Colombia (pueblos indígenas, Conquista, Colonia, Independencia)
5. Derechos y deberes ciudadanos
6. Símbolos patrios y cultura
7. Economía (necesidades, trabajo, servicios)
8. Medios de transporte y comunicación

---

### 3.4. Tecnología (8 temas)

1. Materiales y transformación (naturales, artificiales, sintéticos)
2. Diseño y construcción de artefactos
3. Energía y fenómenos físicos (luz, calor, sonido, movimiento)
4. Sostenibilidad y medio ambiente
5. Pensamiento computacional y tecnología digital
6. Historia de la tecnología (inventos y evolución)
7. Sistemas tecnológicos (vivienda, transporte, comunicación)
8. Solución de problemas con tecnología

---

### 3.5. Ciencias Naturales (8 temas)

1. Seres vivos (clasificación, características, ciclos de vida)
2. Ecosistemas y medio ambiente
3. Cuerpo humano (sistemas corporales, salud)
4. Materia y energía
5. Fuerzas y movimiento
6. Sistema solar y Tierra
7. Método científico y experimentación
8. Recursos naturales y conservación

---

### 3.6. Ética (8 temas)

1. Autoconocimiento (autoimagen, emociones, sentidos)
2. Convivencia y valores morales
3. Familia como núcleo social
4. Resolución de conflictos
5. Derechos humanos y dignidad
6. Bienestar y salud
7. Diversión sana y tiempo libre
8. Comunidad y participación ciudadana

---

## 4. FLUJO DE USUARIO

### Paso a paso:

1. **Usuario selecciona un área** en el campo "Área a trabajar"
   - Ejemplo: Matemáticas

2. **El campo "Temas Generales" se habilita automáticamente**
   - Se cargan los 8 temas transversales de Matemáticas

3. **Usuario selecciona un tema general**
   - Ejemplo: "Geometría (figuras planas y cuerpos geométricos)"

4. **Usuario selecciona la edición de las guías**
   - Ejemplo: Edición 2026

5. **Usuario hace clic en "Continuar"**
   - Se validan todos los campos requeridos
   - Se guardan los datos en `stepData`:
     ```javascript
     {
       area: "matematicas",
       edicion_guia: "2026",
       tema_general: "geometría_(figuras_planas_y_cuerpos_geométricos)"
     }
     ```

---

## 5. VALIDACIONES IMPLEMENTADAS

### 5.1. Campo requerido

El campo `temas_generales` tiene el atributo `required`, por lo que:
- No se puede avanzar sin seleccionar un tema
- Se muestra error visual si está vacío al hacer clic en "Continuar"

### 5.2. Habilitación condicional

- **Deshabilitado por defecto** hasta que se seleccione un área
- **Se habilita automáticamente** cuando se selecciona un área válida
- **Se deshabilita nuevamente** si se deselecciona el área

### 5.3. Opciones dinámicas

- Las opciones se actualizan según el área seleccionada
- Se limpian las opciones previas antes de cargar nuevas
- Los valores se normalizan (minúsculas, espacios reemplazados por guiones bajos)

---

## 6. INTEGRACIÓN CON EL SISTEMA

### 6.1. Datos guardados

Los datos se guardan en `window.saveStepData(4, stepData)` con la estructura:

```javascript
{
  area: string,           // Ej: "matematicas"
  edicion_guia: string,   // Ej: "2026"
  tema_general: string    // Ej: "resolución_de_problemas"
}
```

### 6.2. Uso posterior

Estos datos pueden ser utilizados por el **Agente ENA** para:
- Filtrar guías específicas del tema seleccionado
- Generar planes docentes focalizados en ese tema transversal
- Sugerir articulaciones curriculares relacionadas
- Proporcionar recursos específicos del tema

---

## 7. FUNDAMENTO PEDAGÓGICO

Los temas generales fueron extraídos del análisis de las **Redes de Aprendizaje Semestral (RAS) 2026** de la Fundación Escuela Nueva (FEN), específicamente del documento:

**`src/data/RESUMEN_COMPARATIVO_ASIGNATURAS.md`**

Este análisis identificó los **temas transversales recurrentes** en todas las guías de cada asignatura, permitiendo:

1. **Coherencia curricular:** Los temas están presentes en múltiples grados
2. **Progresión vertical:** Los temas se desarrollan con complejidad creciente
3. **Articulación horizontal:** Facilitan conexiones entre asignaturas
4. **Contextualización:** Adaptan contenidos según necesidades específicas

---

## 8. EJEMPLO DE USO COMPLETO

### Escenario: Docente planea clase de Geometría

1. **Área:** Matemáticas
2. **Edición:** 2026
3. **Tema general:** "Geometría (figuras planas y cuerpos geométricos)"

**Resultado esperado:**
El Agente ENA puede buscar en la base de datos de guías RAS 2026 todas las actividades relacionadas con geometría para el grado seleccionado (en pasos anteriores), facilitando:
- Actividades específicas sobre polígonos, áreas, perímetros
- Recursos concretos (geoplano, tangram, figuras de cartón)
- Conexiones con Tecnología (construcción de artefactos)
- Articulaciones STEAM (Arte + Matemáticas en mosaicos)

---

## 9. POSIBLES MEJORAS FUTURAS

### 9.1. Subtemas específicos

Agregar un tercer nivel de selección con subtemas:
- Ejemplo: Geometría → Figuras planas → Triángulos

### 9.2. Búsqueda por competencias

Filtrar por componentes de competencia específicos:
- NET&I (Naturaleza y evolución de la T&I)
- UAT&I (Uso y apropiación de la T&I)
- SPT&I (Solución de problemas con T&I)
- TIS (Tecnología, informática y sociedad)

### 9.3. Integración con IA

Usar el tema seleccionado como contexto para:
- Generar actividades personalizadas
- Sugerir adaptaciones para NEE
- Proponer proyectos integrados entre asignaturas

---

## 10. PRUEBAS RECOMENDADAS

### 10.1. Prueba funcional

1. Cargar la página `04GuiasENAAreas.html`
2. Verificar que el campo "Temas Generales" está deshabilitado
3. Seleccionar un área (Ej: Matemáticas)
4. Verificar que el campo se habilita y muestra 8 opciones
5. Cambiar de área (Ej: Lenguaje)
6. Verificar que las opciones cambian correctamente
7. Intentar continuar sin seleccionar un tema → Debe mostrar error
8. Seleccionar un tema y continuar → Debe navegar a siguiente página

### 10.2. Prueba de validación

1. Dejar el campo vacío
2. Hacer clic en "Continuar"
3. Verificar mensaje de error
4. Verificar que el campo se marca visualmente como error

### 10.3. Prueba de integración

1. Completar el formulario completo
2. Verificar que los datos se guardan correctamente en `localStorage`
3. Navegar a la siguiente página
4. Verificar que los datos persisten

---

## 11. ARCHIVOS RELACIONADOS

- **HTML principal:** `public/04GuiasENAAreas.html`
- **Estilos CSS:** `public/style.css`
- **JavaScript global:** `public/main.js`
- **Análisis de temas:** `src/data/RESUMEN_COMPARATIVO_ASIGNATURAS.md`
- **JSONs de asignaturas:** `src/data/guias_ras_2026/*.json`

---

## 12. CONCLUSIÓN

La implementación del campo de **Temas Generales** enriquece significativamente la capacidad del Agente ENA para:

✅ Focalizar la generación de planes docentes en temas específicos
✅ Proporcionar mayor precisión en las sugerencias pedagógicas
✅ Facilitar la articulación curricular
✅ Mejorar la experiencia del usuario al ofrecer opciones contextualizadas

Este desarrollo se basa en un análisis riguroso de ~590 guías de aprendizaje, garantizando coherencia con el modelo pedagógico de Escuela Nueva Activa.

---

**Desarrollado por:** Claude Code (Agente ENA)
**Versión:** 1.0
**Última actualización:** 2025-11-22
