import React ,{useEffect,useReducer ,useState} from 'react'
import reducer from '../reducer/productReducer'
import axios from 'axios'
const initialState = {
   
    products_loading: false,
    products_error: false,
    product: [],
    category:[],
    
    
  }
export const ProductContext = React.createContext();
export function ProductProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const fetchProduct =
       async () => {
        dispatch({type:"GET_PRODUCT_BIGIN"})
            try{
           
            const response = await fetch("https://apimena.herokuapp.com/api/products?populate=*")
            const data= await response.json()
            console.log(data)
            dispatch({type:"GET_PRODUCT_SUCCESS",payload:data})
            }
            catch(erroe)
            { 
                dispatch({type:"GET_PRODUCT_ERROR"})
            }
        } 
       
        const fetchCategory =
       async () => {
        dispatch({type:"GET_PRODUCT_BIGIN"})
            try{
           
            const response = await fetch("https://apimena.herokuapp.com/api/categories")
            const data= await response.json()
            console.log(data)
            dispatch({type:"GET_category_SUCCESS",payload:data})
            }
            catch(erroe)
            { 
                dispatch({type:"GET_PRODUCT_ERROR"})
            }
        } 
       
    
    useEffect(() => {
        fetchProduct()
      },[])
      
      useEffect(() => {
        fetchCategory()
      },[])
      
    
    
    
    
    return (
       <ProductContext.Provider value={{...state,fetchProduct,fetchCategory}}>
            {props.children}
        </ProductContext.Provider>
    )
}
