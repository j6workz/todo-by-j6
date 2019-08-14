import React from 'react';
import '../styles/styles.css';

const whichFxn = (isDone,index,props) => isDone?props.deleteCardFxn(index):props.statusChangeFxn(index);
const whichClass = (isDone) => isDone?"Action-Delete":"TodoCard-Action";
const whichIcon = (isDone) => isDone?<i className="fa fa-trash-o" aria-hidden="true"/>:<i className="fa fa-check" aria-hidden="true" />;

const TodoCard = (props) => {
    return(
        <div className="TodoCard" key={props.index}>
            <div className="TodoCard-Content">
                <div className="TodoCard-Content-Title">{props.title}</div>
                <div className="TodoCard-Content-Body">
                    {props.body}
                </div>
            </div>
            <div className={whichClass(props.isDone)}>
                <button onClick={()=>whichFxn(props.isDone,props.index,props)}>
                    {whichIcon(props.isDone)}
                </button>
            </div>
        </div>
    )
}

export default TodoCard;