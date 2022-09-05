
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { buyIce } from '../redux/iceCream/iceCreamActions'

function IceCreamContainer() {
  const iceCream = useSelector(state => state.ice.numofIce)
  const buy = useDispatch()
  return (
    <div>
      <h5>Ice cream -{iceCream}</h5>
      <button onClick={() => buy(buyIce())}>Buy</button>
    </div>
  )
}

export default IceCreamContainer
