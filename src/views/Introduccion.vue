<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-4(data-aos="fade-right") Le damos la bienvenida al componente formativo denominado <b>Metodologías, normas y estándares de seguridad orientada a aplicaciones <em>web</em>,</b> el cual hace parte del programa de formación técnico en “Seguridad de aplicaciones <em>web</em>”, para lo cual se invita a observar el siguiente video:
    
    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="942" height="530" src="https://www.youtube.com/embed/UFUqpMg9xnk?si=kupc6P6ryn9kxBfC" title="Metodologías, normas y estándares de seguridad orientada a aplicaciones web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Metodologías, normas y estándares de seguridad orientada a aplicaciones web 
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
