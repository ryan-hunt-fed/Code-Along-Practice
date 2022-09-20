import {getMoviesApi, postMovieApi} from '../apis/frontApi'

//variables
export const SAVE_MOVIES = 'SAVE_MOVIES'
export const SAVE_ONE_MOVIE = 'SAVE_ONE_MOVIE'
export const DEL_MOVIE = 'DEL_MOVIE'
export const UPDATE_MOVIE = 'UPDATE_MOVIE'

//get action
export function saveMovies(movies){
    return {
        type:SAVE_MOVIES,
        payload:movies
    }
}

//get thunk
export function fetchMovies(){
    return async (dispatch) => {
        try{
            const movieArr = await getMoviesApi()
            //    console.log('thunk', movieArr)
               dispatch(saveMovies(movieArr))
        }
        catch (err) {
            console.log(err.message)
        }
      
    }
}

// add action
export function saveOneMovie(movieObj){
    return {
        type:SAVE_ONE_MOVIE,
        payload:movieObj
    }
}

//add thunk
export function addAMovie(movie) {
    return async (dispatch) => {
        try{
            const tidyMovie = {
                title: movie.title,
                img: movie.image,
                imdb_id: movie.id,
            } 
            // console.log('tidyMovie', tidyMovie)
           const movieFromServer = await postMovieApi(tidyMovie)
           dispatch(saveOneMovie(movieFromServer))

           
        }
        catch (err) {
            console.log(err.message)
        }
      
    }
}