import React,{useContext} from 'react';
import CardContainer from '../cardContainer/CardContainer';
import SearchI from '../cardContainer/search';
import LocationDrop from '../cardContainer/LocationDropDown';
import Box from '@mui/material/Box';
import BasicSelect from '../header/DropDown.jsx';
import Grid from '@mui/material/Grid';
import {FilterContext} from '../../utils/filterContext';
import {ProductContext} from '../../utils/ProductContext';



export default function ProductsContainer () {

  const context = useContext(FilterContext)
 
  const {products_loading,category} = useContext(ProductContext);
  
    
    if(products_loading === true)
    {
        return <h1>loading</h1>
    }   
    
      return(
      
        <Box>
        <Grid  container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>    
         <BasicSelect  cate={category}/>
         <SearchI />
          <LocationDrop />
          <CardContainer products={context.filtered_products}/>   
              
    </Grid>
       </Box>
          );
         
    }