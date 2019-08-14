import React from 'react';
import '../styles/styles.css';
import ThreeDivContainer from './ThreeDivContainer';
import WindowButtons from '../components/WindowButtons';
import TitleFlexBox from '../components/TitleFlexBox';


const PopOver = (props) => {
    // console.log("popover::", props)
    return(
        <div className="PopOver">
            <ThreeDivContainer>
                <WindowButtons redBtnFxn={props.redBtnFxn}/>
                <TitleFlexBox title="Add New Todo" style={{color:"white"}}/>
            </ThreeDivContainer>
            {props.children}
        </div>
    )
}

export default PopOver;