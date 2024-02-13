<template>
    <div class="details" >
        <figure>
            <img :src="posterUrl" :alt='title'>
        </figure>
    </div>
</template>

<script>
import {store} from "../store"

export default {
    name: "DisplayCard",
    props:{
        title: String,
        OGTitle: String,
        vote: Number,
        overview: String,
        poster: String
    },
    data () {
        return {
            store,
            posterUrl: ""
        }
    },
    methods:{
        createPosterUrl(){
            this.posterUrl = store.baseImageUrl+this.poster
        }
    },
    mounted(){
        this.createPosterUrl();
    }
}
</script>

<style lang="scss" scoped>

.details{
    width: calc(100%/8);
    padding: 5px;
    figure{
        &:hover{
        box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.5);
        }
        width: 100%;
        margin: 0;
        img{
            width: 100%;
            aspect-ratio: 2/3;
        }
    }
}

</style>