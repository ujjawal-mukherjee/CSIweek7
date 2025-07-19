import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

const CartPage = ({ cart, setCart }) => {
    const navigate = useNavigate();

    const updateQuantity = (id, change) => {
        setCart(cart.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
        ));
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="cart-page">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <div>
                    {cart.map(item => (
                        <div key={item.id} className="cart-item">
                            <h3>{item.name}</h3>
                            <p>${item.price.toFixed(2)} x {item.quantity}</p>
                            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    ))}
                    <div className="cart-total">
                        <h3>Total: ${total.toFixed(2)}</h3>
                        <button onClick={() => navigate('/checkout')} className="checkout-btn">Proceed to Checkout</button>
                    </div>
                </div>
            )}
            <button onClick={() => navigate('/products')} className="back-btn">Continue Shopping</button>
        </div>
    );
};

export default CartPage;