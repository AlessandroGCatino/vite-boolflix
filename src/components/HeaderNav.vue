<template>
    <div class="back">
        <h1>BoolFlix</h1>
        <div class="d-flex align-items-center gap-3">
            <input type="text" placeholder="Cosa vuoi guardare?" v-model="store.searchText" @keyup.enter="searchTitles()">
            <button class="btn btn-danger" @click="searchTitles()">Cerca</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {store} from "../store"
export default {
    name: "HeaderNav",
    data(){
        return {
            store,
        }
    },
    methods: {
        createUrl(media){
            return store.apiUrl + `${media}?${store.apiKey}&language=it_IT&query=${store.searchText}`
        },
        searchTitles(){
            store.filmsSearched = []
            store.tvseriesSearched = []
            if(store.searchText != ""){
                let myUrl = this.createUrl("movie")
                axios
                .get(myUrl)
                .then(result => {
                    store.filmsSearched = result.data.results
                })
                myUrl = this.createUrl("tv")
                axios
                .get(myUrl)
                .then(result => {
                    store.tvseriesSearched = result.data.results
                })
            }
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