import axios from 'axios'


export const getProduct=(payload)=>(dispatch)=>{
     axios
       .get("https://fakestoreapi.com/products")
       .then((res) => dispatch({ type: "SHOW_PRODUCTS", payload: res.data }));
}