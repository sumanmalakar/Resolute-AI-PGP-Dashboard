import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import UploadIcon from '@mui/icons-material/Upload';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import BoltIcon from '@mui/icons-material/Bolt';
import ElectricMeterIcon from '@mui/icons-material/ElectricMeter';
const BoxItems = () => {
  return (
    <div className="boxContent">
      <div className="boxItem">
        <p> 
         Efficiency
        </p>
        <p className='borderBottom'> </p>
        
        <div style={{display:'flex', justifyContent:"space-evenly", alignItems:"center"}}>

<ElectricMeterIcon style={{fontSize:"2rem"}} />
<h2>
  98%
</h2>
</div>
      </div>
      <div className="boxItem">
        <p> 
         Ordered Quantity
        </p>
        <p className='borderBottom'> </p>
        
        <div style={{display:'flex', justifyContent:"space-evenly", alignItems:"center" , marginTop:'0.2rem'}}>
          <div style={{display:'flex', justifyContent:"center", alignItems:"center", flexDirection:"column"}}>

          <UploadIcon /> 
         <AddCircleIcon /> 
          </div>
        <h2> 98%</h2> 
        </div>
      </div>
      <div className="boxItem">
        <p> 
     Remaining Quantity
        </p>
        <p className='borderBottom'> </p>
    
        <div style={{display:'flex', justifyContent:"space-evenly", alignItems:"center" , marginTop:'0.2rem'}}>
          <div style={{display:'flex', justifyContent:"center", alignItems:"center", flexDirection:"column"}}>

          <RemoveCircleIcon /> 
         <FileDownloadIcon /> 
          </div>
        <h2> 98%</h2> 
        </div>
      </div>
      <div className="boxItem">
        <p> 
         Speed (in BPM)
        </p>
        <p className='borderBottom'> </p>
        <div style={{display:'flex', justifyContent:"space-evenly", alignItems:"center"}}>

        <BoltIcon style={{fontSize:"2rem"}} />
        <h2>
          98%
        </h2>
        </div>
      </div>
     
    </div>
  )
}

export default BoxItems