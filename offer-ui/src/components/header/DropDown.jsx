import   React,{useEffect,useState,useContext}  from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {FilterContext} from '../../utils/filterContext';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  dropdown: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});
export default function BasicSelect({cate}) {
  const classes = useStyles();  
   const context = useContext(FilterContext);
  const [a, setAr] = useState('');
  const [age, setAge] = useState('');
  const handleChange = (event) => {

      setAr(event.target.value);
      console.log(a);
      context.cateFilter(event)
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
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
