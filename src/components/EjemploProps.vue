<script setup> 
	defineProps(['nombre', 'descripcion']);
</script>	

<template>
	<h2>{{ nombre }}</h2>
	<p>{{ descripcion }}</p>
</template>


