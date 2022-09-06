import { SUCCESS_CALL,FAILURE_CALL } from "./userTypes"

const initialState = {
  users : [],
  error : '',
}

const userReducer = (state=initialState,action) => {
  switch(action.type){
    case SUCCESS_CALL : return {
      ...state,
      users : action.payload,
      error : '',
    }
    case FAILURE_CALL : return {
      ...state,
      users : [],
      error : action.payload,
    }
    default : return state
  }
}
export default userReducer