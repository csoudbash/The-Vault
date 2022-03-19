import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteAccount (action) {
    console.log(action.payload);
    try {
        yield axios.delete(`/api/account/${action.payload}`);

        // yield put({type: 'FETCH_SHELF'})
    } catch {
        console.log("error, rut ro scoob", action.payload);
    }
}

function* deleteAccountSaga(){
    yield takeLatest('DELETE_ACCOUNT', deleteAccount);
}
export default deleteAccountSaga;