import React, { useEffect } from 'react';
import './Restaurant.css';
import bikeImage from '../assets/bike.png';

const Restaurant = () => {
  useEffect(() => {
    const bike = document.getElementById('bike');

    // Add the class to start the bike animation
    bike.classList.add('move-bike');

    // Add the class to show the content after the bike animation is complete
    const showContent = () => {
      const content = document.getElementById('content');
      content.classList.add('show-content');
    };

    // Wait for the bike animation to finish before showing the content
    setTimeout(showContent, 3000); // 3 seconds duration of the bike animation
  }, []);

  return (
    <section className="hero">
      <div className="bike-container">
        <img src={bikeImage} alt="Bike" className="bike" id="bike" />
      </div>
      <div className="hero-content" id="content">
        <h1 className="hero-title">Welcome to McDonald's</h1>
        <p className="hero-subtitle">Enjoy our delicious meals!</p>
        <div className="search-container">
          <input type="text" className="search-box" placeholder="Search for restaurants..." />
          <button className="search-button">Search</button>
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
