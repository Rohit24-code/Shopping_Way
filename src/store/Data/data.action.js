import axios from 'axios'


export const getProduct=(categories)=>(dispatch)=>{
    if(!categories){
 axios.get(`https://fakestoreapi.com/products`).then(
   (res) => dispatch({ type: "SHOW_PRODUCTS", payload: res.data })
 );
    }
    else{
axios
  .get(`https://fakestoreapi.com/products/category/${categories}`)
  .then((res) => dispatch({ type: "SHOW_PRODUCTS", payload: res.data }));
    }
    
}

export const singleApi=(payload)=>(dispatch)=>{
         axios
           .get(`https://fakestoreapi.com/products/${payload}`)
           .then((res) =>
             dispatch({ type: "SHOW_SINGLE_PRODUCTS", payload: res.data })
           );
}