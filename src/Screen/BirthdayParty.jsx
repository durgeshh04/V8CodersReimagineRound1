import React, { useState } from "react";
import "./BirthdayParty.css";

const BirthdayParty = () => {
  const [orderDetails, setOrderDetails] = useState([]);

  const addToOrder = (item) => {
    setOrderDetails([...orderDetails, item]);
  };

  return (
    <div className="birthday-party-container">
      <div className="order-details">
        <h2>Your Order</h2>
        {orderDetails.length === 0 ? (
          <p>No items added yet.</p>
        ) : (
          <ul>
            {orderDetails.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="birthday-party-content">
        <h1>Celebrate Your Birthday with Us!</h1>
        <p>
          Plan your perfect birthday party at McDonald's! Enjoy fun activities,
          delicious food, and unforgettable moments with your friends and family.
        </p>
        <div className="birthday-options">
          <div className="birthday-option" onClick={() => addToOrder("Happy Meal")}>
            <h3>Happy Meal</h3>
            <p>Includes a toy and a tasty meal for kids.</p>
          </div>
          <div className="birthday-option" onClick={() => addToOrder("Party Package")}>
            <h3>Party Package</h3>
            <p>All-inclusive package with meals, games, and decorations.</p>
          </div>
          <div className="birthday-option" onClick={() => addToOrder("Custom Cake")}>
            <h3>Custom Cake</h3>
            <p>Order a custom cake with your favorite characters.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayParty;
