import {combineReducers} from "redux";
import listReducer from "../components/List/listReducer";


export default combineReducers({
    // auth: authReducer,
    list: listReducer,

},);
