import React,{useEffect,useState} from 'react';
import axios from 'axios';
import SearchI from '../cardContainer/search';
import LocationDrop from '../cardContainer/LocationDropDown';
import Box from '@mui/material/Box';
import BasicSelect from '../header/DropDown.jsx';
import Grid from '@mui/material/Grid';
import CardContainer from '../cardContainer/CardContainer.jsx'
export default function ProductsContainer() {
    const [product,setProduct] = useState([]);
    const [category,setCategory] = useState([]);
    const [location,setLocation] = useState([]);
      
      useEffect(() => {
        async function fetchProduct(){
      
          try{
              const res = await axios.get("https://apimena.herokuapp.com/api/products");
              setProduct(res.data);
              console.log(res)
                    
          }catch(ERROR){
            console.error(ERROR);
          }
              
      }
      fetchProduct();
        
      },[]);
      useEffect(() => {
        async function fetchCategories(){
          try{
              const res = await axios.get("https://apimena.herokuapp.com/api/categories?populate=*");
              setCategory(res.data);
          }catch(ERROR){
            console.error(ERROR);
          }  
          
      }
      fetchCategories();
      },[]);
      console.log(category);
      useEffect(() => {
        async function fetchLocation(){
          try{
              const res = await axios.get("https://apimena.herokuapp.com/api/stores");
              setLocation(res.data);
          }catch(ERROR){
            console.error(ERROR);
          }  
          
      }
      fetchLocation();
      },[]);
      
      console.log(product);
      
      return(
          
        <Box>
        <Grid  container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>    
         <BasicSelect className="dropDown" cate ={category} products={product} />
         <SearchI/>
         <LocationDrop city={location}/>
    
    </Grid>
       </Box>
          );
         
    }