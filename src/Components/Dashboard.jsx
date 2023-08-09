import React from 'react'
import Navbar from './Navbar'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { useState } from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import Clock from './Clock'
import BoxItems from './BoxItems';
import ButtonSection from './ButtonSection';
import Stack from '@mui/material/Stack';
import './dashboard.css';
import {
  Grid,
  Hidden,
  Typography,

  Box,
  Button,
  Snackbar,
} from '@mui/material';
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const Dashboard = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { itemId } = useParams();

  const [selectedOption, setSelectedOption] = useState('');


  console.log(location)

  return (
    <>
      <Navbar />
      {/* <div>Dashboard</div>

<button onClick={()=>navigate('/dashboard/s10')}> s10</button>
<button onClick={()=>navigate('/dashboard/b4')}> b4</button> */}

<div className="main">

      <div style={{ width: "25%", margin: "16px" }}>
        <span>Select Line</span>


        <FormControl fullWidth style={{ backgroundColor: "blueviolet", color: "white" }}>
          <InputLabel id="dropdown-label" style={{ backgroundColor: "#5486f1", color: "white" }}>
            {location.pathname === '/dashboard/b4' ? 'B4' : 'S10'}
          </InputLabel>
          <Select
            labelId="dropdown-label"
            id="dropdown"
            value={selectedOption}
            // onChange={handleChange}
            style={{ backgroundColor: "#5486f1", color: "white" }}
          >
            <MenuItem value={10} onClick={() => navigate('/dashboard/s10')}>S10</MenuItem>
            <MenuItem value={20} onClick={() => navigate('/dashboard/b4')}>B4</MenuItem>
          </Select>
        </FormControl>
        <div className="container">
          <div className="item">
            <p>
              PO Number
            </p>
            <p>123123</p>
          </div>
          <div className="item">
            <p>
              JOB Number
            </p>
            <p>123123</p>
          </div>
          <div className="item">
            <p>
              JOB Name
            </p>
            <p>Xyzabc</p>
          </div>
        </div>

        <Button
          variant="contained"

          fullWidth
          type="submit"

          style={{ backgroundColor: 'rgb(233, 182, 134)', fontWeight: '700', textTransform: 'none' }}

        >
          Download Report
        </Button>

        <Stack spacing={2} direction="row">
    </Stack>
    <div style={{display:'flex', justifyContent:"space-around", marginTop:"0.4rem"}}>

      <Button variant="contained"  fullWidth style={{marginRight:"0.3rem",backgroundColor:"rgb(81, 180, 35)", textTransform:"none"}}>Add Bottle</Button>
       <Button variant="contained"  fullWidth style={{backgroundColor:"rgb(81, 180, 35)", textTransform:"none"}}>Remove Bottle</Button>
    </div>

      </div>

<div style={{width:"12%"}}>

      <Clock />
</div>


  <div style={{width:"54%"}}>
     <BoxItems />

  </div>

  <div style={{width:"12%"}}>
     <ButtonSection  />

  </div>


      </div>
    </>
  )
}

export default Dashboard