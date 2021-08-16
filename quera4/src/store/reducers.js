// # Reducer name should be **themeReducer**
import { combineReducers } from "redux";
import { THEME_TYPE } from "../constants";



const create =  (state=THEME_TYPE.LIGHT,action) => {
   
    if(action.type ==='SET_THEME'){
        
            return action.payload
    }

    return state;
};
export const themeReducer  =  combineReducers({
    theme : create
})


