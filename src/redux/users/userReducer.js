import { SUCCESS_CALL,FAILURE_CALL,CREATE_USER} from "./userTypes"

const initialState = {
  users : [],
  error : '',
  values : []
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
    case CREATE_USER: return{
      ...state,
      values : action.payload
  
    }
    default : return state
  }
}
export default userReducer
