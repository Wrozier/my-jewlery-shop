import React from 'react';
import '../styles/HeaderStyles.css';

const Header = () => {
    return (
        <header className="header">
            <h1>My Jewelry Shop</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
