import React,{useContext} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {FilterContext} from '../../utils/filterContext';

export default function BasicSelect({city}) {
  const [location, setlocation] = React.useState('');
  const context = useContext(FilterContext);
  const mySet1 = new Set();
  let arr = ["جنين", "غزة", "رام الله", "الخليل","عكا"];
  const handleChange = (event) => {
   context.locFilter(event);
    
  };
 
   
  return (
    <Box   sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Location</InputLabel>
        <Select
        style={{ 
         border:'solid 1px #93c7ba'
        }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={location}
          label="Location"
          onChange={handleChange}
        >
        {
          arr.length !==0  ? arr.map(loca=>
          <MenuItem  value ={loca} >
           {loca} </MenuItem> ):null}
        
        </Select>
      </FormControl>
    </Box>
  );
}
