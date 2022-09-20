import {SAVE_MOVIES, DEL_MOVIE, UPDATE_MOVIE, SAVE_ONE_MOVIE}from '../actions/actions'



const initalstate = []

function movieReducer(state = initalstate, action) {
const {type, payload} = action
switch(type) {
    case SAVE_MOVIES:
      return payload
      case SAVE_ONE_MOVIE:
        return [payload, ...state]


    default:
        return state
}
    


}

export default movieReducer