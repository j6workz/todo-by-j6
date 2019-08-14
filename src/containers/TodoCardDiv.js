import React from 'react';
import '../styles/styles.css';
import TodoCard from '../components/TodoCard';

const todoCardMaker = (key,index,props) => {
    console.log("PROPS FROM CardMaker",props);
    const filter = props.filter;
    const searchOn = props.searchEnabled;
    const isDone = key.isDone;
    const isSearched = key.isSearched;
    const todoCard = <TodoCard key={"ToDoCard"+index} deleteCardFxn={props.deleteCardFxn}
                                title={key.title} index={index} statusChangeFxn={props.statusChangeFxn}
                                body={key.body} isDone={key.isDone} filter={props.filter}/>
    const visibilityFilter = filter==="ALL"?todoCard
                                :filter==="PENDING"
                                        ?isDone===false?todoCard:null
                                :filter==="COMPLETED"
                                        ?isDone===true?todoCard:null
                              :null;
    return searchOn?isSearched?visibilityFilter:null:visibilityFilter;
}

const TodoCardDiv = (props) => {
    return(
        <div className="TodoCardDiv">
            {props.todoList.map((key,index)=>{console.log("PROPS FROM TODOCARD",props);return todoCardMaker(key,index,props);})}
        </div>
    )
}

export default TodoCardDiv;