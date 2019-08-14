import {put, takeLatest, takeEvery, all, call} from 'redux-saga/effects';

const delay = (ms) => new Promise( res => setTimeout(res,ms));

function* openModal(){
    console.log("OPENING MODAL FROM SAGA");
    yield put({type:"OPEN_MODAL"})
    console.log("MODAL OPENED BY SAGA")
}

function* closeModal(){
    console.log("CLOSING MODAL FROM SAGA");
    yield put({type:"CLOSE_MODAL"})
    console.log("MODAL CLOSED BY SAGA")
}

function* clearSearch(){
    yield put({type:"CLEAR_SEARCH"});
}

function* saveTodo(data){
    yield put({type:"SET_LOADER"});
    yield call(delay, 1300);
    yield console.log("SAVETODO", data);
    yield put({type:"SAVE_TODO", data:data});
    yield put({type:"SET_LOADER"});
    yield put({type:"CLOSE_MODAL"})
}

function* changeStatus(data){
    yield console.log("CHANGE_STATUS", data);
    yield put({type:"CHANGE_STATUS", data:data})
}

function* selectFilter(data){
    yield put({type:"SET_LOADER"});
    yield call(delay, 400);
    yield console.log("SELECT_FILTER", data);
    yield put({type:"SELECT_FILTER", data:data});
    yield put({type:"SET_LOADER"});
}

function* searchCards(data){
    // yield put({type:"SET_LOADER"});
    // yield call(delay, 400);
    yield put({type:"SEARCH_CARDS", data:data});
    // yield put({type:"SET_LOADER"});
}

function* deleteTodo(data){
    yield console.log("DELETE_TODO", data);
    yield put({type:"DELETE_TODO", data:data})
}

function* watchSelectFilter(){
    yield takeLatest('SELECT_FILTER_SAGA', selectFilter)
}

function* watchSearchCards(){
    yield takeLatest('SEARCH_CARDS_SAGA', searchCards)
}

function* watchOpenModal(){
    yield takeLatest('OPEN_MODAL_SAGA', openModal)
}

function* watchCloseModal(){
    yield takeLatest('CLOSE_MODAL_SAGA', closeModal)
}

function* watchSaveTodo(data){
    yield takeEvery('SAVE_TODO_SAGA', saveTodo)
}

function* watchClearSearchSaga(){
    yield takeEvery('CLEAR_SEARCH_SAGA', clearSearch)
}

function* watchDeleteTodo(data){
    yield takeEvery('DELETE_TODO_SAGA', deleteTodo)
}

function* watchChangeStatus(data){
    yield takeEvery('CHANGE_STATUS_SAGA', changeStatus)
}

export default function* rootSaga(){
    console.log("RooT Saga")
    yield all([watchOpenModal(), watchClearSearchSaga(), watchSearchCards(), watchCloseModal(), watchSaveTodo(), watchChangeStatus(), watchDeleteTodo(), watchSelectFilter()])
}