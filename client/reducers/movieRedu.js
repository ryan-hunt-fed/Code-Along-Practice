import {SAVE_MOVIES, DEL_MOVIE, UPDATE_MOVIE, ADD_MOVIE}from '../actions/actions'



const initalstate = []

function movieReducer(state = initalstate, action) {
const {type, payload} = action
switch(type) {
    case SAVE_MOVIES:
      return payload

    default:
        return state
}
    


}

export default movieReducer