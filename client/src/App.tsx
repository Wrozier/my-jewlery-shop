import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Navbar from './Components/NavBar/Navbar';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import women_banner from './Components/Assets/banner_women.png';
import men_banner from './Components/Assets/banner_mens.png';
import kid_banner from './Components/Assets/banner_kids.png';
import './tailwind.css';

// Import the BackgroundGradientDemo component
import { BackgroundGradientDemo } from './Components/Demos/BackgroundGradientDemo';

export const backend_url = 'http://localhost:4000';
export const currency = '$';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop gender="all" />} />
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      {/* Add the BackgroundGradientDemo component here */}
      <BackgroundGradientDemo />
      <Footer />
    </Router>
  );
}

export default App;
