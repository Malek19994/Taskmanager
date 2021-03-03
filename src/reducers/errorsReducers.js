import { Get_Errors } from "../actions/types";

const initialState = {}

export default function(state=initialState,action){
    switch(action.type){
        case Get_Errors:
            return action.payload;
        
        default:
        return state;
    }
}