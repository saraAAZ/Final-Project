import React ,{useContext} from 'react'
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import {FilterContext} from '../../utils/filterContext';

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
   
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));


export default function BasicTextFields() {
  const context = useContext(FilterContext);
   const handleChange = (event) => {
      context.searchFilter(event)
   
  };
    return (
    <Box
    style={{ paddingRight: '20%',
    paddingLeft: '20%'
  }}
   
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
          <TextField 
           style={{ 
      border:'solid 1px #93c7ba'
     }} id="outlined-basic" label="Search .." variant="outlined" onChange={handleChange} >
          <SearchIcon/>
          </TextField>
    </Box>
  );
}