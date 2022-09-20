import request from 'superagent'

export function getMoviesApi() {
   return request.get('/api/v1/movies')
   .then(res => {
    // console.log('from front end API', res.body)
    return res.body
    })
}

export function postMovieApi(movie) {
    return request.post('/api/v1/movies')
    .send(movie)
    .then(res => {
        console.log('Response', res.body)
        return res.body
    })
    
}