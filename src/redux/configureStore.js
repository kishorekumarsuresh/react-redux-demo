import { applyMiddleware, combineReducers, legacy_createStore as createStore ,} from "redux";
import newsReducer from "./news/newsReducer";
import createSagaMiddleware  from "@redux-saga/core";
import { watcherSaga } from "./news/sagas/watcherSaga";

const reducer = combineReducers({
  news : newsReducer
})

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const store = createStore(reducer,applyMiddleware(...middleware))

sagaMiddleware.run(watcherSaga)

export default store