import { combineReducers } from "redux";

const FoldersReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FOLDERS': 
            return action.payload;
        default:
            return state;
    }
}
export default combineReducers({
    FoldersReducer,
})