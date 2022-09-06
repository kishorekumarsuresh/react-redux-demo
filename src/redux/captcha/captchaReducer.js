import { REGENERATE_CAPTCHA,CANCEL_CAPTCHA } from "./captchaTypes";

const initialState = {
  captch : 0
}

const captchaReducer = (state=initialState,action) => {
  switch(action.type){
    case REGENERATE_CAPTCHA: return{
        captch : ( Math.floor(10000 + Math.random() * 9000))
    }
    case CANCEL_CAPTCHA : return{
        captch : ""
    }
    default : return state
  }
}

export default captchaReducer