<script setup>
  const props = defineProps({variant: String, label: String});
</script>

<template>
  <button :class="{primary: variant === 'primary', secondary: variant === 'secondary' }" type="button">{{ label }}</button>
</template>

<style>
  button {
    border: none;
    padding: 8px;
    border-radius: 5px;
  }

  button.primary {
    background-color: rgb(250, 183, 0);
    color: black;
  }

  button.secondary {
    background-color: black;
    color: white
  }
</style>
