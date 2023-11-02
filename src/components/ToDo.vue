<script setup>
import { ref } from 'vue';

    const items = ref([]);
    
    const newItemName = ref('');

    function crearItem() {
        items.value.push(newItemName.value);
        newItemName.value = '';
    }

</script>

<template> 
        <h1>ToDo Items</h1>
        <form v-on:submit.prevent="crearItem">
            <div class="form-group">
                <label>Nombre</label>
                <input v-model="newItemName" type="text" />
            </div>
            <div class="form-group">
                <input type="submit" value="Confirmar" />
            </div>
        </form>
        <div class="items">
            <div v-for="item in items" class="item">
                <p class="item-nombre">{{ item }}</p>
            </div>
        </div>
 
</template>

<style scoped>
    form {
        margin: 10px;
    }

    label {
        font-size: 1.1em;
        font-weight: bold;
        display: block;
    }

    div.form-group {
        margin: 20px 0;
    }
 
    input[type='text'] {
        font-size: 1.2em;
        width: 100%;
        height: 2em;
        padding: 4px;
        border-radius: 5px;
        border: 1px solid grey;
    }

    input[type='submit'] {
        font-size: 1.2em;
        padding: 5px;
    }

    div.item {
        display: flex;
        margin: 20px 0;
        padding: 10px;
        border-radius: 5px;
        background-color: rgb(221, 221, 221);
        box-shadow: 0 0 5px gray;
    }

    p.item-nombre {
        font-size: 18px;
        font-weight: 700;
    }
</style>