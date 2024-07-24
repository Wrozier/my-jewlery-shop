import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetailStyles.css'; // Ensure this CSS file is created

const ProductDetail = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch product details from API
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`/api/products/${id}`); // Replace with your API endpoint
                setProduct(response.data);
            } catch (err) {
                setError('Failed to load product details');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="error">{error}</p>;
    if (!product) return <p>No product found</p>;

    return (
        <div className="product-detail">
            <h2>{product.name}</h2>
            <div className="product-detail-content">
                <img src={product.imageUrl} alt={product.name} className="product-image" />
                <div className="product-info">
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">${product.price.toFixed(2)}</p>
                    <button className="buy-button">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
