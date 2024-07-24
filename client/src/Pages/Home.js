import React from 'react';
import Banner from '../components/Banner';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/HomeStyles.css';

const Home = () => {
    const products = [
        {
            image: 'https://via.placeholder.com/300x300?text=Jewelry+1',
            title: 'Elegant Necklace',
            description: 'Beautiful and elegant necklace made with high-quality materials. Perfect for any occasion.',
            rating: '★★★★☆',
            comments: 'I love this necklace!'
        },
        {
            image: 'https://via.placeholder.com/300x300?text=Jewelry+2',
            title: 'Diamond Ring',
            description: 'Exquisite diamond ring with a brilliant shine. Ideal for special moments.',
            rating: '★★★★★',
            comments: 'Absolutely stunning!'
        },
        // Add more products as needed
    ];

    return (
        <div className="home-container">
            <Header />
            <Banner />
            <h1 className="home-header">Welcome to My Jewelry Shop</h1>
            <div className="product-cards-container">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                        rating={product.rating}
                        comments={product.comments}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Home;
