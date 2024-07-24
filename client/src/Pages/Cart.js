// client/src/pages/Cart.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/CartStyles.css';


const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const fetchCart = async () => {
            const res = await axios.get('/api/cart');
            setCartItems(res.data.items);
            setTotal(res.data.total);
        };
        fetchCart();
    }, []);

    return (
        <div className="cart-container">
            <h1 className="cart-header">Shopping Cart</h1>
            <div className="cart-items">
                {cartItems.map(item => (
                    <div key={item.product._id} className="cart-item">
                        <img src={item.product.image} alt={item.product.name} />
                        <div className="cart-item-details">
                            <h3 className="cart-item-name">{item.product.name}</h3>
                            <p className="cart-item-price">${item.product.price}</p>
                            <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-footer">
                <span className="total-price">Total: ${total}</span>
                <button className="checkout-button">Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default Cart;
