import React from 'react';

function SearchComponent(){
    const inputTextChange = (e) => {
        console.log(e.target.value);
    }
    return(
        <div className="searchBox">
            <input onChange={inputTextChange} type="text"></input>
            <button>Search</button>
        </div>
    );
}

export default SearchComponent