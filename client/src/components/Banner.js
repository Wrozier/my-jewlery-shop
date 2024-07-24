import React, { useState, useEffect } from 'react';
import '../styles/BannerStyles.css';

const Banner = () => {
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
        <div className="banner">
            <img src={images[currentIndex]} alt="Jewelry Banner" />
        </div>
    );
};

export default Banner;
