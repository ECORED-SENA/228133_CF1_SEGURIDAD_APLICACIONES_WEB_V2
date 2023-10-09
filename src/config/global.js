export default {
  global: {
    componenteFormativo:
      'Metodologías, normas y estándares de seguridad orientada a aplicaciones web',
    descripcionCurso:
      'En este componente se presentan los fundamentos necesarios para el desarrollo de una auditoría de la seguridad en aplicaciones web, mediante el reconocimiento de estándares, metodologías, técnicas y herramientas necesarias para la evaluación de la seguridad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',

        numero: '1',
        titulo: 'Fundamentos de seguridad en aplicaciones web',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Infraestructura de aplicaciones web',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Normatividad y estándares para la gestión de la seguridad',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Metodologías para la gestión de la seguridad en aplicaciones web',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',

        numero: '2',
        titulo: 'Vulnerabilidades en aplicaciones web',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Metodologías para la gestión de vulnerabilidades',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Fundamentos de <em>pentesting</em>',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'OWASP: top 10 de vulnerabilidades',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Herramientas especializadas',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Análisis de resultados',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF01_228133_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Análisis de resultados',
      referencia: 'OWASP. (2022). Web Security Testing Guide 4.2. OWASP.',
      tipo: 'PDF',
      link:
        'https://github.com/OWASP/wstg/releases/download/v4.2/wstg-v4.2.pdf',
    },
    {
      tema: 'Análisis de resultados',
      referencia: 'OWASP. (2022). Web Security Testing Guide Checklist. OWASP.',
      tipo: 'Página Web',
      link: 'https://github.com/0xRadi/OWASP-Web-Checklist',
    },
    {
      tema: 'Análisis de resultados',
      referencia: 'Olmedo, J. (2021). OWASP risk assessment calculator.',
      tipo: 'Página Web',
      link: 'https://javierolmedo.github.io/OWASP-Calculator/',
    },
  ],
  glosario: [
    {
      termino: '2FA',
      significado:
        'término que representa doble factor de autenticación, solución que agrega una capa de seguridad en sistemas de autenticación basados en componentes externos a un sistema, por ejemplo, un <i>token</i>, una aplicación, tarjeta inteligente, etc.',
    },
    {
      termino: '<em>Checklist</em>',
      significado:
        'lista de chequeo que sirve para registrar un proceso de auditoría.',
    },
    {
      termino: 'GUI',
      significado:
        'interfaz gráfica de usuario, por ejemplo, una aplicación, o aplicación móvil.',
    },
    {
      termino: 'KPI',
      significado:
        '<em>Key Performance Indicator</em> o indicador clave de desempeño, que representa las métricas de eficacia de las acciones adoptadas y así determinar si son efectivas o no.',
    },
    {
      termino: 'URL',
      significado:
        '<em>Uniform Resource Locator</em> (localizador de recursos uniforme), representa una dirección que apunta hacia un recurso único en la web.',
    },
  ],
  referencias: [
    {
      referencia:
        'Guijarro, O., J., Caparrós, R., J., & Cubero, L., L. (2019). DevOps y seguridad <em>cloud</em>. Editorial UOC.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/128889',
    },
    {
      referencia:
        'Incibe. (2022). Top 10 vulnerabilidades web de 2021. Incibe.',
      link:
        'https://www.incibe.es/protege-tu-empresa/blog/top-10-vulnerabilidades-web-2021',
    },
    {
      referencia: 'MinTIC. (2016). Guía de gestión de riesgos. MinTIC.',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_G7_Gestion_Riesgos.pdf',
    },
    {
      referencia:
        'MinTIC. (2016). Guía para la gestión y clasificación de activos de información. MinTIC.',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_G5_Gestion_Clasificacion.pdf',
    },
    {
      referencia:
        'MinTIC. (2016). Guía para la implementación de seguridad de la información en una mipyme. MinTIC.',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_Guia_Seguridad_informacion_Mypimes.pdf',
    },
    {
      referencia:
        'MinTIC. (2020) Anexo 3 - Resolución MinTIC 1519 del 2020, Condiciones mínimas técnicas y de seguridad digital.',
      link:
        'https://gobiernodigital.mintic.gov.co/692/articles-178659_Condiciones_minimas.pdf',
    },
    {
      referencia:
        'Ortega, C., J. M. (2018). Seguridad en aplicaciones web Java. RA-MA Editorial.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/106511',
    },
    {
      referencia: 'OWASP. (2022). OWASP <em>Top</em> 10:2021.',
      link: 'https://owasp.org/Top10/',
    },
    {
      referencia: 'OWASP. (2022). OWASP <em>Web Security Testing Guide</em>.',
      link: 'https://owasp.org/www-project-web-security-testing-guide/latest/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Hernando José Peña Hidalgo',
          cargo: 'Experto temático	',
          centro:
            'Centro de teleinformática y producción industrial - Regional Cauca',
        },
        {
          nombre: 'Paula Andrea Taborda Ortiz',
          cargo: 'Diseñadora instruccional',
          centro:
            'Centro de la Industria, la Empresa y Los Servicios CIES - Regional Norte de Santander',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora metodológica ',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'María Natalia Maldonado Delgado',
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Validación Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Carlos Mauricio Gomez Delgado',
          cargo: 'Desarrollo front-end',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Andrea Botello',
          cargo: 'Validación de Maquetación',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Eulises Orduz',
          cargo: 'Actividades didácticas',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Lina Marcela Perez',
          cargo: 'Validación Contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Revisión de guion audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'John Jairo Arciniegas González',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Validación audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
