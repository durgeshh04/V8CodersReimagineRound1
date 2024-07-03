// src/McDelivery.jsx
import React, { useState } from 'react';
import './McDelivery.css';
import deliveryImage from '../assets/McDonalds-Logo.png'; // replace with actual path

const products = [
  { id: 1, name: 'Big Mac', price: 5.99 },
  { id: 2, name: 'Fries', price: 2.99 },
  { id: 3, name: 'Chicken Nuggets', price: 4.99 },
  { id: 4, name: 'Coke', price: 1.99 },
  { id: 5, name: 'Milkshake', price: 3.99 },
];

const McDelivery = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [showOrderButton, setShowOrderButton] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
    setShowOrderButton(true);
  };

  return (
    <div className="mcdelivery-container">
      <div className="animated-background"></div>
      <div className="content-container">
        <img src={deliveryImage} alt="Delivery" className="delivery-image" />
        <h1 className="title">McDelivery</h1>
        <p className="subtitle">Fast and hot delivery right to your doorstep!</p>

        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <span>{product.name} - ${product.price.toFixed(2)}</span>
              <button className="add-button" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>

        <div className="cart">
          <h2 className="cart-title">Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
              ))}
            </ul>
          )}
          <div className="total">
            <strong>Total: ${total.toFixed(2)}</strong>
          </div>
        </div>
        {showOrderButton && (
          <button className="order-button animate-order-button">Place Order</button>
        )}
      </div>
    </div>
  );
};

export default McDelivery;
