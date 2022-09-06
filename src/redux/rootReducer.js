import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import captchaReducer from "./captcha/captchaReducer";
import userReducer from "./users/userReducer";

const rootReducer = combineReducers({
  cake : cakeReducer,
  ice : iceCreamReducer,
  cap : captchaReducer,
  user : userReducer
})

export default rootReducer