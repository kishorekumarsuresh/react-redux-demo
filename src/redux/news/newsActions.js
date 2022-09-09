import { GET_NEWS, SET_NEWS } from "./newsTypes";

export const getNews = () => {
  return {
    type: GET_NEWS
  }
}

export const setNews = (news) => {
  return {
    type: SET_NEWS,
    payload : news
  }
}
