import React from 'react'
import '../styles/styles.css';
import FullModal from '../containers/FullModal';

// const LoadingStyle = {
//     fontFamily:"Ubuntu",
//     fontSize:"30px"
// }
const Loader = (props) => {
    return(
        <FullModal isModalOpen={props.isLoading}>
            {/* <span style={LoadingStyle}><i>Loading...</i></span> */}
            <div className="Loader-Div">
                <div className="Loader-Dot-yellow"></div>
                <div className="Loader-Dot-blue"></div>
                <div className="Loader-Dot-green"></div>
                <div className="Loader-Dot-red"></div>
            </div>
        </FullModal>
    )
}

export default Loader;