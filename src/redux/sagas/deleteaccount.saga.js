import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteAccount (action) {
    console.log(action.payload);
    try {
        yield axios.delete(`/api/account/${action.payload}`);
        put({ type: 'GET_ACCOUNTS' });
       
    } catch {
        console.log("error, rut ro scoob", action.payload);
    }
}

function* deleteAccountSaga(){
    yield takeLatest('DELETE_ACCOUNT', deleteAccount);
}
export default deleteAccountSaga;