import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* postAddedAccount (action) {
    
    console.log(action.payload);
    try{
        yield axios.post('/api/account', action.payload)
        yield put ({type: 'GET_ACCOUNTS'})
    } catch {
        console.log('rut ro scoob');
    }
}

function* sendAddedAccountSaga(){
    yield takeLatest('ADD_ACCOUNT_POST', postAddedAccount);
}
export default sendAddedAccountSaga;