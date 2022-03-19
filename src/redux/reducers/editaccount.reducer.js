import { combineReducers } from "redux";


const editAccountsReducer = (state  = {}, action) => {
    if(action.type === 'SET_EDIT_ACCOUNT'){
        return action.payload;
    }
    if (action.type === 'EDIT_ACCOUNT_ONCHANGE') {
        return{
            ...state,
            [action.payload.property] : action.payload.value // action.payload.property becomes a key of the object.
        }
    }
    if(action.type === 'EDIT_ACCOUNT_CLEAR') {
        return {};
    }
    return state;
}

export default combineReducers({
    editAccountsReducer,
})