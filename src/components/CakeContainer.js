import React, { useState } from 'react'
import { connect } from 'react-redux'
import  { buyCake }   from '../redux/cake/cakeActions'

function CakeContainer({numOf,buyCake}) {
  const [number,setNumber] = useState(1)
  return (
    <div>
      <h3>Number of Cakes-{numOf.numOfCakes}</h3>
      <input type='text' value={number} onChange={(e)=>setNumber(e.target.value)}/>
      <button onClick={()=>buyCake(number)}>Buy {number}</button>
    </div>
  ) 
}

const mapStateToProps = state => {
  return {
    numOf : state.cake
  }
}
const mapDispatchToProps = dispatch => {
  return{
    buyCake : (number) => dispatch(buyCake(number))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
