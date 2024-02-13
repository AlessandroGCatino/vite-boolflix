import { reactive } from "vue"

export const store = reactive({
    searchText: "",
    apiKey: "api_key=8991f207406b248f0dab8cef5cd8890c",
    apiUrl: "https://api.themoviedb.org/3/search/",
    filmsSearched: [],
    tvseriesSearched: []
})