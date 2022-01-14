 

  const filterReducer = (state,action) =>{
    if (action.type === "LOAD_PRODUCTS") {
        let maxPrice = 0
        return {
          ...state,
          all_products: action.payload.data,
          filtered_products:action.payload.data,
          filter: {...state.filter,max_price: maxPrice, price: maxPrice },
        }
      }
      if(action.type=="search_f"){
        let {all_products}  = state;
        let {text, category, store, location, shipping } = state.filter;
        let temProduct = all_products 
        if(action.payload===""){
          temProduct=temProduct
        }
       else
        if(action.payload !== 'all')
        {
         
          temProduct = temProduct.filter(product => 
            {
             return product.attributes.name.includes(action.payload) })
        }
       
        return {...state ,filtered_products:temProduct}
      }

      if(action.type === "locationf")
      {
        let {all_products}  = state;
        let {text, category, store, location, shipping } = state.filter;
        let temProduct = all_products 

        if(action.payload !== 'all')
        {
          temProduct = temProduct.filter(product => product.attributes.store.data.attributes.city === action.payload)
        }
        
        return {...state ,filtered_products:temProduct}
      }
      if(action.type === "catefilter")
      {
        let {all_products}  = state;
        let {text, category, store, location, shipping } = state.filter;
        let temProduct = all_products 
        

        if(action.payload !== 'all')
        {
          temProduct = temProduct.filter(product => product.attributes.category.data.attributes.categoryName === action.payload)
        }
        
        return {...state ,filtered_products:temProduct}
      }
      
      }

  
/**= action.payload.map((p) => p.price)
        maxPrice = Math.max(...maxPrice) */
  export default filterReducer;