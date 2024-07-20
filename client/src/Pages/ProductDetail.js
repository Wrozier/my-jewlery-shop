// client/src/pages/ProductDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await axios.get(`/api/products/${id}`);
            setProduct(res.data);
        };
        fetchProduct();
    }, [id]);

    const addToCart = () => {
        const cartItem = { ...product, quantity };
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Item added to cart');
    };

    if (!product) return <p>Loading...</p>;

    return (
        <div className="product-detail">
            <img src={product.imageUrl} alt={product.name} />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <input 
                type="number" 
                value={quantity} 
                min="1" 
                onChange={(e) => setQuantity(e.target.value)} 
            />
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductDetail;
