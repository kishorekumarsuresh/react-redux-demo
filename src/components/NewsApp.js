import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNews } from '../redux/news/newsActions'

function NewsApp() {

  const news = useSelector(state => state.news) 
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getNews())
  },[])
  return (
    <div>
      NewsApp...!
      { news.news ?

        news.news.map((val,ind)=>
          <div key={ind}>
          <h4 > headlines</h4>
          <h1>Title: {(val.author)? val.author: "Kishore"}</h1>
          </div>
        ):
        <>
        <h2>Loading</h2>
        </>
      }
    </div>
  )
}

export default NewsApp
