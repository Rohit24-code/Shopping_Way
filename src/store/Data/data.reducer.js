import { SHOW_PRODUCTS, SHOW_SINGLE_PRODUCTS } from "./data.type";


let initialState = {
  loading: true,
  data: [],
};

const Datareducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PRODUCTS:
      return {...state,loading:false,data:action.payload};


    case SHOW_SINGLE_PRODUCTS:
        return{...state,loading:false,data:[action.payload]}  
    default:
      return state;
  }
};

export default Datareducer;
