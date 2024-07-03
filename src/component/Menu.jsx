import React, { useState, useEffect } from "react";
import "./Menu.css";
import BurgerSlider from "./BurgerSlider";
import {
  burgersData,
  snacksAndDrinksData,
  beveragesData,
  Dessert,
} from "../utils/slides";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("burgers");
  const [selectedItem, setSelectedItem] = useState(null);
  const [animationClass, setAnimationClass] = useState("");

  // Define getCategoryItems function before it's used
  const getCategoryItems = (category) => {
    switch (category) {
      case "burgers":
        return burgersData;
      case "snacksAndDrinks":
        return snacksAndDrinksData;
      case "Dessert":
        return Dessert;
      case "beverages":
        return beveragesData;
      default:
        return [];
    }
  };

  // useEffect for animating burgers on initial render
  useEffect(() => {
    const burgersElements = document.querySelectorAll(".burger");
    burgersElements.forEach((burger, index) => {
      setTimeout(() => {
        burger.style.opacity = "1";
        burger.style.transform = "translateY(0)";
      }, (index + 1) * 500); // Delay each burger's animation by 500ms
    });
  }, []);

  // Handle click on category buttons
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Handle click on individual item
  const handleItemClick = (item) => {
    setAnimationClass(getRandomAnimation());
    setSelectedItem(item);
  };
  // const handleItemClick = (item) => {
  //   setSelectedItem(item); // Set the clicked item as the selected item
  // };

  // Generate slides based on selected category
  const slides = getCategoryItems(selectedCategory).map((item, index) => ({
    id: item.name,
    src: item.image,
    name: item.name,
  }));

  // Function to get a random animation class
  const getRandomAnimation = () => {
    const animations = ["fadeInTop", "fadeInBottom", "fadeInRight"];
    return animations[Math.floor(Math.random() * animations.length)];
  };

  return (
    <>
      <div className="menu">
        <div className="bar">
          <div
            className="category burger img"
            onClick={() => handleCategoryClick("burgers")}
          >
            <img
              src="https://mcdindia.com/wp-content/uploads/2023/01/veg-surprise-burger-1.png"
              alt=""
            />
            <span className="burger span">Burgers</span>
          </div>
          <div
            className="category burger img"
            onClick={() => handleCategoryClick("snacksAndDrinks")}
          >
            <img
              src="https://mcdindia.com/wp-content/uploads/2020/02/3.1-pizza-mcpuff.png"
              alt=""
            />
            <span className="burger span">Snack & Drink</span>
          </div>
          <div
            className="category  burger img"
            onClick={() => handleCategoryClick("beverages")}
          >
            <img
              src="https://mcdindia.com/wp-content/uploads/2020/02/4.1-mcflurry-oreo.png"
              alt=""
            />
            <span className="burger span">Desserts</span>
          </div>
          <div
            className="category  burger img"
            onClick={() => handleCategoryClick("beverages")}
          >
            <img
              src="https://mcdindia.com/wp-content/uploads/2020/03/5.1-coffee-large-1.png"
              alt=""
            />
            <span className="burger span">Beverages</span>
          </div>
        </div>
        <BurgerSlider slides={slides} onItemClick={handleItemClick} />
        {selectedItem && (
          <div className={`burger-details animated ${animationClass}`}>
            <div className="burger-details-content">
              <img src={selectedItem.image} alt={selectedItem.name} />
              <h2>{selectedItem.name}</h2>
              <p>{selectedItem.description}</p>
            </div>
          </div>
        )}
      </div>
      <div className="bglogo"></div>
    </>
  );
};

export default Menu;
