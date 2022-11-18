import { ADD_CART_ITEMS, DELETE_CART_ITEMS, SHOW_CART_ITEMS, UPDATE_CART_ITEMS } from "./cart.type";

let initialState={
    loading:true,cart:[]
}

const Cartreducer=(state=initialState,action)=>{
switch (action.type) {
    case ADD_CART_ITEMS:return{
      ...state,cart:action.payload
    }
    case DELETE_CART_ITEMS:return{
      ...state,cart:action.payload
    }
    case UPDATE_CART_ITEMS:return{
      ...state,cart:action.payload
    }
    case SHOW_CART_ITEMS:return{
      ...state,cart:action.payload
    }

    default:return state
}
}

export default Cartreducer