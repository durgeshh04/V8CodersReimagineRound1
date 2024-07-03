import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar.jsx";
import HeroSection from "./Screen/HeroSection.jsx";
import HappyMeal from "./Screen/HappyMeal.jsx";
import Restaurant from "./Screen/Restaurant.jsx";
import McDelivery from "./Screen/McDelivery.jsx";
import News from "./Screen/News.jsx";
import BirthdayParty from "./Screen/BirthdayParty.jsx";
// import Menu from "./component/Menu.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/happymeal" element={<HappyMeal />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/mcDelivery" element={<McDelivery />} />
        <Route path="/news" element={<News />} />
        <Route path="/birthdayparty" element={<BirthdayParty />} />
      </Routes>
    </Router>
  );
}

export default App;
