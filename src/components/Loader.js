import React from 'react'
import {CircularProgress,Typography} from '@mui/material'

function Loader() {
  return (
    <div >
      <center>
      <CircularProgress color='success' />
      <Typography variant="h4" > Loading...</Typography>
      </center>
    </div>
  )
}

export default Loader
