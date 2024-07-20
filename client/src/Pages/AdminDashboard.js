import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import ProductList from '../components/ProductList';
import {
    DashboardContainer,
    Header,
    Section,
    SectionTitle,
    CardDescription,
    CardPrice,
    CardStatus,
    CardTotal,
    CardProducts
} from '../styles/AdminDashboardStyles';

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
        <DashboardContainer>
            <Header>Admin Dashboard</Header>
            <Section>
                <SectionTitle>Products</SectionTitle>
                {products.map(product => (
                    <Card key={product._id} title={product.name}>
                        <CardDescription>{product.description}</CardDescription>
                        <CardPrice>${product.price}</CardPrice>
                    </Card>
                ))}
            </Section>
            <Section>
                <SectionTitle>Orders</SectionTitle>
                {orders.map(order => (
                    <Card key={order._id} title={`Order ${order._id}`}>
                        <CardStatus>Status: {order.status}</CardStatus>
                        <CardTotal>Total: ${order.total}</CardTotal>
                        <CardProducts>Products:</CardProducts>
                        <ProductList products={order.products} />
                    </Card>
                ))}
            </Section>
        </DashboardContainer>
    );
};

export default AdminDashboard;
