/**
 * MAPEO DE TEMAS GENERALES A GUÍAS ESPECÍFICAS RAS 2026
 *
 * Este módulo contiene el mapeo entre los temas generales (transversales)
 * y las guías específicas de cada asignatura por grado.
 *
 * Basado en análisis de ~590 guías RAS 2026 FEN
 * Fecha: 2025-11-22
 */

const MAPEO_TEMAS_GUIAS = {
  // ============================================
  // MATEMÁTICAS
  // ============================================
  matematicas: {
    'resolución_de_problemas': {
      descripcion: 'Resolución de problemas',
      grados: {
        1: {
          unidades: [1, 2],
          guias_especificas: [
            { unidad: 1, guia: 4, nombre: 'Sumas hasta 20' },
            { unidad: 1, guia: 5, nombre: 'Restas hasta 20' },
            { unidad: 1, guia: 6, nombre: 'Sumas y restas hasta 100' }
          ]
        },
        2: {
          unidades: [2],
          guias_especificas: [
            { unidad: 2, guia: 4, nombre: 'Sumas con reagrupación' },
            { unidad: 2, guia: 5, nombre: 'Restas con desagrupación' },
            { unidad: 2, guia: 6, nombre: 'Introducción a la multiplicación' }
          ]
        },
        3: {
          unidades: [2],
          guias_especificas: [
            { unidad: 2, guia: 5, nombre: 'Multiplicación por una cifra' },
            { unidad: 2, guia: 6, nombre: 'División exacta' }
          ]
        },
        4: {
          unidades: [1, 2],
          guias_especificas: [
            { unidad: 1, guia: 2, nombre: 'Operaciones combinadas' },
            { unidad: 2, guia: 4, nombre: 'Operaciones con fracciones' }
          ]
        },
        5: {
          unidades: [2],
          guias_especificas: [
            { unidad: 2, guia: 4, nombre: 'Fracciones avanzadas' },
            { unidad: 2, guia: 6, nombre: 'Razones y proporciones' }
          ]
        }
      }
    },
    'valor_posicional_y_sistema_decimal': {
      descripcion: 'Valor posicional y sistema decimal',
      grados: {
        1: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 1, nombre: 'Contar colecciones de objetos hasta 20' },
            { unidad: 1, guia: 2, nombre: 'Números hasta 50' },
            { unidad: 1, guia: 3, nombre: 'Números hasta 100' }
          ]
        },
        2: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 1, nombre: 'Números hasta 100 (repaso y ampliación)' },
            { unidad: 1, guia: 2, nombre: 'Números de tres cifras' },
            { unidad: 1, guia: 3, nombre: 'Comparación y orden hasta 999' }
          ]
        },
        3: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 1, nombre: 'Números hasta 9.999' },
            { unidad: 1, guia: 2, nombre: 'Números hasta 99.999' }
          ]
        },
        4: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 1, nombre: 'Números hasta millones' }
          ]
        },
        5: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 1, nombre: 'Números hasta billones' },
            { unidad: 1, guia: 2, nombre: 'Potenciación y radicación' }
          ]
        }
      }
    },
    'operaciones_básicas_(suma,_resta,_multiplicación,_división)': {
      descripcion: 'Operaciones básicas',
      grados: {
        1: {
          unidades: [2],
          guias_especificas: [
            { unidad: 2, guia: 4, nombre: 'Sumas hasta 20' },
            { unidad: 2, guia: 5, nombre: 'Restas hasta 20' }
          ]
        },
        2: {
          unidades: [2],
          guias_especificas: [
            { unidad: 2, guia: 4, nombre: 'Sumas con reagrupación' },
            { unidad: 2, guia: 5, nombre: 'Restas con desagrupación' },
            { unidad: 2, guia: 6, nombre: 'Introducción a la multiplicación' }
          ]
        },
        3: {
          unidades: [2],
          guias_especificas: [
            { unidad: 2, guia: 4, nombre: 'Tablas de multiplicar' },
            { unidad: 2, guia: 5, nombre: 'Multiplicación por una cifra' },
            { unidad: 2, guia: 6, nombre: 'División exacta' }
          ]
        },
        4: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 2, nombre: 'Operaciones combinadas' },
            { unidad: 1, guia: 3, nombre: 'Múltiplos y divisores' }
          ]
        },
        5: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 2, nombre: 'Potenciación y radicación' }
          ]
        }
      }
    },
    'números_racionales_(fracciones_y_decimales)': {
      descripcion: 'Números racionales (fracciones y decimales)',
      grados: {
        2: {
          unidades: [3],
          guias_especificas: [
            { unidad: 3, guia: 7, nombre: 'Mitades, tercios y cuartos' }
          ]
        },
        3: {
          unidades: [3],
          guias_especificas: [
            { unidad: 3, guia: 7, nombre: 'Fracciones como partes de un todo' },
            { unidad: 3, guia: 8, nombre: 'Fracciones equivalentes' },
            { unidad: 3, guia: 9, nombre: 'Introducción a decimales' }
          ]
        },
        4: {
          unidades: [2],
          guias_especificas: [
            { unidad: 2, guia: 4, nombre: 'Operaciones con fracciones' },
            { unidad: 2, guia: 5, nombre: 'Decimales y operaciones' },
            { unidad: 2, guia: 6, nombre: 'Porcentajes' }
          ]
        },
        5: {
          unidades: [2],
          guias_especificas: [
            { unidad: 2, guia: 4, nombre: 'Fracciones avanzadas' },
            { unidad: 2, guia: 5, nombre: 'Decimales avanzados' }
          ]
        }
      }
    },
    'geometría_(figuras_planas_y_cuerpos_geométricos)': {
      descripcion: 'Geometría (figuras planas y cuerpos geométricos)',
      grados: {
        1: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 10, nombre: 'Figuras geométricas planas' },
            { unidad: 4, guia: 11, nombre: 'Cuerpos geométricos' }
          ]
        },
        2: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 10, nombre: 'Figuras y patrones' }
          ]
        },
        3: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 10, nombre: 'Perímetro y área' },
            { unidad: 4, guia: 11, nombre: 'Ángulos y triángulos' }
          ]
        },
        4: {
          unidades: [3, 4],
          guias_especificas: [
            { unidad: 3, guia: 8, nombre: 'Área de polígonos' },
            { unidad: 3, guia: 9, nombre: 'Volumen de cuerpos' },
            { unidad: 4, guia: 10, nombre: 'Transformaciones geométricas' }
          ]
        },
        5: {
          unidades: [3],
          guias_especificas: [
            { unidad: 3, guia: 7, nombre: 'Círculo y circunferencia' },
            { unidad: 3, guia: 8, nombre: 'Área de polígonos irregulares' },
            { unidad: 3, guia: 9, nombre: 'Volumen de cilindros y pirámides' }
          ]
        }
      }
    },
    'medición_(longitud,_masa,_capacidad,_tiempo)': {
      descripcion: 'Medición (longitud, masa, capacidad, tiempo)',
      grados: {
        1: {
          unidades: [3],
          guias_especificas: [
            { unidad: 3, guia: 7, nombre: 'Longitud' },
            { unidad: 3, guia: 8, nombre: 'Peso y capacidad' },
            { unidad: 3, guia: 9, nombre: 'Tiempo' }
          ]
        },
        2: {
          unidades: [3],
          guias_especificas: [
            { unidad: 3, guia: 8, nombre: 'Medidas de longitud' },
            { unidad: 3, guia: 9, nombre: 'Peso, capacidad y tiempo' }
          ]
        },
        3: {
          unidades: [3],
          guias_especificas: [
            { unidad: 4, guia: 10, nombre: 'Perímetro y área' }
          ]
        },
        4: {
          unidades: [3],
          guias_especificas: [
            { unidad: 3, guia: 7, nombre: 'Conversiones de unidades' },
            { unidad: 3, guia: 9, nombre: 'Volumen de cuerpos' }
          ]
        },
        5: {
          unidades: [3],
          guias_especificas: [
            { unidad: 3, guia: 7, nombre: 'Círculo y circunferencia' }
          ]
        }
      }
    },
    'estadística_y_datos': {
      descripcion: 'Estadística y datos',
      grados: {
        2: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 12, nombre: 'Recolección y representación de datos' }
          ]
        },
        3: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 12, nombre: 'Estadística básica' }
          ]
        },
        4: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 12, nombre: 'Estadística: media, mediana, moda' }
          ]
        },
        5: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 10, nombre: 'Gráficas estadísticas' },
            { unidad: 4, guia: 11, nombre: 'Análisis estadístico' },
            { unidad: 4, guia: 12, nombre: 'Introducción a la probabilidad' }
          ]
        }
      }
    },
    'pensamiento_algebraico_(patrones_y_secuencias)': {
      descripcion: 'Pensamiento algebraico (patrones y secuencias)',
      grados: {
        1: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 3, nombre: 'Números hasta 100' }
          ]
        },
        2: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 10, nombre: 'Figuras y patrones' }
          ]
        },
        3: {
          unidades: [1, 2],
          guias_especificas: [
            { unidad: 1, guia: 3, nombre: 'Aproximación y estimación' },
            { unidad: 2, guia: 4, nombre: 'Tablas de multiplicar' }
          ]
        },
        4: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 11, nombre: 'Coordenadas cartesianas' }
          ]
        },
        5: {
          unidades: [2],
          guias_especificas: [
            { unidad: 2, guia: 6, nombre: 'Razones y proporciones' }
          ]
        }
      }
    }
  },

  // ============================================
  // LENGUAJE
  // ============================================
  lenguaje: {
    'alfabetización_inicial': {
      descripcion: 'Alfabetización inicial',
      grados: {
        1: {
          unidades: [1, 2],
          guias_especificas: [
            { unidad: 1, guia: 1, nombre: 'Vocales' },
            { unidad: 1, guia: 2, nombre: 'Consonantes M, P, S, L' },
            { unidad: 2, guia: 13, nombre: 'Consonantes N, T, D' }
          ]
        }
      }
    },
    'comprensión_lectora': {
      descripcion: 'Comprensión lectora',
      grados: {
        1: {
          unidades: [3],
          guias_especificas: [
            { unidad: 3, guia: 25, nombre: 'Lectura de textos sencillos' }
          ]
        },
        2: {
          unidades: [1, 2],
          guias_especificas: [
            { unidad: 1, guia: 3, nombre: 'Lectura de cuentos' },
            { unidad: 2, guia: 8, nombre: 'Comprensión de textos' }
          ]
        },
        3: {
          unidades: [1, 2],
          guias_especificas: [
            { unidad: 1, guia: 2, nombre: 'Lectura de narraciones' },
            { unidad: 2, guia: 11, nombre: 'Análisis de textos' }
          ]
        },
        4: {
          unidades: [1, 2, 3],
          guias_especificas: [
            { unidad: 1, guia: 1, nombre: 'El cuento' },
            { unidad: 2, guia: 10, nombre: 'La fábula' },
            { unidad: 3, guia: 15, nombre: 'El mito' }
          ]
        },
        5: {
          unidades: [1, 2],
          guias_especificas: [
            { unidad: 1, guia: 5, nombre: 'Textos descriptivos' },
            { unidad: 2, guia: 10, nombre: 'Textos narrativos' }
          ]
        }
      }
    },
    'producción_textual_(narrativa,_descriptiva,_expositiva)': {
      descripcion: 'Producción textual',
      grados: {
        2: {
          unidades: [3],
          guias_especificas: [
            { unidad: 3, guia: 12, nombre: 'Escribo textos sencillos' }
          ]
        },
        3: {
          unidades: [2, 3],
          guias_especificas: [
            { unidad: 2, guia: 8, nombre: 'Producción de textos' },
            { unidad: 3, guia: 15, nombre: 'Escribir historias' }
          ]
        },
        4: {
          unidades: [1, 2],
          guias_especificas: [
            { unidad: 1, guia: 4, nombre: 'Escribir cuentos' },
            { unidad: 2, guia: 11, nombre: 'Crear fábulas' }
          ]
        },
        5: {
          unidades: [1, 2, 3],
          guias_especificas: [
            { unidad: 1, guia: 1, nombre: 'La descripción' },
            { unidad: 2, guia: 7, nombre: 'La narración' },
            { unidad: 3, guia: 15, nombre: 'Textos informativos' }
          ]
        }
      }
    },
    'literatura_(cuento,_fábula,_mito,_poesía,_teatro)': {
      descripcion: 'Literatura',
      grados: {
        2: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 3, nombre: 'Cuentos infantiles' }
          ]
        },
        3: {
          unidades: [2, 3],
          guias_especificas: [
            { unidad: 2, guia: 6, nombre: 'Poemas' },
            { unidad: 3, guia: 17, nombre: 'Teatro' }
          ]
        },
        4: {
          unidades: [1, 2, 3, 4],
          guias_especificas: [
            { unidad: 1, guia: 1, nombre: 'El cuento' },
            { unidad: 2, guia: 10, nombre: 'La fábula' },
            { unidad: 3, guia: 15, nombre: 'El mito' },
            { unidad: 4, guia: 20, nombre: 'La poesía' }
          ]
        },
        5: {
          unidades: [3],
          guias_especificas: [
            { unidad: 3, guia: 18, nombre: 'Literatura colombiana' }
          ]
        }
      }
    },
    'comunicación_oral': {
      descripcion: 'Comunicación oral',
      grados: {
        1: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 5, nombre: 'Expresión oral' }
          ]
        },
        2: {
          unidades: [2],
          guias_especificas: [
            { unidad: 2, guia: 10, nombre: 'Conversaciones' }
          ]
        },
        3: {
          unidades: [1, 3],
          guias_especificas: [
            { unidad: 1, guia: 4, nombre: 'La exposición oral' },
            { unidad: 3, guia: 17, nombre: 'Teatro y dramatización' }
          ]
        },
        4: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 24, nombre: 'Debate y argumentación' }
          ]
        },
        5: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 22, nombre: 'La oratoria' }
          ]
        }
      }
    },
    'medios_de_comunicación': {
      descripcion: 'Medios de comunicación',
      grados: {
        3: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 19, nombre: 'La prensa escrita' }
          ]
        },
        4: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 25, nombre: 'La televisión' }
          ]
        },
        5: {
          unidades: [3],
          guias_especificas: [
            { unidad: 3, guia: 14, nombre: 'Medios masivos de comunicación' }
          ]
        }
      }
    },
    'gramática_y_ortografía': {
      descripcion: 'Gramática y ortografía',
      grados: {
        2: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 18, nombre: 'Uso de mayúsculas' }
          ]
        },
        3: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 20, nombre: 'Signos de puntuación' }
          ]
        },
        4: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 22, nombre: 'La oración' }
          ]
        },
        5: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 20, nombre: 'Estructura de la oración' },
            { unidad: 4, guia: 24, nombre: 'Ortografía avanzada' }
          ]
        }
      }
    },
    'lenguaje_corporal_y_simbólico': {
      descripcion: 'Lenguaje corporal y simbólico',
      grados: {
        1: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 7, nombre: 'Expresión corporal' }
          ]
        },
        3: {
          unidades: [3],
          guias_especificas: [
            { unidad: 3, guia: 14, nombre: 'Símbolos y señales' }
          ]
        },
        4: {
          unidades: [3],
          guias_especificas: [
            { unidad: 3, guia: 19, nombre: 'Lenguaje no verbal' }
          ]
        }
      }
    }
  },

  // ============================================
  // CIENCIAS SOCIALES
  // ============================================
  sociales: {
    'familia_y_comunidad': {
      descripcion: 'Familia y comunidad',
      grados: {
        2: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 2, nombre: '¿Cómo es mi familia?' },
            { unidad: 1, guia: 5, nombre: '¿Por qué son importantes los grupos y las comunidades?' }
          ]
        },
        3: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 4, nombre: 'Organizados trabajamos mejor' }
          ]
        },
        4: {
          unidades: [1],
          guias_especificas: [
            { unidad: 4, guia: 16, nombre: '¿Cuáles son las necesidades de nuestras familias?' }
          ]
        }
      }
    },
    'organización_política_y_territorial_(municipio,_departamento,_país)': {
      descripcion: 'Organización política y territorial',
      grados: {
        2: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 17, nombre: '¿Cuáles son las autoridades de nuestra ciudad o de nuestro municipio?' }
          ]
        },
        3: {
          unidades: [2],
          guias_especificas: [
            { unidad: 2, guia: 7, nombre: 'Conozcamos las autoridades de nuestro departamento' },
            { unidad: 2, guia: 8, nombre: '¿Cuál es la división política y administrativa de nuestro municipio?' }
          ]
        },
        4: {
          unidades: [1],
          guias_especificas: [
            { unidad: 4, guia: 18, nombre: '¿Cómo está organizado nuestro país?' }
          ]
        },
        5: {
          unidades: [1, 2],
          guias_especificas: [
            { unidad: 1, guia: 3, nombre: 'Estudiemos la Constitución Política de Colombia' },
            { unidad: 2, guia: 6, nombre: 'Estudiemos la ubicación geográfica y las fronteras de Colombia' }
          ]
        }
      }
    },
    'geografía_y_medio_ambiente': {
      descripcion: 'Geografía y medio ambiente',
      grados: {
        2: {
          unidades: [2],
          guias_especificas: [
            { unidad: 2, guia: 7, nombre: '¿Dónde estamos?' },
            { unidad: 2, guia: 8, nombre: '¿Cuáles son los elementos del paisaje geográfico?' },
            { unidad: 2, guia: 9, nombre: '¡Hablemos del clima!' }
          ]
        },
        3: {
          unidades: [2, 3],
          guias_especificas: [
            { unidad: 2, guia: 6, nombre: 'Conozcamos nuestro municipio y departamento' },
            { unidad: 2, guia: 10, nombre: '¿Cómo es la región donde vivimos?' },
            { unidad: 3, guia: 12, nombre: 'Conozcamos los recursos naturales de nuestra región' }
          ]
        },
        4: {
          unidades: [2],
          guias_especificas: [
            { unidad: 2, guia: 7, nombre: 'Estudiemos las principales características del clima' },
            { unidad: 2, guia: 8, nombre: '¿Qué grupos étnicos habitan las regiones naturales de Colombia?' }
          ]
        },
        5: {
          unidades: [2],
          guias_especificas: [
            { unidad: 2, guia: 5, nombre: '¿Cómo es el territorio colombiano?' },
            { unidad: 2, guia: 7, nombre: '¿Cuáles son las regiones naturales de Colombia?' },
            { unidad: 2, guia: 8, nombre: '¿Por qué es tan importante el suelo?' }
          ]
        }
      }
    },
    'historia_de_colombia_(pueblos_indígenas,_conquista,_colonia,_independencia)': {
      descripcion: 'Historia de Colombia',
      grados: {
        2: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 21, nombre: 'Conozcamos algunos grupos indígenas de Colombia' },
            { unidad: 4, guia: 23, nombre: '¿Por qué luchamos por la libertad?' }
          ]
        },
        3: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 20, nombre: 'Acerquémonos a la historia de nuestro país' },
            { unidad: 4, guia: 21, nombre: '¿Qué fue la Revolución de Independencia?' }
          ]
        },
        4: {
          unidades: [3],
          guias_especificas: [
            { unidad: 3, guia: 10, nombre: '¿Cómo vivían nuestros antepasados americanos?' },
            { unidad: 3, guia: 12, nombre: 'Conozcamos algunas características del descubrimiento de América' },
            { unidad: 3, guia: 13, nombre: '¿Cómo sucedió la Conquista de América?' },
            { unidad: 3, guia: 14, nombre: '¿Cómo fue la época colonial?' }
          ]
        },
        5: {
          unidades: [3, 4],
          guias_especificas: [
            { unidad: 3, guia: 11, nombre: '¿Cómo fue la época de la Colonia en Colombia?' },
            { unidad: 3, guia: 12, nombre: '¡Colombia se independizó de España!' },
            { unidad: 4, guia: 17, nombre: '¿Qué ocurrió en Colombia durante el siglo XX?' }
          ]
        }
      }
    },
    'derechos_y_deberes_ciudadanos': {
      descripcion: 'Derechos y deberes ciudadanos',
      grados: {
        2: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 3, nombre: '¿Cuáles son los derechos y deberes de los niños y las niñas?' },
            { unidad: 1, guia: 4, nombre: '¡Aprendamos más sobre nuestros derechos!' }
          ]
        },
        3: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 1, nombre: 'Las normas facilitan nuestra convivencia' },
            { unidad: 1, guia: 3, nombre: 'Organicemos nuestro Gobierno Estudiantil' }
          ]
        },
        4: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 1, nombre: '¿Cuáles son nuestros derechos y deberes?' },
            { unidad: 1, guia: 2, nombre: '¿Qué es el Código de Infancia y Adolescencia?' },
            { unidad: 1, guia: 3, nombre: '¿Cuáles instituciones protegen nuestros derechos?' }
          ]
        },
        5: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 1, nombre: '¿Cuáles son nuestros derechos y deberes escolares?' },
            { unidad: 1, guia: 2, nombre: 'Los derechos humanos son de todas las personas' },
            { unidad: 1, guia: 3, nombre: 'Estudiemos la Constitución Política de Colombia' }
          ]
        }
      }
    },
    'símbolos_patrios_y_cultura': {
      descripcion: 'Símbolos patrios y cultura',
      grados: {
        2: {
          unidades: [3, 4],
          guias_especificas: [
            { unidad: 3, guia: 15, nombre: '¿Cuáles son las características culturales de nuestro entorno?' },
            { unidad: 4, guia: 20, nombre: '¿Cuáles son los símbolos de nuestra ciudad o municipio?' }
          ]
        },
        3: {
          unidades: [3],
          guias_especificas: [
            { unidad: 3, guia: 13, nombre: '¿Cuál es nuestro patrimonio cultural?' },
            { unidad: 3, guia: 14, nombre: '¿Cuál es nuestro patrimonio cultural?' },
            { unidad: 3, guia: 15, nombre: '¡Nuestros símbolos son importantes!' }
          ]
        },
        5: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 4, nombre: '¿Qué es la cultura?' }
          ]
        }
      }
    },
    'economía_(necesidades,_trabajo,_servicios)': {
      descripcion: 'Economía (necesidades, trabajo, servicios)',
      grados: {
        2: {
          unidades: [2, 3, 4],
          guias_especificas: [
            { unidad: 2, guia: 10, nombre: '¿Por qué son importantes los trabajos?' },
            { unidad: 3, guia: 11, nombre: '¿Cuáles son los trabajos del campo y de la ciudad?' },
            { unidad: 4, guia: 22, nombre: '¿Por qué son importantes los servicios públicos?' }
          ]
        },
        4: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 16, nombre: '¿Cuáles son las necesidades de nuestras familias?' },
            { unidad: 4, guia: 17, nombre: '¿Qué es la canasta familiar?' },
            { unidad: 4, guia: 19, nombre: '¿Por qué son importantes los servicios públicos?' }
          ]
        },
        5: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 20, nombre: '¡Conozcamos cómo progresa Colombia!' }
          ]
        }
      }
    },
    'medios_de_transporte_y_comunicación': {
      descripcion: 'Medios de transporte y comunicación',
      grados: {
        2: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 19, nombre: 'Estudiemos los medios de transporte de nuestro municipio o ciudad' }
          ]
        },
        3: {
          unidades: [3],
          guias_especificas: [
            { unidad: 3, guia: 16, nombre: '¿Qué medios utilizamos para comunicarnos y transportarnos?' }
          ]
        },
        5: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 19, nombre: '¿Por qué son importantes los medios de comunicación?' }
          ]
        }
      }
    }
  },

  // ============================================
  // TECNOLOGÍA
  // ============================================
  Tecnología: {
    'materiales_y_transformación_(naturales,_artificiales,_sintéticos)': {
      descripcion: 'Materiales y transformación',
      grados: {
        2: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 1, nombre: 'Objetos naturales y artificiales' },
            { unidad: 1, guia: 2, nombre: 'Transformación de materias primas' }
          ]
        },
        3: {
          unidades: [2],
          guias_especificas: [
            { unidad: 2, guia: 4, nombre: 'La madera como recurso' }
          ]
        },
        4: {
          unidades: [2],
          guias_especificas: [
            { unidad: 2, guia: 5, nombre: 'Fibras y telas' }
          ]
        },
        5: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 1, nombre: 'El caucho' },
            { unidad: 1, guia: 2, nombre: 'El plástico' }
          ]
        }
      }
    },
    'diseño_y_construcción_de_artefactos': {
      descripcion: 'Diseño y construcción de artefactos',
      grados: {
        2: {
          unidades: [1, 3],
          guias_especificas: [
            { unidad: 1, guia: 3, nombre: 'Construcción de artefactos sencillos' },
            { unidad: 3, guia: 7, nombre: 'Elaboración de papel reciclado' }
          ]
        },
        3: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 1, nombre: 'Juguetes con ruedas' },
            { unidad: 1, guia: 2, nombre: 'Mecanismos de movimiento' }
          ]
        },
        4: {
          unidades: [3],
          guias_especificas: [
            { unidad: 3, guia: 8, nombre: 'Microscopio casero' }
          ]
        },
        5: {
          unidades: [2],
          guias_especificas: [
            { unidad: 2, guia: 5, nombre: 'Prototipos de transporte' }
          ]
        }
      }
    },
    'energía_y_fenómenos_físicos_(luz,_calor,_sonido,_movimiento)': {
      descripcion: 'Energía y fenómenos físicos',
      grados: {
        3: {
          unidades: [3],
          guias_especificas: [
            { unidad: 3, guia: 7, nombre: 'Propiedades de la luz' },
            { unidad: 3, guia: 8, nombre: 'Reflexión y descomposición de la luz' }
          ]
        },
        4: {
          unidades: [3],
          guias_especificas: [
            { unidad: 3, guia: 7, nombre: 'El calor' },
            { unidad: 3, guia: 9, nombre: 'El sonido' }
          ]
        },
        5: {
          unidades: [2],
          guias_especificas: [
            { unidad: 2, guia: 6, nombre: 'Movimiento y flotación' }
          ]
        }
      }
    },
    'sostenibilidad_y_medio_ambiente': {
      descripcion: 'Sostenibilidad y medio ambiente',
      grados: {
        2: {
          unidades: [1, 3],
          guias_especificas: [
            { unidad: 1, guia: 2, nombre: 'Uso racional de recursos naturales' },
            { unidad: 3, guia: 7, nombre: 'Reciclaje de papel' }
          ]
        },
        3: {
          unidades: [2],
          guias_especificas: [
            { unidad: 2, guia: 5, nombre: 'Conservación de la madera' }
          ]
        },
        4: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 10, nombre: 'Gestión de residuos' },
            { unidad: 4, guia: 11, nombre: 'Energías renovables' },
            { unidad: 4, guia: 12, nombre: 'Huella ecológica' }
          ]
        },
        5: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 3, nombre: 'Reutilización de caucho y plástico' }
          ]
        }
      }
    },
    'pensamiento_computacional_y_tecnología_digital': {
      descripcion: 'Pensamiento computacional y tecnología digital',
      grados: {
        2: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 10, nombre: 'Pensamiento algorítmico' },
            { unidad: 4, guia: 11, nombre: 'Código braille' }
          ]
        },
        3: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 11, nombre: 'Dispositivos inteligentes' },
            { unidad: 4, guia: 12, nombre: 'GPS y ubicación' }
          ]
        },
        4: {
          unidades: [1, 3],
          guias_especificas: [
            { unidad: 1, guia: 2, nombre: 'Internet de las cosas (IoT)' },
            { unidad: 3, guia: 9, nombre: 'Streaming e IA' }
          ]
        },
        5: {
          unidades: [3, 4],
          guias_especificas: [
            { unidad: 3, guia: 7, nombre: 'Internet' },
            { unidad: 3, guia: 8, nombre: 'Redes sociales' },
            { unidad: 4, guia: 11, nombre: 'Inteligencia Artificial' }
          ]
        }
      }
    },
    'historia_de_la_tecnología_(inventos_y_evolución)': {
      descripcion: 'Historia de la tecnología',
      grados: {
        4: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 1, nombre: 'Historia de inventos importantes' }
          ]
        },
        5: {
          unidades: [2],
          guias_especificas: [
            { unidad: 2, guia: 4, nombre: 'Evolución de medios de transporte' }
          ]
        }
      }
    },
    'sistemas_tecnológicos_(vivienda,_transporte,_comunicación)': {
      descripcion: 'Sistemas tecnológicos',
      grados: {
        4: {
          unidades: [2],
          guias_especificas: [
            { unidad: 2, guia: 4, nombre: 'Sistemas en la vivienda (agua)' },
            { unidad: 2, guia: 6, nombre: 'Sistemas de residuos' }
          ]
        },
        5: {
          unidades: [2, 3],
          guias_especificas: [
            { unidad: 2, guia: 4, nombre: 'Medios de transporte' },
            { unidad: 3, guia: 7, nombre: 'Telecomunicaciones' }
          ]
        }
      }
    },
    'solución_de_problemas_con_tecnología': {
      descripcion: 'Solución de problemas con tecnología',
      grados: {
        2: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 10, nombre: 'Pensamiento algorítmico' }
          ]
        },
        3: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 3, nombre: 'Resolución de problemas con artefactos' }
          ]
        },
        4: {
          unidades: [2, 4],
          guias_especificas: [
            { unidad: 2, guia: 5, nombre: 'Filtración de agua' },
            { unidad: 4, guia: 10, nombre: 'Clasificación de residuos' }
          ]
        },
        5: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 12, nombre: 'Organización de feria tecnológica' }
          ]
        }
      }
    }
  },

  // ============================================
  // CIENCIAS NATURALES
  // ============================================
  Naturales: {
    'seres_vivos_(clasificación,_características,_ciclos_de_vida)': {
      descripcion: 'Seres vivos',
      grados: {
        2: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 1, nombre: 'Clasificación de seres vivos' },
            { unidad: 1, guia: 2, nombre: 'Características de los seres vivos' },
            { unidad: 1, guia: 3, nombre: 'Ciclo de vida' }
          ]
        },
        3: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 1, nombre: 'Los cinco reinos' },
            { unidad: 1, guia: 2, nombre: 'Reino animal' },
            { unidad: 1, guia: 3, nombre: 'Reino vegetal' }
          ]
        },
        4: {
          unidades: [3],
          guias_especificas: [
            { unidad: 3, guia: 13, nombre: 'Biodiversidad' }
          ]
        }
      }
    },
    'ecosistemas_y_medio_ambiente': {
      descripcion: 'Ecosistemas y medio ambiente',
      grados: {
        2: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 4, nombre: 'Ecosistemas' },
            { unidad: 1, guia: 5, nombre: 'Recursos naturales' }
          ]
        },
        3: {
          unidades: [1, 4],
          guias_especificas: [
            { unidad: 1, guia: 4, nombre: 'Relaciones en los ecosistemas' },
            { unidad: 4, guia: 22, nombre: 'Contaminación ambiental' }
          ]
        },
        4: {
          unidades: [3],
          guias_especificas: [
            { unidad: 3, guia: 13, nombre: 'Ecosistemas de Colombia' },
            { unidad: 3, guia: 14, nombre: 'Cadenas alimenticias' }
          ]
        },
        5: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 22, nombre: 'Conservación ambiental' }
          ]
        }
      }
    },
    'cuerpo_humano_(sistemas_corporales,_salud)': {
      descripcion: 'Cuerpo humano',
      grados: {
        2: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 6, nombre: 'El cuerpo humano' }
          ]
        },
        3: {
          unidades: [2],
          guias_especificas: [
            { unidad: 2, guia: 10, nombre: 'Los sentidos' }
          ]
        },
        4: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 19, nombre: 'Sistemas del cuerpo humano' }
          ]
        },
        5: {
          unidades: [1, 2],
          guias_especificas: [
            { unidad: 1, guia: 1, nombre: 'La célula' },
            { unidad: 1, guia: 2, nombre: 'Tejidos y órganos' },
            { unidad: 2, guia: 7, nombre: 'Sistema digestivo' },
            { unidad: 2, guia: 8, nombre: 'Sistema respiratorio' },
            { unidad: 2, guia: 9, nombre: 'Sistema circulatorio' }
          ]
        }
      }
    },
    'materia_y_energía': {
      descripcion: 'Materia y energía',
      grados: {
        2: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 19, nombre: 'Estados de la materia' },
            { unidad: 4, guia: 20, nombre: 'Cambios de estado' }
          ]
        },
        3: {
          unidades: [3],
          guias_especificas: [
            { unidad: 3, guia: 13, nombre: 'Formas de energía' },
            { unidad: 3, guia: 14, nombre: 'Transformación de energía' }
          ]
        },
        4: {
          unidades: [2],
          guias_especificas: [
            { unidad: 2, guia: 10, nombre: 'Mezclas y soluciones' }
          ]
        },
        5: {
          unidades: [3],
          guias_especificas: [
            { unidad: 3, guia: 13, nombre: 'La materia y sus propiedades' },
            { unidad: 3, guia: 15, nombre: 'Reacciones químicas' }
          ]
        }
      }
    },
    'fuerzas_y_movimiento': {
      descripcion: 'Fuerzas y movimiento',
      grados: {
        2: {
          unidades: [3],
          guias_especificas: [
            { unidad: 3, guia: 13, nombre: 'La fuerza' },
            { unidad: 3, guia: 14, nombre: 'Tipos de fuerza' }
          ]
        },
        3: {
          unidades: [2],
          guias_especificas: [
            { unidad: 2, guia: 11, nombre: 'El movimiento' }
          ]
        },
        4: {
          unidades: [3],
          guias_especificas: [
            { unidad: 3, guia: 15, nombre: 'Máquinas simples' }
          ]
        }
      }
    },
    'sistema_solar_y_tierra': {
      descripcion: 'Sistema solar y Tierra',
      grados: {
        4: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 1, nombre: 'El sistema solar' },
            { unidad: 1, guia: 2, nombre: 'La Tierra y sus movimientos' },
            { unidad: 1, guia: 3, nombre: 'La Luna' }
          ]
        },
        5: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 19, nombre: 'El universo' }
          ]
        }
      }
    },
    'método_científico_y_experimentación': {
      descripcion: 'Método científico y experimentación',
      grados: {
        3: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 19, nombre: 'Experimentos científicos' }
          ]
        },
        4: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 21, nombre: 'El método científico' }
          ]
        },
        5: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 23, nombre: 'Investigación científica' }
          ]
        }
      }
    },
    'recursos_naturales_y_conservación': {
      descripcion: 'Recursos naturales y conservación',
      grados: {
        2: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 5, nombre: 'Recursos naturales' }
          ]
        },
        3: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 22, nombre: 'Contaminación' },
            { unidad: 4, guia: 23, nombre: 'Cuidado del agua' }
          ]
        },
        4: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 22, nombre: 'Recursos renovables y no renovables' }
          ]
        },
        5: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 22, nombre: 'Conservación de recursos' },
            { unidad: 4, guia: 24, nombre: 'Desarrollo sostenible' }
          ]
        }
      }
    }
  },

  // ============================================
  // ÉTICA
  // ============================================
  ética: {
    'autoconocimiento_(autoimagen,_emociones,_sentidos)': {
      descripcion: 'Autoconocimiento',
      grados: {
        2: {
          unidades: [1, 2],
          guias_especificas: [
            { unidad: 1, guia: 1, nombre: 'Me gustan mis rasgos físicos' },
            { unidad: 1, guia: 2, nombre: 'Mi cuerpo es un apoyo extraordinario' },
            { unidad: 1, guia: 3, nombre: 'Mis sentidos: ventanas al mundo' },
            { unidad: 2, guia: 4, nombre: '¡Qué bueno es emocionarme!' }
          ]
        },
        3: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 1, nombre: 'La vida humana es maravillosa' }
          ]
        },
        4: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 1, nombre: '¡Así soy yo!' }
          ]
        },
        5: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 3, nombre: '¡Aprendamos a valorar las diferencias!' }
          ]
        }
      }
    },
    'convivencia_y_valores_morales': {
      descripcion: 'Convivencia y valores morales',
      grados: {
        2: {
          unidades: [2],
          guias_especificas: [
            { unidad: 2, guia: 5, nombre: '¿Cómo puedo expresar mis emociones?' }
          ]
        },
        3: {
          unidades: [2, 3],
          guias_especificas: [
            { unidad: 2, guia: 4, nombre: '¡Compartir nos hace mejores!' },
            { unidad: 2, guia: 6, nombre: '¿Qué es la solidaridad?' },
            { unidad: 3, guia: 9, nombre: 'Divirtiéndome sanamente, aprendo a respetar las normas' }
          ]
        },
        4: {
          unidades: [2, 4],
          guias_especificas: [
            { unidad: 2, guia: 4, nombre: '¿Cómo es mi comportamiento en la escuela o el colegio?' },
            { unidad: 4, guia: 11, nombre: 'Soy una persona digna' }
          ]
        },
        5: {
          unidades: [2, 4],
          guias_especificas: [
            { unidad: 2, guia: 6, nombre: '¿Cuáles son los valores morales que nos brinda la escuela o colegio?' },
            { unidad: 4, guia: 11, nombre: 'Tengo valor, pero no tengo precio' }
          ]
        }
      }
    },
    'familia_como_núcleo_social': {
      descripcion: 'Familia como núcleo social',
      grados: {
        2: {
          unidades: [2],
          guias_especificas: [
            { unidad: 2, guia: 6, nombre: 'Las personas que amo y me aman' }
          ]
        },
        3: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 2, nombre: 'Cuidar mi salud es mi responsabilidad' }
          ]
        },
        4: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 2, nombre: '¿Qué sería de mí sin una familia?' },
            { unidad: 1, guia: 3, nombre: 'Mi familia es única' }
          ]
        },
        5: {
          unidades: [1],
          guias_especificas: [
            { unidad: 1, guia: 1, nombre: '¿Cómo me ve mi familia?' },
            { unidad: 1, guia: 2, nombre: 'Mi familia trabaja para mi bienestar' }
          ]
        }
      }
    },
    'resolución_de_conflictos': {
      descripcion: 'Resolución de conflictos',
      grados: {
        2: {
          unidades: [2],
          guias_especificas: [
            { unidad: 2, guia: 5, nombre: '¿Cómo puedo expresar mis emociones?' }
          ]
        },
        3: {
          unidades: [2, 3],
          guias_especificas: [
            { unidad: 2, guia: 4, nombre: '¡Compartir nos hace mejores!' },
            { unidad: 3, guia: 8, nombre: 'Saber ganar y saber perder' }
          ]
        },
        4: {
          unidades: [2, 3],
          guias_especificas: [
            { unidad: 2, guia: 4, nombre: '¿Cómo es mi comportamiento en la escuela o el colegio?' },
            { unidad: 3, guia: 7, nombre: '¿Quién soy en mi comunidad?' }
          ]
        },
        5: {
          unidades: [2, 3],
          guias_especificas: [
            { unidad: 2, guia: 4, nombre: 'Valoremos nuestras aptitudes y actitudes' },
            { unidad: 3, guia: 7, nombre: 'Aprendo de mi comunidad' }
          ]
        }
      }
    },
    'derechos_humanos_y_dignidad': {
      descripcion: 'Derechos humanos y dignidad',
      grados: {
        2: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 11, nombre: '¿Cuáles son nuestras necesidades básicas?' }
          ]
        },
        3: {
          unidades: [2],
          guias_especificas: [
            { unidad: 2, guia: 5, nombre: '¿Por qué algunos seres humanos no tienen bienestar?' }
          ]
        },
        4: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 10, nombre: '¿Por qué somos únicos los seres humanos?' },
            { unidad: 4, guia: 11, nombre: 'Soy una persona digna' }
          ]
        },
        5: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 11, nombre: 'Tengo valor, pero no tengo precio' }
          ]
        }
      }
    },
    'bienestar_y_salud': {
      descripcion: 'Bienestar y salud',
      grados: {
        2: {
          unidades: [3],
          guias_especificas: [
            { unidad: 3, guia: 7, nombre: 'Soy prudente con mi cuerpo' },
            { unidad: 3, guia: 8, nombre: 'Mi cuerpo dice muchas cosas' }
          ]
        },
        3: {
          unidades: [1, 2],
          guias_especificas: [
            { unidad: 1, guia: 2, nombre: 'Cuidar mi salud es mi responsabilidad' },
            { unidad: 1, guia: 3, nombre: '¿Por qué es importante una buena higiene?' },
            { unidad: 2, guia: 5, nombre: '¿Por qué algunos seres humanos no tienen bienestar?' }
          ]
        }
      }
    },
    'diversión_sana_y_tiempo_libre': {
      descripcion: 'Diversión sana y tiempo libre',
      grados: {
        3: {
          unidades: [3],
          guias_especificas: [
            { unidad: 3, guia: 7, nombre: '¿Qué cosas me divierten sanamente?' },
            { unidad: 3, guia: 8, nombre: 'Saber ganar y saber perder' },
            { unidad: 3, guia: 9, nombre: 'Divirtiéndome sanamente, aprendo a respetar las normas' }
          ]
        },
        4: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 12, nombre: 'Lo mío es ser verdaderamente humano' }
          ]
        }
      }
    },
    'comunidad_y_participación_ciudadana': {
      descripcion: 'Comunidad y participación ciudadana',
      grados: {
        2: {
          unidades: [3],
          guias_especificas: [
            { unidad: 3, guia: 9, nombre: 'La comunidad ayuda a cuidarme' }
          ]
        },
        3: {
          unidades: [4],
          guias_especificas: [
            { unidad: 4, guia: 10, nombre: 'El mundo de las niñas y los niños' }
          ]
        },
        4: {
          unidades: [3],
          guias_especificas: [
            { unidad: 3, guia: 7, nombre: '¿Quién soy en mi comunidad?' },
            { unidad: 3, guia: 8, nombre: '¿Qué le aporto a la humanización de mi comunidad?' },
            { unidad: 3, guia: 9, nombre: 'Siento orgullo por mis contribuciones a la comunidad' }
          ]
        },
        5: {
          unidades: [3, 4],
          guias_especificas: [
            { unidad: 3, guia: 7, nombre: 'Aprendo de mi comunidad' },
            { unidad: 3, guia: 8, nombre: '¿Qué hace la comunidad por mí?' },
            { unidad: 4, guia: 12, nombre: '¡Pongo mis habilidades al servicio de las personas!' }
          ]
        }
      }
    }
  }
};

// Función para obtener las guías específicas según tema y grado
function obtenerGuiasEspecificas(asignatura, temaGeneral, grado) {
  if (!MAPEO_TEMAS_GUIAS[asignatura]) {
    return { error: 'Asignatura no encontrada' };
  }

  if (!MAPEO_TEMAS_GUIAS[asignatura][temaGeneral]) {
    return { error: 'Tema general no encontrado para esta asignatura' };
  }

  const tema = MAPEO_TEMAS_GUIAS[asignatura][temaGeneral];

  if (!tema.grados[grado]) {
    return {
      mensaje: `El tema "${tema.descripcion}" no tiene guías específicas para grado ${grado}°`,
      tema_disponible_en_grados: Object.keys(tema.grados).join(', ')
    };
  }

  return {
    asignatura: asignatura,
    tema: tema.descripcion,
    grado: grado,
    unidades: tema.grados[grado].unidades,
    guias_especificas: tema.grados[grado].guias_especificas
  };
}

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MAPEO_TEMAS_GUIAS, obtenerGuiasEspecificas };
}
