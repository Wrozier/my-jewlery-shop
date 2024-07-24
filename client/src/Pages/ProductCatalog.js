import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ProductCatalogStyles.css'; // Ensure this CSS file is created

const ProductCatalog = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch products from API
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products'); // Replace with your API endpoint
                setProducts(response.data);
            } catch (err) {
                setError('Failed to load products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="error">{error}</p>;

    return (
        <div className="product-catalog">
            <h2>Product Catalog</h2>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.imageUrl} alt={product.name} className="product-image" />
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-description">{product.description}</p>
                        <p className="product-price">${product.price.toFixed(2)}</p>
                        <button className="buy-button">Buy Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCatalog;
