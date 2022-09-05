import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

function CakeContainerUsingHooks() {
  const [num,setNum] = useState(1)
  const cake = useSelector(state => state.cake.numOfCakes)
  const buy = useDispatch()

  return (
    <div>
      <h2> Number of Cakes - {cake} </h2> 
      <input type='text' value={num} onChange={(e)=>setNum(e.target.value)}/>
      <button onClick={()=> buy(buyCake(num))}>Buy {num}</button>
    </div>
  )
}

export default CakeContainerUsingHooks
