import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getAccounts() {
    
    try{
        console.log('hello');
        const response = yield axios.get('/api/account//get/accounts');
        console.log(response.data);
        yield put ({ type: 'SET_ACCOUNTS', payload: response.data });
    }
    catch{
        console.log('failed');
    }
}

function* getAccountSaga(){
    yield takeLatest('GET_ACCOUNTS', getAccounts)
}
export default getAccountSaga;