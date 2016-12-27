/**
 * Created by liyang on 16/12/5.
 */
import {combineReducers} from "redux";
import userReducer from "./user";

export default combineReducers({
                                   userStore: userReducer,
                               });