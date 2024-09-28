import React from "react";

import './App.css'
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dishes from "./components/Dishes";
import About from "./components/About";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        {/* Home Section */}
        <div id="home">
          <Home />
        </div>
        <div id="howitworks">
          <HowItWorks />
        </div>
        {/* Dishes Section (If you want to show dishes multiple times, ensure they have unique content) */}
        <div id="dishes">
          <Dishes />
        </div>
        <div id="dishes-district2">
          <Dishes />
        </div>
        <div id="dishes-district3">
          <Dishes />
        </div>
        <div id="dishes-district4">
          <Dishes />
        </div>
        <div id="dishes-district5">
          <Dishes />
        </div>
        <div id="dishes-district6">
          <Dishes />
        </div>

        {/* About Section */}
        <div id="about">
          <About />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
