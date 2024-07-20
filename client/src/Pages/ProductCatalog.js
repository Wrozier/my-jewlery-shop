// client/src/pages/ProductCatalog.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductCatalog = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get('/api/products');
            setProducts(res.data);
        };
        fetchProducts();
    }, []);

    return (
        <div className="product-catalog">
            <h1>Product Catalog</h1>
            <div className="product-list">
                {products.map(product => (
                    <div key={product._id} className="product-item">
                        <img src={product.imageUrl} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <Link to={`/products/${product._id}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCatalog;
