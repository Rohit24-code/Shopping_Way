import { ADD, ADD_CART_ITEMS, DELETE_CART_ITEMS, SHOW_CART_ITEMS, SUB, TOTAL, UPDATE_CART_ITEMS } from "./cart.type";

let initialState={
    loading:true,cart:[],total:0
}

const Cartreducer=(state=initialState,action)=>{
switch (action.type) {
    case ADD_CART_ITEMS:return {
      ...state,
      loading:false,
      cart: [...state.cart,{...action.payload}],
    };
    case DELETE_CART_ITEMS: {
       let nitem= state.cart.filter((e)=>e.id!==action.payload)
       return {...state,loading:false,cart:[...nitem]}
    }
    case ADD:{
     let newqty= state.cart.map((e)=>{
        if(e.id===action.payload){
            return {...e,qty:e.qty+1}
        }
      })
        return { ...state, loading: false, cart: [...newqty] };

    }
    
    case SUB:{
      let newqty = state.cart.map((e) => {
        if (e.id === action.payload) {
          return { ...e, qty:e.qty - 1 };
        }
      });
       return { ...state, loading: false, cart: [...newqty] };
    }

    case TOTAL:{
       let newtotal=state.cart.reduce((acc,curr)=>{
           return acc + (Number(curr.price) * Number(curr.qty));
       },0)
         return { ...state, total:newtotal};
    }
  
    case SHOW_CART_ITEMS:return{
      ...state,cart:action.payload
    }

    default:return state
}
}

export default Cartreducer