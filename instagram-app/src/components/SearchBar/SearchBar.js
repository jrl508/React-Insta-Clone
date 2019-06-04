import React from 'react';
import './SearchBar.css'
function SearchBar(props){
    return(
    <div className="nav">
        <ul className="nav-bar">
          <li>*camera* | Instagram</li>
          <li className="search-bar"><input type="search" placeholder="Search" className="search"/></li>
          <li>*compass*</li>
          <li>*heart*</li>
          <li>*profile*</li>
        </ul>
    </div>
      )
}

export default SearchBar;