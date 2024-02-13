<template>

    <HeaderNav/>
    <MainContent/>


</template>



<script>
    /* API key 8991f207406b248f0dab8cef5cd8890c*/
    import axios from 'axios'
    import { store } from './store'
    import HeaderNav from "./components/HeaderNav.vue"
    import MainContent from "./components/MainContent.vue"
    
    export default {
        components: {
            HeaderNav,
            MainContent
        },
        data() {
            return{
                store,
            }
        }
    }


</script>


<style lang="scss">
@use "./styles/general.scss";


</style>
