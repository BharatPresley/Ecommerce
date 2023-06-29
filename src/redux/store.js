import { createStore } from "redux";
import { cartReducer } from "./reducers/cart-reducer";

const store = createStore(cartReducer);


export default store;