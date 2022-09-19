import {getMoviesApi} from '../apis/frontApi'

//variables
export const SAVE_MOVIES = 'SAVE_MOVIES'
export const ADD_MOVIE = 'ADD_MOVIE'
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