// src/pages/Home.js

import React, { useState, useEffect } from 'react';
import '../styles/HomeStyles.css';

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        'https://via.placeholder.com/1200x400?text=Jewelry+Banner+1',
        'https://via.placeholder.com/1200x400?text=Jewelry+Banner+2',
        'https://via.placeholder.com/1200x400?text=Jewelry+Banner+3',
        'https://via.placeholder.com/1200x400?text=Jewelry+Banner+4'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="home-container">
            <div className="banner">
                <img src={images[currentIndex]} alt="Jewelry Banner" />
            </div>
            <h1 className="home-header">Welcome to My Jewelry Shop</h1>
            <div className="jewelry-cards-container">
                <div className="jewelry-card">
                    <img src="https://via.placeholder.com/300x300?text=Jewelry+1" alt="Jewelry Item 1" />
                    <div className="jewelry-info">
                        <h2>Elegant Necklace</h2>
                        <p>Beautiful and elegant necklace made with high-quality materials. Perfect for any occasion.</p>
                        <div className="rating-comments">
                            <div className="rating">Rating: ★★★★☆</div>
                            <div className="comments">Comments: "I love this necklace!"</div>
                        </div>
                    </div>
                </div>
                <div className="jewelry-card">
                    <img src="https://via.placeholder.com/300x300?text=Jewelry+2" alt="Jewelry Item 2" />
                    <div className="jewelry-info">
                        <h2>Diamond Ring</h2>
                        <p>Exquisite diamond ring with a brilliant shine. Ideal for special moments.</p>
                        <div className="rating-comments">
                            <div className="rating">Rating: ★★★★★</div>
                            <div className="comments">Comments: "Absolutely stunning!"</div>
                        </div>
                    </div>
                </div>
                {/* Add more jewelry cards as needed */}
            </div>
        </div>
    );
};

export default Home;
