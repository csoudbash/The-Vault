import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* UpdateAccount(action) {

    // console.log('hello!', action.payload);
    try {
        axios.put(`/api/account/${action.payload.id}`, action.payload)
            .then(response => {

                put({ type: 'GET_ACCOUNTS' });
                put({ type: 'EDIT_CLEAR' });
                
            })
            .catch(error => {
                console.log('error on PUT: ', error);
            })
    } catch {
        console.log('error! rut ro scoob');
    }

};

function* updateAccountSaga() {
    yield takeLatest('UPDATE_ACCOUNT', UpdateAccount);
}
export default updateAccountSaga;