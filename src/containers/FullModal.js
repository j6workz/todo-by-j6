import React from 'react';
import '../styles/styles.css';

const FullModal = (props) => {
    return(
        <div className={props.isModalOpen ? "FullModal" : "CloseModal"}>
            {props.children}
        </div>
    )
}

export default FullModal;