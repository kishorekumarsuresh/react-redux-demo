import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import { displayUsers } from '../redux/users/userActions'

function UserDetails({userData, displayUsers}) {
  useEffect(()=> {
    displayUsers()
    //dispatch(displayUsers())
  }, [])
  return (
    <div>
      <span data-testid="quote">UserDetails</span>
      {console.log('output', userData)}
      { userData.users ?
        userData.users.map((elem,index)=> <h2 key={index}>
         <p>{index+1}. {elem.name ? elem.name : 'Kishorekumar'}</p> 
          </h2>) :

        <div>
        No Data Found 
        </div>
    

      }
      <br></br>
      error - {userData.error}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userData : state.user,
    // err : state.error
  }
}
const mapDispatchToProps = dispatch => {
  return{
    displayUsers : () => dispatch(displayUsers())
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (UserDetails)
