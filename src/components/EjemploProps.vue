<script setup>
    defineProps(['texto'])
</script>
<template>
    <div class="ejemplo">
        <p>{{ texto }}</p>
    </div>
</template>

<style>
    div.ejemplo {
        background-color: rgb(192, 192, 192);
    }
</style>
