import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import goldvault from '../Assets/goldvault.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.png';

const NavBar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to='/' onClick={() => { setMenu("shop") }} className="flex items-center text-white text-lg font-bold">
          <img src={goldvault} alt="goldvault" className="h-8 mr-2" />
          <span>SHOPPER</span>
        </Link>
        <img onClick={dropdown_toggle} className='nav-dropdown cursor-pointer h-8' src={nav_dropdown} alt="menu toggle" />
        <ul ref={menuRef} className="hidden md:flex space-x-4">
          <li onClick={() => { setMenu("shop") }}>
            <Link to='/' className="text-gray-300 hover:text-white">Shop</Link>
            {menu === "shop" ? <hr className="border-t-2 border-white" /> : null}
          </li>
          <li onClick={() => { setMenu("mens") }}>
            <Link to='/mens' className="text-gray-300 hover:text-white">Men</Link>
            {menu === "mens" ? <hr className="border-t-2 border-white" /> : null}
          </li>
          <li onClick={() => { setMenu("womens") }}>
            <Link to='/womens' className="text-gray-300 hover:text-white">Women</Link>
            {menu === "womens" ? <hr className="border-t-2 border-white" /> : null}
          </li>
          <li onClick={() => { setMenu("kids") }}>
            <Link to='/kids' className="text-gray-300 hover:text-white">Kids</Link>
            {menu === "kids" ? <hr className="border-t-2 border-white" /> : null}
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          {localStorage.getItem('auth-token')
            ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace("/"); }} className="text-white">Logout</button>
            : <Link to='/login' className="text-white"><button className="text-white">Login</button></Link>}
          <Link to="/cart" className="relative">
            <img src={cart_icon} alt="cart" className="h-8" />
            <div className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">{getTotalCartItems()}</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
