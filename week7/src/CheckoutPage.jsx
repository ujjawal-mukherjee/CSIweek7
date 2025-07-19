import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CheckoutPage.css';

const CheckoutPage = ({ cart }) => {
    const [shippingInfo, setShippingInfo] = useState({ address: '', city: '', postalCode: '' });
    const navigate = useNavigate();

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Order confirmed! Total: $${total.toFixed(2)}\nShipping to: ${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.postalCode}`);
        navigate('/products'); // Redirect to products after confirmation
    };

    return (
        <div className="checkout-page">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <div className="shipping-info">
                    <input
                        type="text"
                        placeholder="Address"
                        value={shippingInfo.address}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                        required
                    />
                    <input
                        type="text"
                        placeholder="City"
                        value={shippingInfo.city}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Postal Code"
                        value={shippingInfo.postalCode}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, postalCode: e.target.value })}
                        required
                    />
                </div>
                <div className="order-summary">
                    {cart.map(item => (
                        <div key={item.id} className="order-item">
                            <p>{item.name} x {item.quantity} - ${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    ))}
                    <h3>Total: ${total.toFixed(2)}</h3>
                </div>
                <button type="submit" className="confirm-btn">Confirm Order</button>
            </form>
            <button onClick={() => navigate('/cart')} className="back-btn">Back to Cart</button>
        </div>
    );
};

export default CheckoutPage;