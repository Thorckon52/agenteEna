// ========== UTILIDADES DE PERSISTENCIA ==========
// Guardar datos en localStorage
function saveStepData(step, data) {
  try {
    localStorage.setItem(`ena_step_${step}`, JSON.stringify(data));
    console.log(`Datos guardados para el paso ${step}:`, data);
  } catch (error) {
    console.error(`Error guardando datos del paso ${step}:`, error);
  }
}

// Obtener datos de un paso
function getStepData(step) {
  try {
    const data = localStorage.getItem(`ena_step_${step}`);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error(`Error leyendo datos del paso ${step}:`, error);
    return null;
  }
}

// Obtener todos los datos recopilados
function getAllData() {
  return {
    step1: getStepData(1),
    step2: getStepData(2),
    step3: getStepData(3),
    step4: getStepData(4),
    step5: getStepData(5),
    step6: getStepData(6),
    step7: getStepData(7)
  };
}

// Limpiar todos los datos guardados
function clearAllData() {
  for (let i = 1; i <= 7; i++) {
    localStorage.removeItem(`ena_step_${i}`);
  }
  console.log('Todos los datos han sido limpiados');
}

// Hacer las funciones globales
window.saveStepData = saveStepData;
window.getStepData = getStepData;
window.getAllData = getAllData;
window.clearAllData = clearAllData;

// ========== ESTADO GLOBAL PARA FORMULARIO ==========
const dificultadesConfig = {
  lectura: [
    "Lee muy lentamente o silabea en exceso",
    "Confunde letras (ej. j con g, b con d, c con k)",
    "Omite, repite o inventa palabras",
    "Pierde la secuencia y vuelve al inicio",
    "Necesita apoyo visual para seguir la lectura",
    "Presenta baja comprension de lo leido",
    "Evita leer en voz alta"
  ],
  escritura: [
    "Letra poco legible o tamano irregular",
    "Desorganizacion en el uso del espacio",
    "Errores frecuentes en letras o palabras",
    "Uso incorrecto de mayusculas y signos",
    "Dificultad para ordenar ideas",
    "Escritura muy lenta o muy rapida con errores",
    "Evita escribir o muestra frustracion"
  ],
  comprension: [
    "Lectura mecanica sin entendimiento",
    "Dificultad para identificar la idea principal",
    "Problemas de vocabulario",
    "Falta de secuenciacion",
    "Baja capacidad de inferencia",
    "Dificultad para relacionar con experiencias previas",
    "Problemas de atencion y concentracion"
  ]
};

const state = {
  grados: [],
  estudiantes: {},
  dificultades: {
    lectura: { hay: false, por_grado: {} },
    escritura: { hay: false, por_grado: {} },
    comprension: { hay: false, por_grado: {} }
  }
};

// Hacer state global
window.state = state;
window.dificultadesConfig = dificultadesConfig;

