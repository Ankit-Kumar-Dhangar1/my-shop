import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './pages/header';
import Checkout from './pages/checkout';
import ProductDetails from './pages/product_details';
import Home from './pages/home';
import Footer from './pages/footer';


interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}
const App: React.FC = () => {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product: Product): void {
    throw new Error('Function not implemented.');
  }

  // const addToCart = (product) => {
    // setCartItems([...cartItems, product]);
  // };

  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home addToCart={addToCart} products={[]} />} />

            {/* Product Details Page */}
            <Route path="/product/:id" element={<ProductDetails />} />

            {/* Checkout Page */}
            <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />

            {/* Page Not Found */}
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
