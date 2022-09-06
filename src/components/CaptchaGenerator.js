import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { regenerateCaptcha,cancelCaptcha } from '../redux/captcha/captchaActions'

function CaptchaGenerator() {
  const captch = useSelector(state => state.cap.captch)
  const regen = useDispatch()
  const cancel = useDispatch()
  return (
    <div>
      <h2>Captcha generator - {captch}</h2>
      <button style={{marginRight:'12px'}} 
      onClick={()=>regen(regenerateCaptcha())}
      >Generate</button>
      <button 
      onClick={()=>cancel(cancelCaptcha())}
      >cancel</button>
      
    </div>
  )
}

export default CaptchaGenerator
