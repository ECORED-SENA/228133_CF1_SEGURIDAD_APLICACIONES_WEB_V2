<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Vulnerabilidades en aplicaciones web
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-md-10
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Actualmente se cuenta con una amplia gama de recursos normativos y estándares para la gestión de vulnerabilidades, algunas de ellas con un nivel de cobertura más amplio dado su capacidad de aplicación dentro de las necesidades de una organización. Cada una de estas normas tiene como talante la gestión proactiva de las vulnerabilidades antes de una ocurrencia de un incidente que ponga en riesgo la información administrada
    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.1	Metodologías para la gestión de vulnerabilidades

    p.mb-4(data-aos="fade-right") OWASP propone una metodología para la identificación de vulnerabilidades basada en pruebas de seguridad sobre las aplicaciones web, con el cual se busca encontrar las debilidades presentes en un sistema.
    p.mb-4(data-aos="fade-right") Este modelo de pruebas está conformado por:

    .row.mb-4(data-aos="fade")
      .col-lg-4.mb-4.mb-lg-0.col-md-12.col-12
        .tarjeta.bg--a-1.p-4.d-flex.flex-column.h-100.hoverScale2
          .row 
            .col-lg-3.col-md-2.col-3
              img.mb-3(src='@/assets/curso/tema2/1.png' )
          .row.align-items-center.mb-2.justify-content-center
            .col-auto
              .tarjeta.color-prima.p-3.mb-4
                h4.text-center.text-white.mb-0 Probador/Auditor 
          p Quien realiza las pruebas y validaciones.
      .col-lg-4.mb-4.mb-lg-0.col-md-12.col-12
        .tarjeta.bg--a-1.p-4.d-flex.flex-column.h-100.hoverScale2
          .row 
            .col-lg-3.col-md-2.col-3
              img.mb-3(src='@/assets/curso/tema2/2.png' )
          .row.align-items-center.mb-2.justify-content-center
            .col-auto
              .tarjeta.color-prima.p-3.mb-4
                h4.text-center.text-white.mb-0 Herramientas y metodología  
          p Guía de pruebas de OWASP.
      .col-lg-4.mb-4.mb-lg-0.col-md-12.col-12
        .tarjeta.bg--a-1.p-4.d-flex.flex-column.h-100.hoverScale2
          .row 
            .col-lg-3.col-md-2.col-3
              img.mb-3(src='@/assets/curso/tema2/3.png' )
          .row.align-items-center.mb-2.justify-content-center
            .col-auto
              .tarjeta.color-prima.p-3.mb-4
                h4.text-center.text-white.mb-0 Aplicación 
          p Objeto que se desea probar.
    
    P.mb-4(data-aos="fade-right") A su vez, las pruebas se pueden clasificar así:

    .tarjeta.tarjeta-color.p-5.mb-5(data-aos="fade-up")
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Pruebas pasivas 
            p El probador intenta comprender la lógica de la aplicación y explora la aplicación web como un usuario. Se pueden utilizar herramientas para la recopilación de información. Por ejemplo, se puede utilizar un <i>proxy</i> HTTP para observar todas las solicitudes y respuestas. Al final de esta fase, el probador generalmente debe comprender todos los puntos de acceso y la funcionalidad del sistema (por ejemplo, encabezados HTTP, parámetros, <i>cookies</i>, API, uso / patrones de tecnología, etc.).

          .col-md-6
            figure
              img(src='@/assets/curso/tema2/img2.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Pruebas pasivas
            p Esto puede indicar un formulario de autenticación donde la aplicación solicita un nombre de usuario y una contraseña.

            p.mb-5 Los siguientes parámetros representan dos puntos de acceso a la aplicación: 
            a.anexo.mb-3.mb-lg-0(href="https://www.example.com/appx?a=1&b=1" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.png")
              .anexo__texto
                p https://www.example.com/appx?a=1&b=1
     

            p En este caso, la aplicación muestra dos puntos de acceso (parámetros y).

            p Todos los puntos de entrada encontrados en esta fase representan un objetivo para las pruebas. Hay que realizar un seguimiento del directorio o árbol de llamadas de la aplicación y de todos los puntos de acceso puede ser útil durante las pruebas activas.
          .col-md-6
            figure
              img(src='@/assets/curso/tema2/i1.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Pruebas activas
            p Durante estas pruebas, un probador comienza a utilizar las metodologías descritas en las siguientes secciones, las cuales están divididas en 12 categorías:
            p.mb-0 1. Recopilación de información.
            p.mb-0 2. Pruebas de administración de configuración e implementación.
            p.mb-0 3. Pruebas de administración de identidades.
            p.mb-0 4. Pruebas de autenticación.
            p.mb-0 5. Pruebas de autorización.
            p.mb-0 6. Pruebas de gestión de sesiones.
            p.mb-0  7. Pruebas de validación de entrada.
            p.mb-0 8. Manejo de errores.
            p.mb-0  9. Criptografía.
            p.mb-0  10. Pruebas de lógica empresarial.
            p.mb-0  11. Pruebas del lado del cliente.
            p.mb-0 12. Pruebas de API.
          .col-md-6
            figure
              img(src='@/assets/curso/tema2/img3.png', alt='')
    
    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-md-12.mb-4.mb-md-0
          p.mb-4 Esto puede indicar un formulario de autenticación donde la aplicación solicita un nombre de usuario y una contraseña.
          p.mb-4 Los siguientes parámetros representan dos puntos de acceso a la aplicación: <a>https://www.example.com/appx?a=1&b=1</a>
          p.mb-4 En este caso, la aplicación muestra dos puntos de acceso <b>(parámetros y).</b>
          p.mb-4 Todos los puntos de entrada encontrados en esta fase representan un objetivo para las pruebas. Hay que realizar un seguimiento del directorio o árbol de llamadas de la aplicación y de todos los puntos de acceso puede ser útil durante las pruebas activas.
    separador
   
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.2	Fundamentos de <i>pentesting</i>

    p.mb-4(data-aos="fade-right") Dentro del ejercicio de la gestión de vulnerabilidades, cobran vital importancia las metodologías para el descubrimiento e identificación de estas, ya que orientan y dan un mapa de ruta de cómo se debe realizar el ejercicio, uno de estos es el <i>pentesting</i> o prueba de penetración, que no es más que un ejercicio de descubrimiento apoyado en técnicas y herramientas especializadas para la validación y búsqueda de vulnerabilidades en un sistema o aplicación.
    p.mb-4(data-aos="fade-right") Existen los siguientes tipos de <i>pentesting</i>:

    .row.mb-4(data-aos="fade")
      .col-md-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-azul")
          .row(titulo="Prueba en aplicación web")
            .col-md-9.mb-4.mb-md-0
              p Es una exploración profunda en una aplicación de tipo web, realizando análisis extremadamente detallados, para identificar vulnerabilidades que pueden poner en riesgo la información.

            .col-md-3
              figure
                img(src='@/assets/curso/tema2/4.png', alt='')

          .row(titulo="Prueba de <i>Client Side</i>")
            .col-md-9.mb-4.mb-md-0
              p En este tipo de prueba, es posible analizar <i>software,</i> programas de creación de contenido y <i>web browsers</i> (como Chrome, Firefox, Explorer, etc) en ordenadores de los usuarios, para la búsqueda de vulnerabilidades.
          
            .col-md-3
              figure
                img(src='@/assets/curso/tema2/5.png', alt='')

          .row(titulo="Prueba en red inalámbrica")
            .col-md-9.mb-4.mb-md-0
              p Se examinan las redes inalámbricas validando protocolos, puntos de acceso y credenciales administrativas.
          
            .col-md-3
              figure
                img(src='@/assets/curso/tema2/6.png', alt='')

          .row(titulo="Prueba de Ingeniería Social")
            .col-md-9.mb-4.mb-md-0
              p Se analizan las informaciones y datos confidenciales que pueden ser objeto de robo por medio de manipulación psicológica, aprovechándose del ingenio o desconocimiento del usuario.  
          
            .col-md-3
              figure
                img(src='@/assets/curso/tema2/7.png', alt='')

    p.mb-4(data-aos="fade-right") Para cualquiera de los tipos de <i>pentesting,</i> se sugiere un ciclo de vida como se muestra en la siguiente figura, en donde se resalta:

    .row.mb-4(data-aos="fade")
      .col-md-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-azul")

          .row(titulo="Reconocimiento")
            .col-md-9
              p Identificar los activos de información, aplicaciones, dispositivos, información de red, credenciales de acceso, información.


          .row(titulo="Análisis de vulnerabilidades")
            .col-md-9
              p.mb-4 Realizar mediante la aplicación de técnicas y herramientas especializadas, la búsqueda de posibles vulnerabilidades que pueden afectar un activo de información.


          .row(titulo="Explotación")
            .col-md-9
              p Permite validar si una vulnerabilidad es explotable o puede permanecer en estado inactivo.


          .row(titulo="Escalar privilegios o postexplotación")
            .col-md-9
              p Permite evaluar los posibles daños que pueden causar si una vulnerabilidad se materializa como amenaza.

          .row(titulo="Informe")
            .col-md-9
              p Generar el reporte del ejercicio realizado, hallazgos y detalles de las vulnerabilidades encontradas.
      .col-md-3
        figure
          img(src='@/assets/curso/tema2/img2.jpg', alt='')
    
    P.mb-4(data-aos="fade-right") Ahora bien, este ejercicio se puede realizar de manera exploratoria sin conocimiento del escenario e información de acceso, y dependiendo de esto, las pruebas se pueden clasificar en:

    .row.mb-5
      .col-lg-4.col-md-12.col-12(data-aos="fade-up-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/avatar1.png' alt='AvatarTop')
          .tarjeta.color-ama
            .text-black.p-4
              h4.text-center.mb-5 Caja negra
              p Aquí los auditores no cuentan con información previa sobre el escenario en el cual se va a trabajar, se desarrollan ejercicios de exploración e intrusión, este tipo de pruebas por lo general son realizadas por personas externas a la organización.

      .col-lg-4.col-md-12.col-12(data-aos="fade-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/avatar2.png' alt='AvatarTop')
          .tarjeta.color-ver
            .p-4
              h4.text-center.mb-5 Caja blanca
              p Los auditores cuentan con datos del escenario e incluso credenciales de acceso a los sistemas de información, este tipo de pruebas lo realizan principalmente personal interno de la organización.

      .col-lg-4.col-md-12.col-12(data-aos="fade-up-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/avatar3.png' alt='AvatarTop')
          .tarjeta.color-az
            .p-4
              h4.text-center.mb-5.text-white Caja gris
              p Se cuenta con parte de la información, pero se requiere detallar ciertos aspectos técnicos. 
    separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.3 OWASP - top 10 de vulnerabilidades

    p.mb-4(data-aos="fade-right") De acuerdo con la comunidad de OWASP, este genera reportes sobre las vulnerabilidades que más se encuentran en las aplicaciones web y en su último reporte se puede observar el siguiente comportamiento del top 10 de las vulnerabilidades identificadas.

    SlyderB.mb-5(:datos="datosSlyder")(data-aos="fade-right")
    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.4	Herramientas especializadas

    .row.justify-content-center.align-items-center.mb-4
      .col-md-8(data-aos="fade-right")
        p.mb-4 Estas son un elemento fundamental en el ejercicio de la búsqueda y gestión de vulnerabilidades, dado que permiten agilizar, automatizar y realizar cientos de validaciones en segundos, y generando informes muy completos sobre los hallazgos encontrados.
        p.mb-4 A continuación, se exponen algunas de las herramientas más comunes, aunque más adelante se profundizará sobre su utilidad y manejo en el ejercicio de la auditoría.
        p.mb-4 Dentro del universo de herramientas a utilizar, están las siguientes categorías:
      .col-md-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img3.jpg', alt='')

    .row.mb-5(data-aos="fade-right")
      .col-md-12
        ul.lista-ul--color.mb-0
          li 
            i.fas.fa-atom
            | Herramientas de pruebas de seguridad de aplicaciones estáticas (SAST).
          li 
            i.fas.fa-atom
            span Herramientas de pruebas dinámicas de seguridad de aplicaciones (DAST), principalmente para aplicaciones web.
          li 
            i.fas.fa-atom
            span Herramientas interactivas de pruebas de seguridad de aplicaciones (IAST), principalmente para aplicaciones web y API  web.
          li 
            i.fas.fa-atom
            | Mantener actualizadas las bibliotecas de código abierto, para evitar el uso de componentes con vulnerabilidades conocidas (OWASP Top 10-2017 A9)
          li 
            i.fas.fa-atom
            | Herramientas de calidad de código estático.

    .row.mb-4(data-aos="fade-right")
      .col-lg-3.col-md-6.col-9
        .tarjeta.clr-1
          h4.text-center.p-2 Herramientas SAST

    p.mb-4(data-aos="fade-right") En el siguiente recurso podrá conocer las herramientas más importantes SAST.

    .row.mb-4(data-aos="fade-up")
      .col-md-12 
        TabsC.color-acento-contenido
          .py-3.py-md-0(titulo="Escaneo de código de GitHub")
            .row.tarjeta.color--gris.p-4
              .col-md-6
                figure
                  img(src='@/assets/curso/tema2/img5.jpg', alt='')
              .col-md-6.mb-4.mb-md-0
                h4 Escaneo de código de GitHub 
                p.mb-4 Es un servicio gratuito de análisis estático de código abierto que utiliza GitHub Actions y CodeQL. 
                p Sirve para escanear repositorios públicos en GitHub. Soporta C/C++, C#, Ruby (beta), Java, JavaScript/TypeScript, Python y Go.               

          .py-3.py-md-0(titulo="Análisis estático de Coverity Scan")
            .row.tarjeta.color--gris.p-4
              .col-md-6
                figure
                  img(src='@/assets/curso/tema2/img6.jpg', alt='')
              .col-md-6.mb-4.mb-md-0
                h4 Análisis estático de Coverity Scan 
                p.mb-4 Se puede conectar a Travis-CI para que se realice automáticamente con recursos en línea. Soporta más de una docena de lenguajes de programación.

          .py-3.py-md-0(titulo="Reshift")
            .row.tarjeta.color--gris.p-4
              .col-md-6
                figure
                  img(src='@/assets/curso/tema2/img7.jpg', alt='')
              .col-md-6.mb-4.mb-md-0
                h4 Reshift
                p.mb-4 Es una herramienta de CI/CD que utiliza el análisis de código estático para buscar vulnerabilidades y utiliza el aprendizaje automático para dar una predicción sobre falsos positivos. Soporta Java con soporte futuro para NodeJS y JavaScript planeado.  

          .py-3.py-md-0(titulo="WhiteSource Free Tools")
            .row.tarjeta.color--gris.p-4
              .col-md-6
                figure
                  img(src='@/assets/curso/tema2/img8.jpg', alt='')
              .col-md-6.mb-4.mb-md-0
                h4 WhiteSource Free Tools 
                p.mb-4 <i>Suite</i> de herramientas para detectar vulnerabilidades en código fuente.
          
          .py-3.py-md-0(titulo="HCL AppScan CodeSweep")
            .row.tarjeta.color--gris.p-4
              .col-md-6
                figure
                  img(src='@/assets/curso/tema2/img9.jpg', alt='')
              .col-md-6.mb-4.mb-md-0
                h4 HCL AppScan CodeSweep 
                p.mb-4 Esta es una versión de la edición de la comunidad SAST de HCL AppScan. 
                p La herramienta actualmente es compatible con Python, Ruby, JS (Vue, Node, Angular, JQuery, React, etc.), PHP, Perl, Go, TypeScript y con otros nuevos lenguajes que se agregan con frecuencia.  

    .row.mb-4(data-aos="fade-right")
      .col-lg-3.col-md-6.col-9
        .tarjeta.clr-1
          h4.text-center.p-2 Herramientas DAST

    p.mb-4(data-aos="fade-right") Si un proyecto tiene un componente de aplicación web, se recomienda ejecutar análisis automatizados contra él para establecer las vulnerabilidades.

    .row.mb-4(data-aos="fade-up")
      .tarjeta.tarjeta-ama.p-4
        LineaTiempoC.color-acento-botones(text-small)
          .row(titulo="OWASP ZAP")
            .col-md-8.mb-4.mb-md-0
              h5 OWASP ZAP
              p Es una herramienta gratuita y de código abierto con todas las funciones que incluye escaneo automatizado en busca de vulnerabilidades y herramientas para ayudar a los expertos a realizar pruebas manuales de lápiz de aplicaciones web.
          
            .col-md-4
              figure
                img(src='@/assets/curso/tema2/i2.png', alt='')

          .row(titulo="StackHawk")
            .col-md-8.mb-4.mb-md-0
              h5 StackHawk
              p Esta es una herramienta con soporte comercial construida sobre OWASP ZAP y optimizada para ejecutarse en CI/CD (casi todos los CI soportados) para probar aplicaciones web durante el desarrollo y en CI/CD. StackHawk es gratuito para proyectos de código abierto y de uso gratuito en una sola aplicación.
          
            .col-md-4
              figure
                img(src='@/assets/curso/tema2/i3.png', alt='')


          .row(titulo="Arachni – Arachni")
            .col-md-8.mb-4.mb-md-0
              h5 Arachni – Arachni
              p Es un escáner con soporte comercial, pero es gratuito para la mayoría de los casos de uso, incluido el escaneo de proyectos de código abierto.
          
            .col-md-4
              figure
                img(src='@/assets/curso/tema2/i4.png', alt='')

          .row(titulo="VWT Digital's Sec-helpers")
            .col-md-8.mb-4.mb-md-0
              h5 VWT Digital's Sec-helpers
              p Colección de ayudantes dinámicos relacionados con la seguridad. Sec-helpers es un conjunto de pruebas y validadores útiles para garantizar la seguridad de un dominio determinado.
          
            .col-md-4
              figure
                img(src='@/assets/curso/tema2/i5.png', alt='')


          .row(titulo="OWASP Purpleteam")
            .col-md-8.mb-4.mb-md-0
              h5 OWASP Purpleteam
              p Una regresión de seguridad que prueba SaaS y CLI, perfecta para insertar en sus canalizaciones de compilación. No necesita escribir ninguna prueba. Esta herramienta únicamente necesita proporcionar un archivo de trabajo que le diga a Purpleteam lo que desea que se pruebe. Tiene dos ambientes principales y un <i>local cloud.</i>
          
            .col-md-4
              figure
                img(src='@/assets/curso/tema2/i6.png', alt='')

    .row.mb-4(data-aos="fade-right")
      .col-lg-3.col-md-6.col-9
        .tarjeta.clr-1
          h4.text-center.p-2 Herramientas IAST

    p.mb-4(data-aos="fade-right") Estas herramientas suelen estar orientadas a analizar aplicaciones web y API web, pero eso es específico del proveedor. Puede haber productos IAST que también realicen un buen análisis de seguridad en aplicaciones que no sean web.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-up")
      .col-md-8
        .row
          .col-lg-8.col-md-12.col-12
            figure
              img.mb-0(src='@/assets/curso/tema2/img11.jpg', alt='')
          .col-lg-4.col-md-12.col-12
            .tarjeta.color-gris.p-4
              h5 Contrast Community Edition (CE) 
              p Versión con todas las funciones para 1 aplicación y hasta 5 usuarios (algunas funciones Enterprise deshabilitadas). Contrast CE solo admite Java y .NET.

    p.mb-4(data-aos="fade-right") A continuación podrá conocer algunas de las herramientas disponibles para la auditoría de aplicaciones web y para proyectos de desarrollo de aplicaciones web, y vale la pena  aclarar que algunas de ellas son <i>open source,</i> o tienen una posibilidad de ser utilizados cuando son proyectos abiertos, pero para proyectos comerciales o de gran tamaño requieren de una licencia o contrato de uso.

    .row.mb-4(data-aos="fade-up")
      .col-md-12
        TabsB.color-acento-contenido.mb-5
          .py-4.py-md-5(titulo="<i>Software</i> de código abierto (OSS)" :icono="require('@/assets/curso/tema2/icon1.png')")
            .row
              .col-md-8.mb-4.mb-md-0
                h4 Herramientas de seguridad de <i>software</i> de código abierto (OSS)
                p.mb-4 OSS se refiere a las bibliotecas o componentes de código abierto que los desarrolladores de aplicaciones aprovechan para desarrollar rápidamente nuevas aplicaciones y agregar características a las aplicaciones existentes.
                p.mb-2.fst-italic Plugin Maven Versions. 
                p.mb-2.fst-italic Dependabot.
            
              .col-md-4
                figure
                  img(src='@/assets/curso/tema2/vec1.jpg', alt='')

          .py-4.py-md-5(titulo="Componentes vulnerables conocidos" :icono="require('@/assets/curso/tema2/icon2.png')")
            .row
              .col-md-8.mb-4.mb-md-0
                h4 Detección de componentes vulnerables conocidos 
                p.mb-4 Como alternativa y para tratar de mantener todos sus componentes actualizados, un proyecto puede monitorear específicamente si alguno de los componentes que utilizan tiene componentes vulnerables conocidos:
                p.mb-2 OWASP.
                p.mb-2 GitHub
                p.mb-2 Debricked

              .col-md-4
                figure
                  img(src='@/assets/curso/tema2/vec2.jpg', alt='')

          .py-4.py-md-5(titulo="Calidad de código" :icono="require('@/assets/curso/tema2/icon3.png')")
            .row
              .col-md-8.mb-4.mb-md-0
                h4 Herramientas de calidad de código
                p.mb-4 Los proyectos de desarrollo de <i>software</i> consideran el uso de herramientas de buena calidad de código. Algunos sugeridos por OWASP son:
                p.mb-2 SpotBugs
                p.mb-2 SonarQube
                p.mb-2 DeepScan

              .col-md-4
                figure
                  img(src='@/assets/curso/tema2/vec3.jpg', alt='')

          .py-4.py-md-5(titulo="Entornos <i>DevOps/CI</i>" :icono="require('@/assets/curso/tema2/icon4.png')")
            .row
              .col-md-7.mb-4.mb-md-0
                h4 Herramientas de seguridad integradas en entornos DevOps/CI
                p Permiten a las empresas conseguir una mayor eficiencia, productividad y agilidad, conectando diferentes aplicaciones de <i>software</i> y servicios, interfaces de programación de aplicaciones (API) datos y dispositivos para automatizar los procesos empresariales.
                ol.lista-ol
                  li 
                    span.text-bold a. 
                    | Grendel-Scan
                  li 
                    span.text-bold b. 
                    | Vega
                  li 
                    span.text-bold c. 
                    | Wapiti

                p.mb-4 Otras herramientas de seguridad gratuitas de código abierto son:
                ol.lista-ol
                  li 
                    span.text-bold a. 
                    | Skipfish.
                  li 
                    span.text-bold b. 
                    | SQLMap
                  li 
                    span.text-bold c. 
                    | Graber.
                  li 
                    span.text-bold d. 
                    | Ratproxy.
                  li 
                    span.text-bold e. 
                    | Wfuzz.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/vec4.png', alt='')


    separador
   
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.5 Análisis de resultados

    .row.justify-content-center.align-items-center.mb-4
      .col-md-8(data-aos="fade-right")
        p.mb-4 Una vez realizado el plan de pruebas programado con las herramientas y técnicas seleccionadas, se deben documentar los hallazgos encontrados en el ejercicio, para ello se emplean instrumentos que permitan registrar, analizar y evaluar el estado actual de la seguridad de las aplicaciones web.
        p Desde el proyecto OWASP, se han propuesto varios instrumentos para registrar la información a manera de <em>checklist</em>, a saber:
      .col-md-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img10.jpg', alt='')

    .row.justify-content-center.mb-4(data-aos="fade-up")
      .col-md-10
        .row.justify-content-center.align-items-center
          .col-lg-5.col-md-12.col-12
            .titulo-sexto.color-acento-contenido
              h5 Figura 7
              span Instrumento <em>checklist</em> para registro de la evaluación.
            figure
              img.mb-0(src='@/assets/curso/tema2/12.jpg', alt='')
          .col-lg-6.col-md-12.col-12
            .tarjeta.color-gris.p-4
              h5 Instrumento <em>checklist</em> para registro de la evaluación
              p.mb-5 Este permite obtener un informe del riesgo que pueden llegar a presentar una determinada aplicación web, registrando cada una de las aplicaciones web que se desea evaluar, y registrar el resultado de las pruebas practicadas, esta información será útil para generar un informe final del nivel del riesgo presente en las aplicaciones.
              .col-md-9
                a.anexo.mb-4.mb-lg-0.bgw(href="https://docs.github.com/es/issues/tracking-your-work-with-issues/about-task-lists" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.png")
                  .anexo__texto
                    p #[b Enlace web.] <em>Master checklist</em>

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-md-10
        .row.justify-content-center.align-items-center
          .col-lg-5.col-md-12.col-12
            .titulo-sexto.color-acento-contenido
              h5 Figura 8
              span OWASP Risk Assesment Calculator.
            figure
              img.mb-0(src='@/assets/curso/tema2/11.jpg', alt='')
          .col-lg-6.col-md-12.col-12
            .tarjeta.color-gris.p-4
              h5 Instrument OWASP Risk Assessment Calculator
              p.mb-5 Esta herramienta es una calculadora de evaluación de riesgos OWASP y se puede encontrar un instrumento de evaluación en línea disponible en
              .col-md-9
                a.anexo.mb-4.mb-lg-0.bgw(href="https://javierolmedo.github.io/OWASP-Calculator/" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.png")
                  .anexo__texto
                    p #[b Enlace web.] #[i Calculator]

    .row.justify-content-center.align-items-center.mb-4
      .col-md-10
        .row.justify-content-center.align-items-center
          .col-lg-3.col-md-12.col-12(data-aos="fade-right")
            figure
              img(src="@/assets/curso/tema2/13.jpg", alt="alt")
          .col-lg-7.col-md-12.col-12(data-aos="fade-left")
            .cajon-b.color-acento-contenido.p-3
              p.mb-4 Es importante resaltar que el ejercicio de pruebas y la obtención del indicador de riesgo es un producto importante, pero ante la organización o los propietarios de la información se deben presentar reportes técnicos, con evidencias, detalles de las pruebas realizadas y resultados obtenidos, así como una serie de recomendaciones para subsanar dichas vulnerabilidades.
              p.mb-5 Desde el proyecto OWASP, en su metodología en el capítulo 5, sugiere las partes mínimas de un informe.
              .row.justify-content-center
                .col-md-8
                  a.anexo.mb-4.mb-lg-0(href="https://owasp.org/www-project-web-security-testing-guide/v42/5-Reporting/README" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.png")
                    .anexo__texto
                      p #[b Enlace web.] <i>web Security Testing Guide</i>

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Figura 9
      span Estructura general de un reporte de <i>pentesting</i>

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.col-md-12.col-12(data-aos="fade-right")
        .tarjeta.color-gris.p-4
          .row.justify-content-center
            .col-lg-6
              .row.mb-4
                .col-md-8
                  .tarjeta.color-titulo.p-2
                    h5.mb-0.text-center 01. Introducción
                .col-md-12.p-3
                  p 1. Control de versiones.
                  p  2. Tabla de contenido.
                  p  3. Equipo de trabajo.
                  p  4. Ámbito de aplicación.
                  p  5. Limitaciones.
                  p  6. Cronología.
                  p  7. Descargo de responsabilidades.
            .col-lg-6
              .row.mb-4
                .col-md-8
                  .tarjeta.color-titulo.p-2
                    h5.mb-0.text-center 02. Resumen ejecutivo
                .col-md-12.p-3
                  p <b>a. Conclusiones</b>
                  .row 
                    p.mb-0 1. Resumen de conclusiones.
                    p 2. Detalles de hallazgos.
                  p <b>b. Apéndices</b>
      .col-lg-4.col-md-10.col-12(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/1.svg", alt="alt")

    .tarjeta.color-fondo.p-2.mb-4(data-aos="fade-right")
      .row.justify-content-center.align-items-center
        .col-lg-1.col-sm-1.col-1 
          span.mb-0
        .col-3.col-sm-2.col-lg-1.p-3
          .row.justify-content-end.align-items-center
            .col-9
              img(src="@/assets/curso/tema2/manita.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1.text-white Modelo de <em>Pentesting</em>
              p.text-small.text-white Para realizar una presentación y sustentación ante la organización del ejercicio realizado, y argumentando con detalles y pruebas, las debilidades que presentan y un plan de mejoramiento que permita la reducción de la brecha a la seguridad en aplicaciones web, se puede recurrir al modelo de reporte de <em>pentesting</em>.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://owasp.org/www-project-web-security-testing-guide/v42/5-Reporting/README" target="_blank")
                span Ir al enlace
        .col-lg-1.col-sm-1.col-1 
          span.mb-0




</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    modal1: false,
    modal2: false,
    datosSlyder: [
      {
        titulo: 'Pérdida del control de acceso (<i>Broken Access Control</i>)',
        texto:
          'El control de acceso permite cumplir una política de permisos y roles, es decir, que un usuario pueda acceder a determinados lugares. Estas restricciones implican que los usuarios no puedan actuar fuera de los permisos y, además, llevar un control de quien accede a cada recurso.<br></br>La vulnerabilidad <i>Broken Access Control</i> permite que un usuario sin privilegios pueda acceder a un recurso al que no tendría que acceder.',
        imagen: require('@/assets/curso/tema2/1.jpg'),
      },
      {
        titulo: 'Fallos criptográficos (<i>Cryptographic Failures</i>)',
        texto:
          'Hay ciertos datos que deben estar cifrados, como credenciales de acceso, datos bancarios, información confidencial de la empresa, etc., ya que, aparte de que la ley lo exija, lo que un ciberdelincuente pueda hacer con los datos resulta catastrófico para la empresa. Para que estos sean vistos únicamente por las personas autorizadas de la empresa, hay que aplicarles un cifrado con algoritmos y protocolos estándares y robustos. ',
        imagen: require('@/assets/curso/tema2/2.jpg'),
      },
      {
        titulo: 'Inyección (<i>Injection</i>)',
        texto:
          'Esto sucede cuando un ciberdelincuente puede enviar datos dañinos a un cliente y desde el año 2021, el <i>Cross-site Scripting</i> forma parte de esta categoría, como una vulnerabilidad de seguridad inyectando un script malicioso en un sitio web para luego ser procesado y ejecutado.',
        imagen: require('@/assets/curso/tema2/3.jpg'),
      },
      {
        titulo: 'Diseño inseguro (<i>Insecure Design</i>)',
        texto:
          'A la hora de desarrollar una aplicación web es primordial incluir la seguridad de la aplicación desde la fase del diseño, centrándose la detección de riesgos relacionados con el diseño y las fallas arquitectónicas, además de dar más fuerza al modelado de amenazas, patrones de diseño seguros y arquitecturas de referencia.',
        imagen: require('@/assets/curso/tema2/4.jpg'),
      },
      {
        titulo:
          'Configuración de seguridad defectuosa (<i>Security Misconfiguration</i>)',
        texto:
          'En el entorno de la aplicación web los ciberdelincuentes intentarán acceder mediante cuentas por defecto, versiones obsoletas con vulnerabilidades sin actualizar, directorios desprotegidos, etc. Por ello, tiene que estar todo bien configurado y evitar usar credenciales por defecto, como puede ser en el caso del servidor, aplicaciones o dispositivos.',
        imagen: require('@/assets/curso/tema2/5.jpg'),
      },
      {
        titulo:
          'Componentes vulnerables y obsoletos (<i>Vulnerable and Outdated Components</i>)',
        texto:
          'Un ciberdelincuente podrá comprometer un sistema mediante vulnerabilidades ya conocidas en componentes comunes, como por ejemplo la versión del sistema operativo o aplicaciones instaladas en el servidor, entre otras.',
        imagen: require('@/assets/curso/tema2/6.jpg'),
      },
      {
        titulo:
          'Fallos de identificación y autenticación (<i>Identification and Authentication Failures</i>)',
        texto:
          'Esto sucede cuando en las interfaces de acceso no se controla el número de intentos de autenticación, hay una baja complejidad de las contraseñas o no se implanta un sistema multifactor “2FA”.<br></br>Esto podría permitir a un ciberdelincuente realizar ataques de fuerza bruta o diccionario para ingresar en él o cuando la aplicación permite utilizar contraseñas débiles.',
        imagen: require('@/assets/curso/tema2/7.jpg'),
      },
      {
        titulo:
          'Fallos en el <i>software</i> y en la integridad de los datos (<i>Software and Data Integrity Failures</i>)',
        texto:
          'Muchas aplicaciones se actualizan de manera automática. Cuando estas actualizaciones no son verificadas los ciberdelincuentes podrían modificarlas cargando sus propias actualizaciones y distribuyéndolas. ',
        imagen: require('@/assets/curso/tema2/8.jpg'),
      },
      {
        titulo:
          'Fallos en el registro y la supervisión de la seguridad (<i>Security Logging and Monitoring Failures</i>)',
        texto:
          'La falta de registros sobre eventos, los denominados <em>logs</em>, en la aplicación o en el sistema, como inicios de sesión (tanto válidos como fallidos). Por ejemplo, que estos registros no se almacenen remotamente impide que se puedan detectar las infracciones.',
        imagen: require('@/assets/curso/tema2/9.jpg'),
      },
      {
        titulo:
          'Falsificación de solicitud del lado del servidor (<i>Server-side Request Forguery o SSRF</i>)',
        texto:
          'Cuando nuestra aplicación web obtiene un recurso externo y este no valida la URL un ciberdelincuente podría modificarla con fines malintencionados y realizar peticiones no autorizadas.',
        imagen: require('@/assets/curso/tema2/10.jpg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
