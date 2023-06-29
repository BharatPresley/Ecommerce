import { createStore } from "redux";

import { favReducer } from "./reducers/fav-reducer"


const favStore = createStore(favReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default favStore;