document.addEventListener('DOMContentLoaded', function() {
    const comitesRadio = document.querySelectorAll('input[name="comites"]');
    const comitesLista = document.getElementById('comitesLista');
    const gradosEl = document.getElementById("grados");
      const conteoContainer = document.getElementById("conteoContainer");
      const lecturaDetalle = document.getElementById("lecturaDetalle");
      const escrituraDetalle = document.getElementById("escrituraDetalle");
      const comprensionDetalle = document.getElementById("comprensionDetalle");
      //Activar comites en contextualizacion cuando es si
    comitesRadio.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'si') {
                comitesLista.classList.remove('hidden');
            } else {
                comitesLista.classList.add('hidden');
            }
        });
    });

  // Manejo de grados y dificultades

      function uniq(list) {
        const seen = new Set();
        const result = [];
        list.forEach((item) => {
          const key = item.trim();
          if (!key) return;
          const norm = key.replace(/\s+/g, " ");
          if (!seen.has(norm)) {
            seen.add(norm);
            result.push(norm);
          }
        });
        return result;
      }

      function syncGradosFromInput() {
        const raw = (gradosEl.value || "").split(",");
        const clean = uniq(raw);
        state.grados = clean;
        const keep = new Set(clean);
        Object.keys(state.estudiantes).forEach((grado) => {
          if (!keep.has(grado)) delete state.estudiantes[grado];
        });
        ["lectura", "escritura", "comprension"].forEach((tipo) => {
          const por = state.dificultades[tipo].por_grado;
          Object.keys(por).forEach((grado) => {
            if (!keep.has(grado)) delete por[grado];
          });
        });
        renderConteo();
        renderDificultad("lectura", lecturaDetalle);
        renderDificultad("escritura", escrituraDetalle);
        renderDificultad("comprension", comprensionDetalle);
      }

      function renderConteo() {
        conteoContainer.innerHTML = "";
        if (!state.grados.length) return;
        state.grados.forEach((grado) => {
          const card = document.createElement("div");
          card.className = "card";
          const title = document.createElement("h4");
          title.textContent = "Grado " + grado;
          const label = document.createElement("label");
          label.textContent = "Numero de estudiantes";
          const input = document.createElement("input");
          input.type = "number";
          input.min = "1";
          input.placeholder = "Cantidad";
          input.value = state.estudiantes[grado] ?? "";
          input.dataset.grado = grado;
          input.addEventListener("input", () => {
            const value = parseInt(input.value, 10);
            if (Number.isFinite(value) && value > 0) {
              state.estudiantes[grado] = value;
            } else {
              delete state.estudiantes[grado];
            }
          });
          card.appendChild(title);
          card.appendChild(label);
          card.appendChild(input);
          conteoContainer.appendChild(card);
        });
      }

      function buildDifRow(tipo, grado) {
        const row = document.createElement("div");
        row.className = "dif-row";
        const title = document.createElement("h5");
        title.textContent = "Grado " + grado;
        const label = document.createElement("label");
        label.textContent = "Estudiantes con dificultad";
        const input = document.createElement("input");
        input.type = "number";
        input.min = "0";
        input.placeholder = "Cantidad";
        const current = state.dificultades[tipo].por_grado[grado];
        input.value = current ? current.cantidad : "";
        input.addEventListener("input", () => {
          const value = parseInt(input.value, 10);
          const entry = state.dificultades[tipo].por_grado[grado] || { cantidad: 0, dificultades: [] };
          if (Number.isFinite(value) && value >= 0) {
            entry.cantidad = value;
            state.dificultades[tipo].por_grado[grado] = entry;
          } else {
            entry.cantidad = 0;
            state.dificultades[tipo].por_grado[grado] = entry;
          }
        });

        const optionsWrap = document.createElement("div");
        optionsWrap.className = "dif-options";
        (dificultadesConfig[tipo] || []).forEach((texto) => {
          const optionLabel = document.createElement("label");
          optionLabel.style.display = "flex";
          optionLabel.style.alignItems = "center";
          optionLabel.style.gap = "6px";
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.value = texto;
          const entry = state.dificultades[tipo].por_grado[grado];
          if (entry && Array.isArray(entry.dificultades) && entry.dificultades.includes(texto)) {
            checkbox.checked = true;
          }
          checkbox.addEventListener("change", () => {
            const currentEntry = state.dificultades[tipo].por_grado[grado] || { cantidad: 0, dificultades: [] };
            if (!Array.isArray(currentEntry.dificultades)) {
              currentEntry.dificultades = [];
            }
            if (checkbox.checked) {
              if (!currentEntry.dificultades.includes(texto)) {
                currentEntry.dificultades.push(texto);
              }
            } else {
              currentEntry.dificultades = currentEntry.dificultades.filter((item) => item !== texto);
            }
            state.dificultades[tipo].por_grado[grado] = currentEntry;
          });
          optionLabel.appendChild(checkbox);
          optionLabel.appendChild(document.createTextNode(texto));
          optionsWrap.appendChild(optionLabel);
        });

        row.appendChild(title);
        row.appendChild(label);
        row.appendChild(input);
        row.appendChild(optionsWrap);
        return row;
      }

      function renderDificultad(tipo, container) {
        container.innerHTML = "";
        if (!state.dificultades[tipo].hay) {
          container.classList.add("hidden");
          return;
        }
        container.classList.remove("hidden");
        state.grados.forEach((grado) => {
          if (!state.dificultades[tipo].por_grado[grado]) {
            state.dificultades[tipo].por_grado[grado] = { cantidad: 0, dificultades: [] };
          }
          container.appendChild(buildDifRow(tipo, grado));
        });
      }

    
      gradosEl.addEventListener("input", syncGradosFromInput);

      [
        { tipo: "lectura", radios: document.querySelectorAll('input[name="lectura_hay"]'), contenedor: lecturaDetalle },
        { tipo: "escritura", radios: document.querySelectorAll('input[name="escritura_hay"]'), contenedor: escrituraDetalle },
        { tipo: "comprension", radios: document.querySelectorAll('input[name="comprension_hay"]'), contenedor: comprensionDetalle },
      ].forEach(({ tipo, radios, contenedor }) => {
        radios.forEach((radio) => {
          radio.addEventListener("change", () => {
            state.dificultades[tipo].hay = radio.value === "si";
            if (!state.dificultades[tipo].hay) {
              state.dificultades[tipo].por_grado = {};
            }
            renderDificultad(tipo, contenedor);
          });
        });
      });

       if (!grados.length) {
          resultadoEl.textContent = "? Error: agrega al menos un grado.";
          return;
        }
        const conteo = {};
        let valido = true;
        grados.forEach((grado) => {
          const total = state.estudiantes[grado];
          if (!Number.isFinite(total) || total < 1) {
            valido = false;
          } else {
            conteo[grado] = total;
          }
        });
        if (!valido || Object.keys(conteo).length !== grados.length) {
          resultadoEl.textContent = "? Error: ingresa la cantidad de estudiantes (>=1) para cada grado.";
          return;
        }

});

