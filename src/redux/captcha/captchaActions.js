import { REGENERATE_CAPTCHA,CANCEL_CAPTCHA } from "./captchaTypes";

export const regenerateCaptcha = () => {
  return{
    type:REGENERATE_CAPTCHA
  }
}

export const cancelCaptcha = () => {
  return {
    type:CANCEL_CAPTCHA
  }
}