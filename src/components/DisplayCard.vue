<template>
    <div v-if="this.poster != null" class="singleCard" >
        <figure>
            <img :src="posterUrl" :alt='title'>
        </figure>
        <div class="details">
            <div>
                <strong>Titolo: </strong>
                <span>{{ title }}</span>
            </div>
            <div>
                <strong>Titolo originale: </strong>
                <span>{{ OGTitle }}</span>
            </div>
            <div>
                <strong>Lingua: </strong>
                <img :src="langFlagUrl" :alt="this.lang.toUpperCase()">
            </div>
            <div>
                <strong>Voto: </strong>
                <i v-for="n in this.rateStars" class="fa-solid fa-star"></i>
            </div>
            <div>
                <strong>Descrizione: </strong>
                <span>{{ overview }}</span>
            </div>
        </div>
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
        poster: String,
        lang: String
    },
    data () {
        return {
            store,
            posterUrl: "",
            rateStars: 0,
            langFlagUrl: ""
        }
    },
    methods:{
        createPosterUrl(){
            this.posterUrl = store.baseImageUrl+this.poster
        },
        setStarsRate(){
            this.rateStars = Math.ceil((parseInt(this.vote)/2) + (parseInt(this.vote)%2))
        },
        setLang(){
            let flag = this.lang
            if (flag == "en"){
                flag = "gb"
            }
            if (flag == "ja"){
                flag = "jp"
            }
            this.langFlagUrl = `https://flagcdn.com/16x12/${flag}.png`
        }
    },
    mounted(){
        this.createPosterUrl();
        this.setStarsRate();
        this.setLang();
    }
}
</script>

<style lang="scss" scoped>

.singleCard{
    width: calc((100%/6) - 10px);
    aspect-ratio: 2/3;
    margin: 5px;
    position: relative;
    

    &:hover{
        box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.5);
        figure{
            display: none;
            opacity: 0;
            transition: opacity 0.5s;
        }
    }

    figure{
        width: 100%;
        margin: 0;
        z-index: 55;
        position: absolute;


        img{
            width: 100%;
            aspect-ratio: 2/3;
        }
    }
    .details{
        padding: 15px;
        height: 100%;
        overflow: auto;
        display: flex;
        flex-direction: column;
        gap: 5px;
        color: #ffe9e9;
        *{
            opacity: 0.6;
        }
        .fa-star{
           color: yellow; 
        }
        img{
            width: 25px;
            margin-left: 5px;
        }
        
    }
}

</style>