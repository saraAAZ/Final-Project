const productReducer = (state,action) =>
{
   if(action.type === "GET_PRODUCT_ERROR" ){
       return{
           ...state
           ,products_loading: false,
           products_error: true
       }

   }
   if(action.type === "GET_PRODUCT_BIGIN"){
    return{
        ...state
        ,products_loading: true,
        products_error:false
    }
   }
   
   
   if(action.type === "GET_PRODUCT_SUCCESS"){

    return{
        ...state
        ,products_loading:false,
        product:action.payload,

    }

   }
   if(action.type === "GET_category_SUCCESS"){

    return{
        ...state
        ,products_loading:false,
        category:action.payload,

    }

   }
   

}
export default productReducer;