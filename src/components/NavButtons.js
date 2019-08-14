import React from 'react';
import '../styles/styles.css';

export const NavButton = (props) => {
    let onn = props.isClicked;
    return(
        <div style={props.styles}>
            <button className={onn?"NavButton active":"NavButton"} onClick={props.onClickFxn}>{props.text}</button>
        </div>
    )
}

const NavButtonGroup = (props) => {

    return(
        <div className="NavButtonGroup">
            <NavButton 
                onClickFxn={()=>props.clickFxn("ALL")}
                isClicked={props.isActive==="ALL"?true:false}
                text={<i className="fa fa-list-ul" aria-hidden="true"></i>}>
            </NavButton>
            <NavButton 
                onClickFxn={()=>props.clickFxn("PENDING")}
                isClicked={props.isActive==="PENDING"?true:false}
                text={<i className="fa fa-spinner" aria-hidden="true"></i>}>
            </NavButton>
            <NavButton 
                onClickFxn={()=>props.clickFxn("COMPLETED")}
                isClicked={props.isActive==="COMPLETED"?true:false}
                text={<i className="fa fa-check-square-o" aria-hidden="true"></i>}>
            </NavButton>
        </div>
    )
}

export default NavButtonGroup;

