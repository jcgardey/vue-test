<script setup>
import { ref } from 'vue';

    const modalVisible = ref(false);

    function mostrarModal() {
        modalVisible.value = true;
    }

    function ocultarModal() {
        modalVisible.value = false;
    }
 
</script>

<template>
    <button v-on:click="mostrarModal">Abrir</button>
    <div class="modal-overlay" :class="{visible: modalVisible}">
        <div class="modal">
            <div class="modal-header">
                <h3>Ejemplo de modal</h3>
                <button v-on:click="ocultarModal" class="cerrar">X</button>
            </div>
            
        </div>
    </div>
</template>

<style scoped>
    button {
        font-size: 1.3em;
        padding: 5px;
        border-radius: 4px;
    }

    div.modal-overlay {
        display: none;
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    div.modal-overlay.visible {
        display: block;
    }

    div.modal {
        position: absolute;
        top: 20%;
        left: 20%;
        width: 700px;
        height: 500px;
        background-color: white;
    }

    div.modal-header {
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
    }

    button.cerrar {
        background-color: white;
        border: none;
        font-weight: bold;
        font-size: 1.5em;
    }

</style>
