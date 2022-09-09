import { SUCCESS_CALL,FAILURE_CALL,CREATE_USER } from "./userTypes";
import axios from "axios";

export const successCall = (users) => {
  return{
    type:SUCCESS_CALL,
    payload : users,
  }
}

export const failureCall = (error) => {
  return{
    type:FAILURE_CALL,
    payload : error,
  }
}

export const createUser = (values) => {
  return{
    type:CREATE_USER,
    payload:values
  }
}

export const displayUsers = () => {
  return (dispatch) => {
    axios.get("https://gorest.co.in/public/v2/users", {
      headers: {
        Authorizaton:
          "Bearer 0d1c0f5711b07c68f9aa845ecc00f75fc02f18e030c9d7e6040903b4968791e6",
      },
     
    })
    .then(response =>{
      const values = response.data
       dispatch(successCall(values))
      // dispatch({
      //   type:SUCCESS_CALL,
      //   payload : values,
      // })
    })
    .catch(err => {
      const errMsg = err.message
      dispatch(failureCall(errMsg))
    })

  }
}

export const newRegister = (obj) => {
  const {name,gender,email} = obj
  return (dispatch) =>{
    dispatch(createUser(obj))
   axios({
    method:'POST',
    url:'https://gorest.co.in/public/v2/users',
    data: {name:name,gender:gender,email:email,status:'active'},
    headers:{
        'Authorization':"Bearer 0d1c0f5711b07c68f9aa845ecc00f75fc02f18e030c9d7e6040903b4968791e6"
    }
   })
   .then(response=>{
    console.log('success')
    dispatch(successCall(response.data))
   })
   .catch(err => {
    console.log('error')
    dispatch(failureCall(err.message))
   })
  }
}

