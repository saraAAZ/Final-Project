import React,{useContext} from 'react';
import CardContainer from '../cardContainer/CardContainer';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {FilterContext} from '../../utils/filterContext';
import {ProductContext} from '../../utils/ProductContext';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({

});

export default function ProductsContainer () {
  const classes = useStyles(); 
  const context = useContext(FilterContext)
 
  const {products_loading,category} = useContext(ProductContext);
  
    
    if(products_loading === true)
    {
        return <h1>loading</h1>
    }   
    
      return(
      
        <Box className={classes.container}> 
        <Grid  container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>    
      
          <CardContainer 
         
          products={context.filtered_products}  />   
              
    </Grid>
       </Box>
          );
         
    }