import React from 'react'
import { useState } from 'react';
import {

    Button,

  } from '@mui/material';
  import Menu from '@mui/material/Menu';
  import MenuItem from '@mui/material/MenuItem';
  import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ButtonSection = () => {
  const [selectedDate, setSelectedDate] = useState('');
  
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const [selectedTime, setSelectedTime] = useState('');

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [anchorElM, setAnchorElM] = useState(null);
  const [selectedOptionM, setSelectedOptionM] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickM = (event) => {
    setAnchorElM(event.currentTarget);
  };

  const handleCloseM = () => {
    setAnchorElM(null);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    handleClose();
  };
  const handleOptionSelectM = (option) => {
    setSelectedOptionM(option);
    handleCloseM();
  };

  return (
    <>
    <div className="buttonsection">
        <div className="buttonElement">
        <Button
          variant="contained"

          fullWidth
          type="date"

          style={{ fontWeight: '100', textTransform: 'none' }}

        > 
         {selectedDate || '08-09-2023'}
         <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange} style={{width:"1rem", marginLeft:"0.7rem"}}
      />
        </Button>
        </div>
        <div className="buttonElement">
        <Button
          variant="contained"

          fullWidth
          type="submit"

          style={{ fontWeight: '100', textTransform: 'none' }}

        >
          {selectedTime || '05:15'}
            <input
        type="time"
        value={selectedTime}
        onChange={(e)=>{setSelectedTime(e.target.value)}}
        style={{width:"1.7rem",height:"1rem", marginLeft:"0.7rem"}}
      />
        </Button>
        </div>
        <div className="buttonElement">
        {/* <Button
          variant="contained"

          fullWidth
          type="submit"

          style={{ fontWeight: '100', textTransform: 'none' }}

        >
     Shift
        </Button> */}


<Button
        aria-controls="dropdown-menu"
        aria-haspopup="true"
      
        variant="contained"
        fullWidth
       style = {{textTransform:"none", fontWeight:"100"}}
      >
        {selectedOption ? selectedOption : 'Sift1'} 
        <ArrowDropDownIcon   onClick={handleClick} style={{marginLeft:"3.5rem", textTransform:"none", fontWeight:"700"}} />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        
      >
        <MenuItem
         onClick={() => handleOptionSelect('Sift2')}
         style={{ width:"8rem", }}
        
         >Sift2</MenuItem>
        <MenuItem onClick={() => handleOptionSelect('Sift3')}>Sift3</MenuItem>
        <MenuItem onClick={() => handleOptionSelect('Sift4')}>Sift4</MenuItem>
      </Menu>

        </div>
        <div className="buttonElement">
        
<Button
        aria-controls="dropdown-menu"
        aria-haspopup="true"
      
        variant="contained"
        fullWidth
       style = {{textTransform:"none", fontWeight:"100"}}
      >
        {selectedOptionM ? selectedOptionM : 'Last 15 mins'} 
        <ArrowDropDownIcon   onClick={handleClickM} style={{ textTransform:"none", fontWeight:"700"}} />
      </Button>
      <Menu
        anchorEl={anchorElM}
        open={Boolean(anchorElM)}
        onClose={handleCloseM}
      >
        <MenuItem
         onClick={() => handleOptionSelectM('Last 30 mins')}
        
         >Last 30 mins</MenuItem>
        <MenuItem onClick={() => handleOptionSelectM('Last 45 mins')}>Last 45 mins</MenuItem>
      
      </Menu>


        </div>
    </div>
    </>
  )
}

export default ButtonSection