import   React,{useState,useContext}  from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {FilterContext} from '../../utils/filterContext';

export default function BasicSelect({cate}) {
 
   const context = useContext(FilterContext);
  const [a, setAr] = useState('');
  const [age] = useState('');
  const handleChange = (event) => {

      setAr(event.target.value);
      context.cateFilter(event)
  };
  return (
    <Box  sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
              style={{ 
                border:'solid 1px #93c7ba'
               }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Category"
          onChange={handleChange}
        >
        <MenuItem  value ="All">All</MenuItem>)
        
        {cate.length !==0  ? cate.data.map(category=>  
            <MenuItem  value ={category.attributes.categoryName} >
            {category.attributes.categoryName} </MenuItem> ):null}
        </Select>
        {

        }   
      </FormControl>
    </Box>
  );
}
