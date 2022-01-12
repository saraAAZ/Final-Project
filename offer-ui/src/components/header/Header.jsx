import React,{useEffect,useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  co:{
    backgroundColor:'#93c7ba',
},
offers: {
    fontSize:'25px',
    fontFamily: 'Dancing Script',
    color: 'whitesmoke',
    fontWeight: 'bolder',

}
,navbarStyle :{
    display: 'flex',
    justifyContent: 'spaceBetween',
},
});
  export default function Header() {
 const classes = useStyles();  


  return (
    <Box sx={{ flexGrow: 1 }}  >
      <AppBar position="static">
        <Toolbar  className={classes.navbarStyle}>
        
          <Typography
           className={classes.offers} 
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
        OFFRES
          </Typography> 
         
       
        </Toolbar>
      </AppBar>

  
    </Box>
  ); 
       
}



