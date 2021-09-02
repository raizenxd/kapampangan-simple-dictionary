import React from 'react';

function SearchComponent(){
    const sayHello = (name) => {
        alert("Hello!"+name);
      };
    return(
        <div className="searchBox">
            <input type="text"></input>
            <button onClick={sayHello("df")}>Search</button>
        </div>
    );
}

export default SearchComponent