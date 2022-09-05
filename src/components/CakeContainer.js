import React, { useState } from 'react'
import { connect } from 'react-redux'
import  { buyCake }   from '../redux/cake/cakeActions'

function CakeContainer(props) {
  const [number,setNumber] = useState(1)
  return (
    <div>
      <h3>Number of Cakes-{props.numOfCakes}</h3>
      <input type='text' value={number} onChange={(e)=>setNumber(e.target.value)}/>
      <button onClick={()=>props.buyCake(number)}>Buy {number}</button>
    </div>
  ) 
}

const mapStateToProps = state => {
  return {
    numOfCakes : state.cake.numOfCakes
  }
}
const mapDispatchToProps = dispatch => {
  return{
    buyCake : (number) => dispatch(buyCake(number))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
