export const openModalSaga = () => {return {type:"OPEN_MODAL_SAGA"}};
export const closeModalSaga = () => {return {type:"CLOSE_MODAL_SAGA"}};
export const saveTodoSaga = (payload) => {return {type:"SAVE_TODO_SAGA", data:payload}}
export const changeStatusSaga = (payload) => {return {type:"CHANGE_STATUS_SAGA", index:payload}}
export const deleteTodoSaga = (payload) => {return {type:"DELETE_TODO_SAGA", index:payload}}
export const selectFilterSaga = (data) => {return {type:"SELECT_FILTER_SAGA", data:data}}
export const searchCardsSaga = (data) => {return {type:"SEARCH_CARDS_SAGA", keyword:data}}
export const clearSearchSaga = () => {return {type:"CLEAR_SEARCH_SAGA"}}