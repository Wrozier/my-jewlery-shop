// client/src/pages/Checkout.js
import React, { useState } from 'react';
import axios from 'axios';

const Checkout = () => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('creditCard');

    const handleCheckout = async () => {
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const order = { cart, address, paymentMethod, total };
        const res = await axios.post('/api/orders', order);
        if (res.status === 201) {
            localStorage.removeItem('cart');
            alert('Order placed successfully');
        } else {
            alert('Error placing order');
        }
    };

    return (
        <div className="checkout">
            <h1>Checkout</h1>
            <div className="checkout-form">
                <label>
                    Address:
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                </label>
                <label>
                    Payment Method:
                    <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                        <option value="creditCard">Credit Card</option>
                        <option value="paypal">PayPal</option>
                    </select>
                </label>
                <button onClick={handleCheckout}>Place Order</button>
            </div>
        </div>
    );
};

export default Checkout;
