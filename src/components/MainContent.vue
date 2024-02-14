<template>
    <div class="content">
        <h1 v-if="store.filmsSearched.length == 0 && store.tvseriesSearched.length == 0" class="text-center text-danger">Cerca un film o una serie TV</h1>
        <h2 v-if="store.filmsSearched.length != 0">Film</h2>
        <div class="d-flex flex-wrap">
            <DisplayCard v-for="(element, index) in store.filmsSearched"
            :key="index"
            :title = element.title
            :OGTitle = element.original_title
            :vote = element.vote_average
            :overview = element.overview
            :poster = element.poster_path
            :lang = element.original_language
            />
        </div>
        <h2 v-if="store.tvseriesSearched.length != 0">Serie TV</h2>
        <div class="d-flex flex-wrap">
            <DisplayCard v-for="(element, index) in store.tvseriesSearched"
             :key="index"
             :title = element.name
             :OGTitle = element.original_name
             :vote = element.vote_average
             :overview = element.overview
             :poster = element.poster_path
             :lang = element.original_language
            />
        </div>
    </div>

</template>

<script>

import {store} from "../store"
import DisplayCard from "./DisplayCard.vue";

export default {
    name: "MainContent",
    components: {
        DisplayCard,
    },
    data() {
        return {
            store,
        }
    },
    methods:{
        
    }
}
</script>

<style lang="scss" scoped>

div.content{
    padding: 20px;
    height: 90vh;
    overflow: auto;
    background-color: #434343;
    h2{
        margin-block: 20px;
        color: red
    }
}

</style>