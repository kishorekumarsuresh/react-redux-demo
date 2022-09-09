import { takeLatest ,takeEvery} from 'redux-saga/effects'
import { GET_NEWS } from '../newsTypes'
import { sagaHandler } from './sagaHandler'

export function* watcherSaga() {
  yield takeEvery(GET_NEWS,sagaHandler)
}
