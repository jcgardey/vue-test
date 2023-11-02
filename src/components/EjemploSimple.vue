<script setup>
    const nombre = 'John Doe'
</script>

<template>
  <div class="ejemplo">
    <h3>Ejemplo de componente</h3>
    <p>Bienvenido, {{ nombre }}</p>
  </div>  
</template>

<style scoped>
div.ejemplo {
    padding: 5px;
    margin: 10px;
    border: 1px solid grey;
    border-radius: 5px;
}
</style>