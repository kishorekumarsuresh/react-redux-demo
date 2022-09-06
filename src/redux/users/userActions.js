import { SUCCESS_CALL,FAILURE_CALL } from "./userTypes";
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

export const displayUsers = () => {
  return (dispatch) => {
    axios.get('https://newsapi.org/v2/everything?q=tesla&from=2022-08-06&sortBy=publishedAt&apiKey=f2533222d8d640ba9dd91250cc6bda4f')
    .then(response =>{
      const values = response.data.articles
      dispatch(successCall(values))
    })
    .catch(err => {
      const errMsg = err.message
      dispatch(failureCall(errMsg))
    })

  }
}
