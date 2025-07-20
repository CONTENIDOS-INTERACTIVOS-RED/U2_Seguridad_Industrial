export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad:
      'Herramientas técnicas y tecnológicas para la gestión de riesgos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Software especializado para gestión de riesgos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Equipos de monitoreo y medición',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '¿Qué es un sonómetro?',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Unidades y escalas de medición',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Agentes químicos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'de Paz, J. G. (2011). <em>Ruido: para los posgrados de higiene y seguridad industrial.</em> Editorial Nobuko.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/77687',
    },
    {
      referencia:
        'Otero Mateo, M., Pórtela Núñez, J. M. & Pastor Fernández, A. (2013). <em>Sistemas integrados de gestión.</em> Servicio de Publicaciones de la Universidad de Cádiz.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/33897',
    },
    {
      referencia:
        'Henao Robledo, F. (2014). <em>Riesgos físicos II: iluminación</em> (2ª ed.). Ecoe Ediciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/114362',
    },
    {
      referencia:
        'Henao Robledo, F. (2007). <em>Riesgos físicos I: ruido, vibraciones y presiones anormales.</em> Ecoe Ediciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/69031',
    },
    {
      referencia:
        'DEKRA. (s.f.). <em>Análisis de riesgos de proceso (HAZOP).</em>',
      link: 'https://www.dekra.es/es/analisis-de-riesgos-de-proceso-hazop/',
    },
    {
      referencia:
        'Portal INSST. (s.f.). <em>NTP 333: Análisis probabilístico de riesgos: Metodología del «Árbol de fallos y errores»</em> - PDF - Portal INSST - INSST.',
      link:
        'https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/10-serie-ntp-numeros-331-a-365-ano-1995/ntp-333-analisis-probabilistico-de-riesgos-metodologia-del-arbol-de-fallos-y-errores',
    },
  ],
  glosario: [
    {
      termino: 'Agentes químicos',
      significado:
        'Sustancias en forma de vapor, gas, polvo o niebla que pueden afectar la salud de los trabajadores.',
    },
    {
      termino: 'Análisis <em>What-If</em>',
      significado:
        'Técnica exploratoria que plantea escenarios hipotéticos para identificar riesgos.',
    },
    {
      termino: 'Análisis de causa raíz',
      significado:
        'Metodología que identifica las causas fundamentales de incidentes para evitar su recurrencia.',
    },
    {
      termino: '<em>Checklists</em>',
      significado:
        'Listas de verificación usadas para inspeccionar condiciones de seguridad en el trabajo.',
    },
    {
      termino: 'Dosímetro',
      significado:
        'Dispositivo que mide la exposición acumulada al ruido en la jornada laboral.',
    },
    {
      termino: 'Equipos de medición',
      significado:
        'Instrumentos usados para detectar y cuantificar riesgos físicos o químicos.',
    },
    {
      termino: 'FMEA',
      significado:
        'Técnica que analiza modos de falla y sus efectos en procesos o sistemas.',
    },
    {
      termino: 'HAZOP',
      significado:
        'Análisis sistemático de desviaciones en procesos para identificar riesgos potenciales.',
    },
    {
      termino: 'Iluminancia',
      significado:
        'Cantidad de luz que incide sobre una superficie, medida en lux.',
    },
    {
      termino: 'Leq',
      significado:
        'Nivel equivalente de presión sonora durante un periodo de tiempo determinado.',
    },
    {
      termino: 'Luxómetro',
      significado:
        'Instrumento utilizado para medir la iluminancia en un área de trabajo.',
    },
    {
      termino: 'Mapas de calor',
      significado:
        'Representación visual que identifica áreas con mayor exposición al riesgo.',
    },
    {
      termino: 'Matriz IPER',
      significado:
        'Herramienta que combina probabilidad y severidad para evaluar riesgos.',
    },
    {
      termino: 'Monitores PID/FID',
      significado:
        'Equipos para medir en tiempo real compuestos orgánicos volátiles en el aire.',
    },
    {
      termino: 'RCA',
      significado: 'Siglas en inglés del análisis de causa raíz.',
    },
    {
      termino: 'Ruido ocupacional',
      significado:
        'Exposición a niveles de sonido en el trabajo que pueden causar daño auditivo.',
    },
    {
      termino: '<em>Software</em> de gestión',
      significado:
        'Aplicación tecnológica que permite integrar y gestionar datos de riesgos.',
    },
    {
      termino: 'Valores límite permisibles (VLP)',
      significado:
        'Concentraciones máximas de exposición a agentes para proteger la salud del trabajador.',
    },
    {
      termino: 'dB(A)',
      significado:
        'Unidad de medida de presión sonora ajustada a la percepción humana del sonido.',
    },
    {
      termino: 'Árbol de fallos (FTA)',
      significado:
        'Herramienta gráfica que representa las causas de un evento no deseado.',
    },
  ],
}
