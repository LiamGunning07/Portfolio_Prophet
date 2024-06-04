import React from 'react';
import SearchBar from './SearchBar';
import "../styles/TopNavBar.css";
import "../styles/SignUp.css";
import LogoBrickLight from './icons/LogoBrickLight';
import { Link } from 'react-router-dom';

function TopNavBar ({ setSearchResults, searchValue, setSearchValue}) {

return (
  <div className="top-nav-bar-span">
    <span className="top-nav-bar">
        <div className="top-nav-bar__logo" >
        
        <Link to='/' className='custom-link'><LogoBrickLight/></Link>
        </div>
      
        <div>
          <SearchBar setSearchResults={setSearchResults} searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <div className="top-nav-bar__icons">
          <div><Link to='/signup' className="custom-link"> Logout </Link> </div>
          <div><Link to='/signup' className="custom-link"> Signup </Link> </div>
          <div><Link to='/aboutus' className="custom-link"> About Us </Link> </div>
          <div><Link to='selectedstock' className='custom-link'> Selected </Link> </div>
        </div>

    </span>
  </div>
);
}

export default TopNavBar;