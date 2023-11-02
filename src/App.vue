<script setup>
    import EjemploDirectivas from './components/EjemploDirectivas.vue';
    import EjemploCompuesto from './components/EjemploCompuesto.vue';
    import EjemploReactividad from './components/EjemploReactividad.vue';
    import EjemploModal from './components/EjemploModal.vue';
    import ToDo from './components/ToDo.vue';
    import EjemploProps from './components/EjemploProps.vue';
    import Card from './components/Card.vue';
import Navegacion from './components/Navegacion.vue';
</script>

<template>
  <div class="container">
    <Navegacion />
    <RouterView /> <!-- Muestra el componente que coincida con la ruta del navegador | ver router/index.js -->
  </div>
</template>

<style scoped>
  div.container {
        width: 50%;
        margin: 10px auto;
    }
</style>