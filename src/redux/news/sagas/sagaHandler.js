import {call,put } from 'redux-saga/effects'
import { setNews } from '../newsActions'
import { requestNews } from './requestNews'

export function* sagaHandler(action) {
  try{
    const response = yield call(requestNews)
    console.log('response Successful' ,response.data.articles)
    yield put(setNews(response.data.articles))
    console.log('response set')
  }
  catch (error) {
    console.log('Failed')
    console.log(error)
  }
}
