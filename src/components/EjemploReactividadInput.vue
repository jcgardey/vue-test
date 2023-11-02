<script setup="">
	import {ref} from 'vue';
	const valor= ref('prueba');		
</script>

<template>
	<input type="text" v-model="valor">
	<p style="color: red" v-if="valor.length == 0">Campo vacio</p>
	<p>Ingreso: {{ valor }}</p>
</template>