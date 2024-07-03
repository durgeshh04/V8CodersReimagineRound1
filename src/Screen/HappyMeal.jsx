import React from "react";
import "./HappyMeal.css";
import Logo from "../assets/happy-meal.png";
import HM1 from "../assets/HM-1.png";
import HM2 from "../assets/HM-2.png";
import HM3 from "../assets/HM-3.png";
import HM4 from "../assets/HM-4.png";
import HM5 from "../assets/HM-5.png";

const HappyMeal = () => {
  return (
    <>
      <div className="happy-meals">
        <div className="container">
          {/*Logo Start*/}
          <div className="logo">
            <img src={Logo} className="HM-logo" />
          </div>

          {/*Logo End*/}

          {/* Description Start */}
          <div className="boxtop">
            <img src={HM1} className="img1" />
            <p>
              Discover your <span>kid's</span> muscial <span>talent.</span>
            </p>
          </div>

          <div className="boxdown">
            <img src={HM2} className="img1" />
            <p>
              <span>Create</span> happy <span>& sweet </span> moments.
            </p>
          </div>

          <div className="boxtop box3">
            <img src={HM3} className="img1" />
            <p>
              <span>Explore our</span> animated books.
            </p>
          </div>

          <div className="boxdown box4">
            <img src={HM4} className="img1" />
            <p>
              Discover our<span>books</span> as they come to life
            </p>
          </div>
          {/* Description Start */}
        </div>
      </div>
    </>
  );
};

export default HappyMeal;
