<template>
    <div class="back">
        <h1 @click="reloadPage">BoolFlix</h1>
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
        reloadPage() {
            window.location.reload();
        },
        createUrl(media){
            return store.apiUrl + `${media}?${store.apiKey}&language=it-IT&query=${store.searchText}`
        },
        searchTitles(){
            store.filmsSearched = []
            store.tvseriesSearched = []
            store.searched = true
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
                store.searched = true
            } else {
                store.searched = false
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
        cursor: pointer;
    }
}
</style>