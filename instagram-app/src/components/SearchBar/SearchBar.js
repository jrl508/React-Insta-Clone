import React from 'react';
import './SearchBar.css'
function SearchBar(props){
    return(
    <div className="nav">
        <ul className="nav-bar">
          <li> <a href='#'><i className="fab fa-instagram icon"></i> | Instagram </a></li>
          <li className="search-bar"><input type="search" placeholder="&#x1F50D; Search" className="search"/></li>
          <li><a href="#"><i className="far fa-compass icon"></i></a></li>
          <li><a href="#"><i className="far fa-heart icon"></i></a></li>
          <li><a href="#"><i className="far fa-user icon"></i></a></li>
        </ul>
    </div>
      )
}

export default SearchBar;