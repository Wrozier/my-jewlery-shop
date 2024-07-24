import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CheckoutStyles.css'; // Ensure this CSS file is created

const Checkout = ({ cartItems, totalAmount }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        paymentMethod: 'credit',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple validation
        if (!formData.name || !formData.email || !formData.address) {
            setError('Please fill out all required fields');
            return;
        }
        // Simulate a checkout process
        console.log('Processing checkout with:', formData, cartItems, totalAmount);
        // Redirect to a thank you page or order confirmation
        navigate('/thank-you');
    };

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="paymentMethod">Payment Method:</label>
                    <select
                        id="paymentMethod"
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleChange}
                    >
                        <option value="credit">Credit Card</option>
                        <option value="paypal">PayPal</option>
                        <option value="bank">Bank Transfer</option>
                    </select>
                </div>
                <div className="cart-summary">
                    <h3>Cart Summary</h3>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                {item.name} - ${item.price.toFixed(2)} x {item.quantity}
                            </li>
                        ))}
                    </ul>
                    <p className="total-amount">Total: ${totalAmount.toFixed(2)}</p>
                </div>
                <button type="submit" className="checkout-button">Complete Purchase</button>
            </form>
        </div>
    );
};

export default Checkout;

