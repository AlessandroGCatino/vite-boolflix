<template>
    <div class="back">
        <h1>BoolFlix</h1>
        <div class="d-flex align-items-center gap-3">
            <input type="text" placeholder="Cosa vuoi guardare?">
            <button class="btn btn-danger">Cerca</button>
        </div>
    </div>
</template>

<script>
import {store} from "../store"
export default {
    name: "HeaderNav",

    data(){
        return {
            store,
        }
    }
}
</script>

<style lang="scss" scoped>
div.back{
    height: 10vh;
    display: flex;
    justify-content: space-between;
    background-color: #010101;
    padding: 20px;
    h1{
        color: #ea0000;
    }
}
</style>