// Departamento y Municipio dinámicos
document.addEventListener('DOMContentLoaded', () => {
    const DATA_URL = 'https://raw.githubusercontent.com/JairPrada/api-places-colombia/main/data/departamentos.js';
    const departamentoSelect = document.getElementById('departamento');
    const municipioSelect = document.getElementById('municipio');
    let departamentosData = [];

    function parseArrayFromJs(text) {
        const start = text.indexOf('[');
        const end = text.lastIndexOf(']');
        if (start === -1 || end === -1) throw new Error('Unable to parse data');
        return JSON.parse(text.slice(start, end + 1));
    }

    fetch(DATA_URL)
        .then(res => res.text())
        .then(text => {
            departamentosData = parseArrayFromJs(text);
            departamentosData.forEach(d => {
                const opt = document.createElement('option');
                opt.value = d.departamento;
                opt.textContent = d.departamento;
                departamentoSelect.appendChild(opt);
            });
        })
        .catch(err => console.error('Error loading departamentos:', err));

    departamentoSelect.addEventListener('change', () => {
        const selected = departamentoSelect.value;
        municipioSelect.innerHTML = '<option value="">Selecciona un municipio</option>';
        municipioSelect.disabled = !selected;
        if (!selected) return;

        const found = departamentosData.find(d => d.departamento === selected);
        if (!found || !Array.isArray(found.ciudades)) return;

        found.ciudades.forEach(ciudad => {
            const opt = document.createElement('option');
            opt.value = ciudad;
            opt.textContent = ciudad;
            municipioSelect.appendChild(opt);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const guiasContainer = document.getElementById('guiasContainer');
    if (guiasContainer) {
        const grados = JSON.parse(localStorage.getItem('gradosIngresados')) || [];
        if (grados.length) {
            renderGuias(grados);
        }
    }
});

function renderGuias(grados) {
    const container = document.getElementById('guiasContainer');
    container.innerHTML = '';
    grados.forEach(grado => {
        const card = document.createElement('div');
        card.className = 'guia-card';
        card.innerHTML = `
            <h4>Grado ${grado}</h4>
            <label>Nombre de la Guía</label>
            <input type="text" name="guia_${grado}" placeholder="Cantidad">
            <label>Desempeño</label>
            <input type="text" name="desempeno_${grado}" placeholder="Cantidad">
        `;
        container.appendChild(card);
    });
}