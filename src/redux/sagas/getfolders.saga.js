import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getFolders() {

    try {
        const response = yield axios.get('api/folder');
        console.log('hello');
        // yield put ({ type: 'SET_FOLDERS', payload: response.data });
    }
    catch {
        console.log('failed');
    }
}

function* getFolderSaga() {
    yield takeLatest('GET_FOLDERS', getFolders);
}
export default getFolderSaga;