import React from 'react'

// const titleFlexBoxStyle={
//     display:"flex",
//     justifyContent : "center",
//     alignItems: "center",
//     fontSize: "20px",
//     fontWeight: "600"
// }
const TitleFlexBox = (props) => {
    return(
        <div style={props.style}>
            {props.title}
        </div>
    )
}

export default TitleFlexBox;