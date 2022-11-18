import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import Datareducer from "./Data/data.reducer";
import Cartreducer from "./Cart/cart.reducer";

const rootReducer = combineReducers({ data: Datareducer, cart: Cartreducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
