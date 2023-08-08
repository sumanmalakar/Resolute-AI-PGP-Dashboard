import React from 'react'
import {

    Button,

  } from '@mui/material';

const ButtonSection = () => {
  return (
    <>
    <div className="buttonsection">
        <div className="buttonElement">
        <Button
          variant="contained"

          fullWidth
          type="submit"

          style={{ fontWeight: '700', textTransform: 'none' }}

        >
       28/07/2023
        </Button>
        </div>
        <div className="buttonElement">
        <Button
          variant="contained"

          fullWidth
          type="submit"

          style={{ fontWeight: '700', textTransform: 'none' }}

        >
       15:03
        </Button>
        </div>
        <div className="buttonElement">
        <Button
          variant="contained"

          fullWidth
          type="submit"

          style={{ fontWeight: '700', textTransform: 'none' }}

        >
     Shift
        </Button>
        </div>
        <div className="buttonElement">
        <Button
          variant="contained"

          fullWidth
          type="submit"

          style={{ fontWeight: '700', textTransform: 'none' }}

        >
       Last 15 mins
        </Button>
        </div>
    </div>
    </>
  )
}

export default ButtonSection