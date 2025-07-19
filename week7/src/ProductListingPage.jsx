import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductListingPage.css';

const ProductListingPage = ({ cart, setCart }) => {
    const [products, setProducts] = useState([
        { id: 1, name: 'T-Shirt', price: 19.99, category: 'Clothing' },
        { id: 2, name: 'Jeans', price: 39.99, category: 'Clothing' },
        { id: 3, name: 'Laptop', price: 999.99, category: 'Electronics' },
    ]);
    const [viewType, setViewType] = useState('grid');
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate API call
    }, []);

    const addToCart = (product) => {
        setCart([...cart, { ...product, quantity: 1 }]);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="product-listing-page">
            <div className="header">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-bar"
                />
                <div className="view-toggle">
                    <button onClick={() => setViewType('grid')} className={`view-btn ${viewType === 'grid' ? 'active' : ''}`}>Grid</button>
                    <button onClick={() => setViewType('list')} className={`view-btn ${viewType === 'list' ? 'active' : ''}`}>List</button>
                </div>
            </div>
            <div className={`product-container ${viewType}`}>
                {filteredProducts.map(product => (
                    <div key={product.id} className={`product-card ${viewType}`}>
                        <h3>{product.name}</h3>
                        <p>${product.price.toFixed(2)}</p>
                        <button onClick={() => addToCart(product)} className="add-to-cart">Add to Cart</button>
                        <button onClick={() => navigate(`/product/${product.id}`)} className="view-details">View Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListingPage;