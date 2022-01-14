import React ,{useEffect,useReducer} from 'react'
import reducer from '../reducer/productReducer'
const initialState = {
   
    products_loading: false,
    products_error: false,
    product: [],
    category:[],
    favProduct:[],

    
    
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
            dispatch({type:"GET_PRODUCT_SUCCESS",payload:data})
            
            }
            catch(erroe)
            { 
                dispatch({type:"GET_PRODUCT_ERROR"})
            }
            
        } 
    //    data.forEach(element => {
           
    //    });
    
        const fetchCategory =
       async () => {
        dispatch({type:"GET_PRODUCT_BIGIN"})
            try{
           
            const response = await fetch("https://apimena.herokuapp.com/api/categories")
            const data= await response.json()
    
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
    //   useEffect(() => {
    //     fetchFav()
    //   },[])
      
        
    
    
    
    
    return (
       <ProductContext.Provider value={{...state,fetchProduct,fetchCategory}}>
            {props.children}
        </ProductContext.Provider>
    )
}
