import React from 'react';
import './SearchBar.css'
function SearchBar(props){
    return(
      <li className="search-bar">
        <input 
        type="search" 
        placeholder="&#x1F50D; Search" 
        className="search"
        onChange={props.searchFilter}
        />
      </li>
      )
}

export default SearchBar;