import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductListingPage from './ProductListingPage';
import ProductDetailsPage from './ProductDetailsPage';
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<ProductListingPage cart={cart} setCart={setCart} />} />
        <Route path="/product/:id" element={<ProductDetailsPage cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
      </Routes>
    </div>
  );
};

export default App;