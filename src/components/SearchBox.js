import React from 'react'
import '../styles/styles.css'

const SearchBox = (props) => {
    const searchFxn = (e) => {
        const keyword = e;
        return keyword.length>=1? props.searchFxn(keyword): props.clearFxn();
    }
    return(
        <div style={{width:"100%"}}>
            <input type="text" className="SearchBox" placeholder="Search" onChange={(e)=>searchFxn(e.target.value)}/>
        </div>
    )
}

export default SearchBox;