<script setup>
  defineProps({value: String, error: Boolean, placeholder: String})
</script>

<template>
    <input type="text" :value="value" :class="{error}" :placeholder="placeholder" />
</template>

<style scoped>
    input[type='text'] {
        height: 2em;
        border-radius: 5px;
        border: 1px solid gray;
        padding: 4px;
    }

    input[type='text'].error {
        border-color: red;
        border-width: 2px;
    }
</style>