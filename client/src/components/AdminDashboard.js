// client/src/pages/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/AdminDashboardStyles.css';

const AdminDashboard = () => {
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get('/api/products');
            setProducts(res.data);
        };
        const fetchOrders = async () => {
            const res = await axios.get('/api/orders');
            setOrders(res.data);
        };
        fetchProducts();
        fetchOrders();
    }, []);

    return (
        <div className="container">
            <h1 className="title">Admin Dashboard</h1>
            <div className="section">
                <h2>Products</h2>
                {products.map(product => (
                    <div key={product._id} className="product">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
            <div className="section">
                <h2>Orders</h2>
                {orders.map(order => (
                    <div key={order._id} className="order">
                        <h3>Order {order._id}</h3>
                        <p>Status: {order.status}</p>
                        <p>Total: ${order.total}</p>
                        <p>Products:</p>
                        <ul>
                            {order.products.map((item, index) => (
                                <li key={index}>
                                    {item.product.name} - Quantity: {item.quantity}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminDashboard;
