import { combineReducers } from "redux";
import FavReducer from "./FavReducer";


export default combineReducers({
    allFavMovie:  FavReducer
})