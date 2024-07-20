// client/src/pages/Cart.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')) || []);
    }, []);

    const removeFromCart = (index) => {
        let updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div className="cart-items">
                    {cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={item.imageUrl} alt={item.name} />
                            <div>
                                <h2>{item.name}</h2>
                                <p>Quantity: {item.quantity}</p>
                                <p>Price: ${item.price * item.quantity}</p>
                                <button onClick={() => removeFromCart(index)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-total">
                        <h2>Total: ${total}</h2>
                        <Link to="/checkout">Proceed to Checkout</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
