import React from 'react';
import '../styles/styles.css';

const WindowButtons = (props) => {
    return(
        <div className="windowButtonDiv">
            <button className="windowButton" style={{backgroundColor:"red"}} onClick={props.redBtnFxn}/>
            <button className="windowButton" style={{backgroundColor:"orange"}}/>
            <button className="windowButton" style={{backgroundColor:"limegreen"}}/>
        </div>
    )
}

export default WindowButtons;