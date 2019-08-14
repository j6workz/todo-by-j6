import React from 'react';
import './App.css';
import Paper from './containers/Paper';
import ThreeDivContainer from './containers/ThreeDivContainer';
import WindowButtons from './components/WindowButtons';
import TitleFlexBox from './components/TitleFlexBox';
import NavButtonGroup, {NavButton} from './components/NavButtons';
import SearchBox from './components/SearchBox';
import TodoCardDiv from './containers/TodoCardDiv';
import {connect} from 'react-redux';
import store from './store';
import * as actions from './actions'
import NewTodo from './components/NewTodo';
import Loader from './components/Loader';


export function App(props) {
  console.log("props:::", props)
  return (
    <div className="App">
      <Paper>
        <ThreeDivContainer>
          <WindowButtons/>
          <TitleFlexBox style={{color:"white"}}title="ToDo"/>
        </ThreeDivContainer>
        <ThreeDivContainer height={50}>
          <NavButton 
              text="+" 
              onClickFxn={()=>store.dispatch(actions.openModalSaga())} />
          <NavButtonGroup 
            clickFxn={(filter)=>store.dispatch(actions.selectFilterSaga(filter))}
            isActive={props.data.visibility}/>
          <SearchBox 
            clearFxn={()=>store.dispatch(actions.clearSearchSaga())}
            searchFxn={(keyword)=>store.dispatch(actions.searchCardsSaga(keyword))}/>
        </ThreeDivContainer>
        <TodoCardDiv todoList={props.data.todoList} 
          searchEnabled={props.data.searchEnabled}
          deleteCardFxn={(index)=>store.dispatch(actions.deleteTodoSaga(index))}
          filter={props.data.visibility} statusChangeFxn={(index)=>store.dispatch(actions.changeStatusSaga(index))}/>
        <NewTodo 
          isFormOpen={props.data.openModal} 
          saveFxn={(data)=>store.dispatch(actions.saveTodoSaga(data))}
          redBtnFxn={()=>store.dispatch(actions.closeModalSaga())}/>
        <Loader isLoading={props.data.isLoading} />
      </Paper>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data : state
  }
}


export default connect(mapStateToProps)(App);
