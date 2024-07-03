import React, { useRef, useState } from "react";
import "./BurgerSlider.css";

const BurgerSlider = ({ slides = [] }) => {
  const [selectedSlide, setSelectedSlide] = useState(null);
  const bottomCardsRef = useRef(null);

  const scrollLeft = () => {
    bottomCardsRef.current.scrollBy({
      left: -bottomCardsRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    bottomCardsRef.current.scrollBy({
      left: bottomCardsRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const handleItemClick = (slide) => {
    setSelectedSlide(slide);
  };

  const generateLorem40 = () => {
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  };

  return (
    <div className="burger-slider">
      {/* Bottom cards section */}
      <div className="bottom-cards-container">
        <button className="scroll-button left" onClick={scrollLeft}>
          ◀
        </button>
        <div className="bottom-cards" ref={bottomCardsRef}>
          {slides.map((slide, index) => (
            <div
              className="bottom-card"
              key={index}
              onClick={() => handleItemClick(slide)}
            >
              <img src={slide.src} alt={slide.name} />
              <h3>{slide.name}</h3>
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>
          ▶
        </button>
      </div>

      {/* Display selected slide details */}
      {selectedSlide && (
        <div className="selected-slide-details">
          <div className="image-container">
            <img src={selectedSlide.src} alt={selectedSlide.name} />
          </div>
          <div className="description-container">
            <h2>{selectedSlide.name}</h2>
            <p>{generateLorem40()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerSlider;
