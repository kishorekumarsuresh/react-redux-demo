import { BUY_ICE } from "./iceCreamTypes"

const initialState = {
  numofIce : 20,
}

const iceCreamReducer = (state = initialState,action) =>{
  switch(action.type){
    case BUY_ICE : return{
      ...state,
      numofIce : state.numofIce - 1
    }
    default : return state
  }
}
export default iceCreamReducer 