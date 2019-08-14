import React,{useState} from 'react';
import '../styles/styles.css';
import FullModal from '../containers/FullModal';
import PopOver from '../containers/PopOver';

const NewTodo = (props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const clear = () => {setContent(''); setTitle(''); return true;};
    return props.newTodo ? null:
    (
        <FullModal isModalOpen={props.isFormOpen}>
            <PopOver redBtnFxn={props.redBtnFxn}>
                <form className="addTodoForm" onSubmit={(e)=>e.preventDefault()}>
                    <input type="text" 
                        onChange={(e)=>setTitle(e.target.value)}
                        value={title}
                        className="addTodoForm-title-input" placeholder="Title"/>
                    <textarea className="addTodoForm-body-textarea" 
                        onChange={(e)=>setContent(e.target.value)}
                        value={content}
                        placeholder="Enter your note here"/>
                    <div className="formButtonsDiv">
                        <button onClick={props.redBtnFxn}>
                                <i className="fa fa-times" aria-hidden="true"></i>
                        </button>
                        <button onClick={title.length>=1?()=>{clear();return props.saveFxn({title,content});}:null}>
                            <i className="fa fa-check" aria-hidden="true"></i>
                        </button>
                    </div>
                </form>
            </PopOver>
        </FullModal>
    )
}

export default NewTodo;