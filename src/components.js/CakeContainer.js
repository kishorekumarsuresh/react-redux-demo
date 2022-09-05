import React from 'react'
//import { connect } from 'react-redux'
import { connect } from 'react-redux'
// import buyCake from '../redux/cake/cakeActions'
import  { buyCake }   from '../redux/cake/cakeActions'

function CakeContainer(props) {
  return (
    <div>
      <h3>Number of Cakes-{props.numOfCakes}</h3>
      <button onClick={props.buyCake}>Buy</button>
    </div>
  ) 
}

const mapStateToProps = state => {
  return {
    numOfCakes : state.numOfCakes
  }
}
const mapDispatchToProps = dispatch => {
  return{
    buyCake : () => dispatch(buyCake())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
