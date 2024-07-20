import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const products = [
    { id: 1, name: 'Gold Chains', image: 'path-to-gold-chains.jpg', description: 'Explore our collection of elegant gold chains.' },
    { id: 2, name: 'Diamond Grills', image: 'path-to-diamond-grills.jpg', description: 'Shine bright with our custom diamond grills.' },
    { id: 3, name: 'Pendants', image: 'path-to-pendants.jpg', description: 'Discover beautiful pendants for every occasion.' },
    { id: 4, name: 'Diamond Rings', image: 'path-to-diamond-rings.jpg', description: 'Choose from a variety of stunning diamond rings.' },
    { id: 5, name: 'Pearl Necklaces', image: 'path-to-pearl-necklaces.jpg', description: 'Classic and timeless pearl necklaces.' },
    { id: 6, name: 'Silver Bracelets', image: 'path-to-silver-bracelets.jpg', description: 'Stylish silver bracelets for any outfit.' },
    { id: 7, name: 'Gold Earrings', image: 'path-to-gold-earrings.jpg', description: 'Elegant gold earrings for every style.' },
    { id: 8, name: 'Diamond Studs', image: 'path-to-diamond-studs.jpg', description: 'Brilliant diamond studs for a touch of class.' },
    { id: 9, name: 'Custom Jewelry', image: 'path-to-custom-jewelry.jpg', description: 'Create your own custom jewelry pieces.' },
    { id: 10, name: 'Gemstone Rings', image: 'path-to-gemstone-rings.jpg', description: 'Vibrant gemstone rings for every personality.' },
    { id: 11, name: 'Wedding Bands', image: 'path-to-wedding-bands.jpg', description: 'Beautiful wedding bands to symbolize your love.' },
    { id: 12, name: 'Anklets', image: 'path-to-anklets.jpg', description: 'Delicate anklets to adorn your feet.' },
    { id: 13, name: 'Charm Bracelets', image: 'path-to-charm-bracelets.jpg', description: 'Personalized charm bracelets for every occasion.' },
    { id: 14, name: 'Men\'s Jewelry', image: 'path-to-mens-jewelry.jpg', description: 'Bold and stylish jewelry for men.' },
    { id: 15, name: 'Brooches', image: 'path-to-brooches.jpg', description: 'Elegant brooches to add a touch of sophistication.' },
    { id: 16, name: 'Cufflinks', image: 'path-to-cufflinks.jpg', description: 'Sophisticated cufflinks for the modern gentleman.' }
];

const Home = () => {
    return (
        <div className="home">
            <div className="hero">
                <div className="overlay">
                    <div className="content">
                        <h1>Welcome to Jewelry Shop</h1>
                        <p>Browse our exclusive collection of jewelry items.</p>
                        <Link to="/products" className="shop-now-btn">Shop Now</Link>
                    </div>
                </div>
            </div>
            <div className="products-grid">
                {products.map(product => (
                    <div key={product.id} className="card">
                        <img src={product.image} alt={product.name} />
                        <div className="card-content">
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
