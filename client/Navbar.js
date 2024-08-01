// /Users/will/Desktop/Full_Stack_Ecommerce 2/client/src/components/Navbar.js

import React from 'react';
import './Navbar.css';
import navlogo from '../Assets/logo.png';
import navprofileIcon from '../Assets/nav-dropdown.png';

const Navbar = () => {
    return (
      <div className='navbar'>
        <img src={navlogo} className='logo' alt="" />
        <img src={navprofileIcon} className='nav-dropdown' alt="" />
      </div>
    );
  };

export default Navbar;
