import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetailsPage.css';

const ProductDetailsPage = ({ cart, setCart }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const foundProduct = {
            id: parseInt(id),
            name: `Product ${id}`,
            price: id * 10.99,
            category: 'Clothing',
            description: 'High-quality product description.',
        };
        setProduct(foundProduct);
    }, [id]);

    const addToCart = (product) => {
        setCart([...cart, { ...product, quantity: 1 }]);
        navigate('/cart');
    };

    if (!product) return <div className="loading">Loading...</div>;

    return (
        <div className="product-details-page">
            <h2>{product.name}</h2>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Description: {product.description}</p>
            <button onClick={() => addToCart(product)} className="add-to-cart">Add to Cart</button>
            <button onClick={() => navigate('/products')} className="back-btn">Back to Products</button>
        </div>
    );
};

export default ProductDetailsPage;