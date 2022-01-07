import   React,{useEffect,useState}  from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CardContainer from '../../components/cardContainer/CardContainer.jsx'

export default function BasicSelect({cate, products}) {
    const [a, setAr] = useState('');
  const [age, setAge] = useState('');


  console.log({products});
//   const [arr, setArrr] =React.useState('');
  const handleChange = (event) => {
    //   setAge(event.target.value);
      setAr(event.target.value);
      console.log(a);
    //   cate.data.map(item=>item.attributes.categoryName === event.target.value ?
    //      setArrr(cate.data):console.log("false") );
    // setArrr(" Sa");
    //   console.log(arr);
    //   return<CardContainer products={arr}/>
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
