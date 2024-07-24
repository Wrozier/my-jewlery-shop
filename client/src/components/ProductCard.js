import React from 'react';
import '../styles/ProductCardStyles.css';

const ProductCard = ({ image, title, description, rating, comments }) => {
    return (
        <div className="product-card">
            <img src={image} alt={title} />
            <div className="product-info">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="rating-comments">
                    <div className="rating">Rating: {rating}</div>
                    <div className="comments">Comments: "{comments}"</div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
