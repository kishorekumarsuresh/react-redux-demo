import { legacy_createStore as createStore ,applyMiddleware} from "redux";
import rootReducer from "./rootReducer";
//import logger from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
  key : 'cake-count',
  storage,
  blacklist: ['ice'],
  whitelist : ['cake']
}     
const persistedReducer = persistReducer(persistConfig,rootReducer)
const store = createStore(persistedReducer,composeWithDevTools(applyMiddleware(thunk)))
const persistor = persistStore(store)
export default store
export {persistor}
