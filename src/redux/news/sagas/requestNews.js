import axios  from "axios";

export function requestNews() {
  console.log("requestNews ...")
    const response =  axios.request({
      method:'get',
      url: 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f2533222d8d640ba9dd91250cc6bda4f',
    })
    //console.log("requestNews ", response)
    return response;
}