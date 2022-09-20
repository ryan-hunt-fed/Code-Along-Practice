import request from "superagent"
import key from'../../supersecretinfo'

const imdbUrl = 'https://imdb-api.com/en/API/SearchMovie/'


export function searchForMovie(movie) {
    return request.get(imdbUrl + key + '/' + movie)
    .then(res => {
        // console.log('imdb search', res.body.results)
        return res.body.results
})
}