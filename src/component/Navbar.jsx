import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [cursorTimeout, setCursorTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = () => {
      if (cursorTimeout) {
        clearTimeout(cursorTimeout);
      }
      setIsNavbarVisible(true);
      setCursorTimeout(
        setTimeout(() => {
          setIsNavbarVisible(false);
        }, 3000) // Adjust the timeout duration as needed
      );
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorTimeout]);

  return (
    <nav
      className={`main-nav ${isScrolled ? "scrolled" : ""} ${
        isNavbarVisible ? "visible" : "hidden"
      }`}
    >
      {/* Logo Part */}
      <div className="logo">
        <h2>
          <span>M</span>c<span>D</span>onalds
        </h2>
      </div>
      {/* Navbar List */}
      <div
        className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}
      >
        <ul>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/happymeal">Happy Meals</Link>
          </li>
          <li>
            <Link to="/restaurant">Restaurants</Link>
          </li>
          <li>
            <Link to="/mcDelivery">McDelivery</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/birthdayparty">Birthday Party</Link>
          </li>
        </ul>
      </div>
      <div className="hamburger-menu">
        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
          <GiHamburgerMenu />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
