// /opt/build/repo/client/src/components/Navbar.js

import React from 'react';
import './Navbar.css';
import navlogo from '../Assets/logo.png';


const Navbar = () => {
    return (
      <div className='navbar'>
        <img src={navlogo} className='logo' alt="" />
        
      </div>
    );
  };

export default Navbar;
