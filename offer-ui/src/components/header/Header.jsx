import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import BasicSelect from '../header/DropDown.jsx';
import SearchI from '../cardContainer/search';
import LocationDrop from '../cardContainer/LocationDropDown';
import React,{useContext} from 'react';
import {ProductContext} from '../../utils/ProductContext';
const useStyles = makeStyles(
  
  {
head: {
    display:'flex',
    justifyContent: "space-between",
    alignItems:'center',
    marginLeft:'20%',
     },
   
offers: {
    color: '#93c7ba',
    fontWeight: 'bolder',
    fontFamily: 'Dancing Script',

}
,navbarStyle :{
    display: 'flex',
    backgroundColor:'white',
    borderBottom: 'solid 1px #93c7ba',
},
});
  export default function Header() {
 const classes = useStyles();  
 const {products_loading,category} = useContext(ProductContext);

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
          <div className={classes.head}>
         <BasicSelect  cate={category}/>
         <SearchI  />
          <LocationDrop  />
          </div>
        </Toolbar>
      </AppBar>  
    </Box>
  ); 
       
}



