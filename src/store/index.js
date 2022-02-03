import { createStore, combineReducers } from "redux"; //Importacion del Store y Combinacion de Reducers

import CategoryReducer from "./reducers/category.reducer";
import BreadsReducer from "./reducers/breads.reducer";

const RootReducer = combineReducers({
    categories: CategoryReducer,
    breads: BreadsReducer
});

export default createStore(RootReducer);