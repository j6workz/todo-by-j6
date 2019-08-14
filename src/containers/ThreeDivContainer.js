import React from 'react';

const ThreeDivContainer = (props) => {
    return(
        <div className="three-div-container" style={{height:props.height}}>
            {props.children}
        </div>
    )
}

export default ThreeDivContainer;