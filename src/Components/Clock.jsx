import React from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const Clock = () => {
  return (
    <div className='timer'>
        <div className='timer1'>
        <div style={{display:'flex', justifyContent:"center", alignItems:"center"}}>
          <AccessAlarmIcon style = {{fontSize:"1.4rem"}} /> 
       <p>
        Start time
        </p> 
        </div>
        <p>09:00:00</p>
        </div>
        <div className='timer2'>
        <div style={{display:'flex', justifyContent:"center", alignItems:"center"}}>
           <AccessAlarmIcon />
        <p>
           End time</p>
        </div>   
        <p>09:00:00</p>
          </div>
    </div>
  )
}

export default Clock