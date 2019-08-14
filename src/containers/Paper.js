import React from 'react';
import '../styles/styles.css';

const Paper = (props) => {
    return(
        <div className="Paper">
            {props.children}
        </div>
    )
}

export default Paper;