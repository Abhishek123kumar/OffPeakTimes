import React from "react";

import './App.css'
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dishes from "./components/Dishes";
import About from "./components/About";
import Footer from "./components/Footer";
import img1 from "./assets/img/img1.jpg";
import img2 from "./assets/img/img2.jpg";
import img3 from "./assets/img/img3.jpg";
import img4 from "./assets/img/img4.jpg";
import img5 from "./assets/img/img5.jpg";
import img6 from "./assets/img/img6.jpg";

const images1 = [
  { img: img1, title: "Get 20% off at [Restaurant Name] between 2-5 PM, Monday to Thursday.", price: "$10.99", name: "Kiosk Budapest", cuisine: "Italian" },
  { img: img2, title: "Buy a main course, get a free appetizer at [Bar Name] before 6 PM", price: "$12.99", name: "Kiosk Budapest", cuisine: "Italian" },
  { img: img3, title: "Flat 25% off drinks at [Bar Name] from 3-5 PM", price: "$10.99", cuisine: "Italian", name: "Vudapest" },
  { img: img4, title: "Buy 1 drink, get 1 free Between 3pm and 6pm every weekday", price: "$11.99", name: "Kiosk Budapest" },
  { img: img5, title: "Tasty Dish Between 11am and 12 noon everyday", price: "$10.99", name: "Kiosk Budapest", cuisine: "Italian" },
  { img: img6, title: "Get Flat 25% off at [Restaurant Name] Between 9pm and 11pm from Monday - Thursday", price: "$12.99", name: "Kiosk Budapest", cuisine: "Italian" },
];
const images2 = [
  { img: img2, title: "Get Flat 25% off at Bistro Bella between 11am and 12 noon everyday", price: "$14.99", name: "Bistro Bella", cuisine: "French" },
  { img: img3, title: "Buy a main course, get a free appetizer/dessert at Café Delight between 9pm and 11pm from Monday - Thursday", price: "$19.99", name: "Café Delight", cuisine: "Mexican" },
  { img: img6, title: "Buy 1 drink, get 1 free at The Red Bar between 3pm and 6pm every weekday", price: "$8.99", name: "The Red Bar", cuisine: "American" },
  { img: img4, title: "Get Flat 25% off at Spice Hut between 11am and 12 noon everyday", price: "$16.99", name: "Spice Hut", cuisine: "Indian" },
  { img: img1, title: "Buy a main course, get a free appetizer at Sakura Sushi between 9pm and 11pm from Monday - Thursday", price: "$22.99", name: "Sakura Sushi", cuisine: "Japanese" },
  { img: img5, title: "Buy 1 drink, get 1 free at Bistro Bella between 3pm and 6pm every weekday", price: "$10.99", name: "Bistro Bella", cuisine: "French" },
];
const images4 = [
  { img: img2, title: "Get Flat 25% off at Sunset Grill between 11am and 12 noon everyday", price: "$13.99", name: "Sunset Grill", cuisine: "Steakhouse" },
  { img: img5, title: "Buy a main course, get a free appetizer at Taco Fiesta between 9pm and 11pm from Monday - Thursday", price: "$15.99", name: "Taco Fiesta", cuisine: "Mexican" },
  { img: img4, title: "Buy 1 drink, get 1 free at The Coffee Place between 3pm and 6pm every weekday", price: "$6.99", name: "The Coffee Place", cuisine: "Cafe" },
  { img: img1, title: "Get Flat 25% off at Bella Italia between 11am and 12 noon everyday", price: "$11.99", name: "Bella Italia", cuisine: "Italian" },
  { img: img6, title: "Buy a main course, get a free dessert at The Crab Shack between 9pm and 11pm from Monday - Thursday", price: "$21.99", name: "The Crab Shack", cuisine: "Seafood" },
  { img: img3, title: "Buy 1 drink, get 1 free at Bistro Bella between 3pm and 6pm every weekday", price: "$8.99", name: "Bistro Bella", cuisine: "French" },
];

const images5 = [
  { img: img3, title: "Get Flat 25% off at The Green Leaf between 11am and 12 noon everyday", price: "$10.99", name: "The Green Leaf", cuisine: "Vegan" },
  { img: img6, title: "Buy a main course, get a free appetizer at The Red Bar between 9pm and 11pm from Monday - Thursday", price: "$19.99", name: "The Red Bar", cuisine: "American" },
  { img: img1, title: "Buy 1 drink, get 1 free at Bistro Bella between 3pm and 6pm every weekday", price: "$12.99", name: "Bistro Bella", cuisine: "French" },
  { img: img5, title: "Get Flat 25% off at Spice Route between 11am and 12 noon everyday", price: "$16.99", name: "Spice Route", cuisine: "Indian" },
  { img: img2, title: "Buy a main course, get a free dessert at Ocean Breeze between 9pm and 11pm from Monday - Thursday", price: "$24.99", name: "Ocean Breeze", cuisine: "Seafood" },
  { img: img4, title: "Buy 1 drink, get 1 free at Taco Plaza between 3pm and 6pm every weekday", price: "$9.99", name: "Taco Plaza", cuisine: "Mexican" },
];

const images6 = [
  { img: img4, title: "Get Flat 25% off at Café Delight between 11am and 12 noon everyday", price: "$18.99", name: "Café Delight", cuisine: "Mexican" },
  { img: img3, title: "Buy a main course, get a free appetizer at Sakura Sushi between 9pm and 11pm from Monday - Thursday", price: "$22.99", name: "Sakura Sushi", cuisine: "Japanese" },
  { img: img1, title: "Buy 1 drink, get 1 free at Blue Lagoon between 3pm and 6pm every weekday", price: "$14.99", name: "Blue Lagoon", cuisine: "Caribbean" },
  { img: img5, title: "Get Flat 25% off at Taco Fiesta between 11am and 12 noon everyday", price: "$9.99", name: "Taco Fiesta", cuisine: "Mexican" },
  { img: img2, title: "Buy a main course, get a free dessert at Bella Italia between 9pm and 11pm from Monday - Thursday", price: "$11.99", name: "Bella Italia", cuisine: "Italian" },
  { img: img6, title: "Buy 1 drink, get 1 free at The Red Bar between 3pm and 6pm every weekday", price: "$10.99", name: "The Red Bar", cuisine: "American" },
];
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
          <Dishes district="District V (Belváros-Lipótváros)" images={images1} />
        </div>
        <div id="dishes-district2">
          <Dishes district="District VII (Erzsébetváros)" images={images2} />
        </div>
        <div id="dishes-district3">
          <Dishes district="District VI (Terézváros)" images={images5} />
        </div>
        <div id="dishes-district4">
          <Dishes district="District VIII (Józsefváros)" images={images4} />
        </div>
        <div id="dishes-district5">
          <Dishes district="District IX (Ferencváros)" images={images5} />
        </div>
        <div id="dishes-district6">
          <Dishes district="District XIII (Angyalföld)" images={images6} />
        </div>
        <div id="dishes-district6">
          <Dishes district="District II (Rózsadomb)" images={images4} />
        </div>
        <div id="dishes-district6">
          <Dishes district="Other Districts" images={images2} />
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
