import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; 
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
     
        <span className="brand-text">Rent Mobil</span>
      </div>
      <ul className="nav-links">
  
      <ul className="nav-links">
       
        <li style={{width: '100px', fontSize: '20px'}}> <Link to={`/login`}>Login</Link></li>
    
      </ul>
 
      </ul>
    </nav>
  );
}

export default Navbar;
