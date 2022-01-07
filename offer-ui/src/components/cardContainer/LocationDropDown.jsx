import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function BasicSelect({city}) {
  const [location, setlocation] = React.useState('');
  const mySet1 = new Set();
  let arr = ["جنين", "غزة", "رام الله", "الخليل","عكا"];
  const handleChange = (event) => {
    setlocation(event.target.value);
  };
  console.log(city.length);
    // console.log(mySet1);
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Location</InputLabel>
        <Select
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