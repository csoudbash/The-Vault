import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* postNewFolder (action) {
    console.log(action.payload);
    // console.log('hello');
    try{
        yield axios.post('/api/folder', action.payload)
        yield put ({type: 'GET_FOLDERS'})
    } catch {
        console.log('rut ro scoob');
    }
}

function* sendNewFolder(){
    yield takeLatest('SEND_NEW_FOLDER', postNewFolder);
}
export default sendNewFolder;