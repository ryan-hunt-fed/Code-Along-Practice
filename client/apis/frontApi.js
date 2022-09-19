import request from 'superagent'

export function getMoviesApi() {
   return request.get('/api/v1/movies')
   .then(res => {
    // console.log('from front end API', res.body)
    return res.body})
}

