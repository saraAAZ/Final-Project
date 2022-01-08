import React ,{ useState,useContext,useReducer,useEffect} from 'react'
import {ProductContext}  from './ProductContext'
import  reducer from '../reducer/filterReducer'
const initalState = {
    filtered_products:[],
   all_products:[],
   sort:'price-lowest',
   listgrid:true,
   filter:{
       text:'',
       category:'all',
       store:"all",
       location:'all',
       min_price:0,
       max_price:0,
       shipping:true,
       },
   }

export const FilterContext=React.createContext();

export function FilterProvider(props)

{  const {product} = useContext(ProductContext);
  
  
   let [state,dispatch] = useReducer(reducer,initalState)
   useEffect(() => {
     dispatch({type:"LOAD_PRODUCTS",payload:product})
     
   }, [product])

   const cateFilter = (e) =>
   {
       const value = e.target.value;
       dispatch({type:"catefilter",payload:value})
   }
   const locFilter = (e) =>
   {
       const value = e.target.value;
       dispatch({type:"locationf",payload:value})
   }
   const updateSort = (e) =>
   {
    const value = e.target.value;
     dispatch({type:"UPDATE_SORT",payload:value})

   }
   const listGrid = () => {
     dispatch({type:"SET_GRIDVIEW"})
   }
   const listView =() =>{
     dispatch({type:"SET_LISTVIEW"})
   }
   const updatesFilter = (e) =>
   {
     let name = e.target.name;
     let value = e.target.value;
     if(name === 'category'){
        value = e.target.textContent}
     if(name === 'location')
     {
       value = e.target.dataset.location;
     }
     if( name === 'shipping'){
       value = e.target.checked

     }
     dispatch({type :"UPDATE_FILTERS" , payload:{name,value}})
   }
   const ClearFilter =()=>{
     dispatch({type:"CLEAR_FILTERS"})
   }
   
    
    
    

      return (
        <FilterContext.Provider
          value={{
            ...state,
            updatesFilter,
            updateSort,
            listGrid,
            listView,
            ClearFilter,
            cateFilter,
            locFilter
        
                    }}
        >
         {props.children}
        </FilterContext.Provider>
      )
    }
