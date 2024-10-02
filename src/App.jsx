import React from "react";

import './App.css'
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dishes from "./components/Dishes";
import About from "./components/About";
import Footer from "./components/Footer";
import img8 from "./assets/img/Pompás Budapest.jpg";
import img10 from "./assets/img/Fausto's.jpg"
import img18 from "./assets/img/Frici Papa.jpg"
import img9 from "./assets/img/Mag Pub.jpg"
import img19 from "./assets/img/Menza Étterem és Kávéház.jpg"
import img1 from "./assets/img/img1.jpg";
import img2 from "./assets/img/img2.jpg";
import img3 from "./assets/img/img3.jpg";
import img4 from "./assets/img/img4.jpg";
import img5 from "./assets/img/img5.jpg";
import img6 from "./assets/img/img6.jpg";
import img11 from "./assets/img/Fausto's.jpg";
import img12 from "./assets/img/KIOSK Budapest .svg"
import img13 from "./assets/img/Trattoria Pomo D’Oro.jpg"
import img14 from "./assets/img/Trofea Grill.jpg"
import img15 from "./assets/img/Café Csiga.jpg"
import img16 from "./assets/img/image.png"
import img17 from "./assets/img/Café Central.jpg"
import img21 from "./assets/img/Gundel Restaurant.svg"
import img22 from "./assets/img/Sushi Sei.jpg"
import img23 from "./assets/img/Szeráj.jpg"
import img24 from "./assets/img/Klub Vittula.jpg"
import img25 from "./assets/img/Black Dog Pub.jpg"
import img27 from "./assets/img/BarCraft Corvin.jpg"
import img26 from "./assets/img/GoSip Bar.jpg"
const images1 = [
  { img: img13, title: "Get 20% off at Trattoria Pomo D’Oro between 2-5 PM, Monday to Thursday.", price: "$10.99", name: "Trattoria Pomo D’Oro", cuisine: "Italian" },
  { img: img17, title: "Buy a main course, get a free appetizer at Café Central before 6 PM", price: "$12.99", name: "Café Central", cuisine: "Hungarian" },
  { img: img12, title: "Flat 25% off drinks at Kiosk Budapest from 3-5 PM", price: "$10.99", cuisine: "Italian", name: "Kiosk Budapest" },
  { img: img23, title: "Tasty Dish Between 11am and 12 noon everyday", price: "$11.99", cuisine: "Turkish", name: "Szeraj" },
  { img: img24, title: "Buy 1 drink, get 1 free Between 3pm and 6pm every weekday", price: "$10.99", name: "Vitulla", cuisine: "American" },
  { img: img6, title: "Get Flat 25% off at Dunacorso Between 9pm and 11pm from Monday - Thursday", price: "$12.99", name: "Dunacorso", cuisine: "Italian" },
];
const images2 = [
  { img: img10, title: "Get Flat 25% off at Fausto's between 11am and 12 noon everyday", price: "$14.99", name: "Fausto's", cuisine: "French" },
  { img: img18, title: "Buy a main course, get a free appetizer/dessert at Frici Papa between 9pm and 11pm from Monday - Thursday", price: "$19.99", name: "Frici Papa", cuisine: "Hungarian" },
  { img: img4, title: "Get Flat 25% off at Spice Hut between 11am and 12 noon everyday", price: "$16.99", name: "Spice Hut", cuisine: "Indian" },
  { img: img27, title: "Buy a main course, get a free appetizer at BarCraft Corvin between 9pm and 11pm from Monday - Thursday", price: "$22.99", name: "BarCraft Corvin", cuisine: "Japanese" },
  // { img: img6, title: "Buy 1 drink, get 1 free at The Red Bar between 3pm and 6pm every weekday", price: "$8.99", name: "The Red Bar", cuisine: "American" },
  { img: img26, title: "Buy 1 drink, get 1 free at GoSip Bar between 3pm and 6pm every weekday", price: "$10.99", name: "GoSip Bar", cuisine: "French" },
];
const images3 = [
  { img: img14, title: "Get Flat 25% off at Trofea Grill between 11am and 12 noon everyday", price: "$14.99", name: "Trofea Grill", cuisine: "Buffet" },
  { img: img19, title: "Buy 1 drink, get 1 free at Menza Étterem és Kávéház between 3pm and 6pm every weekday", price: "$19.99", name: "Menza Étterem és Kávéház", cuisine: "Mexican" },
  { img: img9, title: "Buy 1 drink, get 1 free at Mag Pub between 3pm and 6pm every weekday", price: "$8.99", name: "Mag Pub", cuisine: "American" },
  { img: img1, title: "Buy a main course, get a free appetizer at Sakura Sushi between 9pm and 11pm from Monday - Thursday", price: "$22.99", name: "Sakura Sushi", cuisine: "Japanese" },
  { img: img5, title: "", price: "$10.99", name: "Bistro Bella", cuisine: "French" },
  // { img: img4, title: "Get Flat 25% off at Spice Hut between 11am and 12 noon everyday", price: "$16.99", name: "Spice Hut", cuisine: "Indian" },

];
const images4 = [
  { img: img21, title: "Buy a main course, get a free appetizer at Gundel Restaurant between 9pm and 11pm from Monday - Thursday", price: "$15.99", name: "Gundel Restaurant", cuisine: "Mexican" },
  { img: img4, title: "Buy 1 drink, get 1 free at The Coffee Place between 3pm and 6pm every weekday", price: "$6.99", name: "The Coffee Place", cuisine: "Cafe" },
  { img: img15, title: "Get Flat 25% off at Café Csiga between 11am and 12 noon everyday", price: "$13.99", name: "Café Csiga", cuisine: "Vegan" },
  // { img: img1, title: "Get Flat 25% off at Bella Italia between 11am and 12 noon everyday", price: "$11.99", name: "Bella Italia", cuisine: "Italian" },
  { img: img6, title: "Buy a main course, get a free dessert at The Crab Shack between 9pm and 11pm from Monday - Thursday", price: "$21.99", name: "The Crab Shack", cuisine: "Seafood" },
  { img: img3, title: "Buy 1 drink, get 1 free at Bistro Bella between 3pm and 6pm every weekday", price: "$8.99", name: "Bistro Bella", cuisine: "French" },
];

const images5 = [
  { img: img16, title: "Buy a main course, get a free appetizer at Black Cab Burger between 9pm and 11pm from Monday - Thursdays", price: "$10.99", name: "Black Cab Burger", cuisine: "Vegan" },

  { img: img21, title: "Buy a main course, get a free appetizer at Gundel Restaurant between 9pm and 11pm from Monday - Thursday", price: "$19.99", name: "Gundel Restaurant", cuisine: "Hungarian" },
  { img: img22, title: "Buy 1 drink, get 1 free at Sushi Sei between 3pm and 6pm every weekday", price: "$12.99", name: "Sushi Sei", cuisine: "Japanese" },
  { img: img5, title: "Get Flat 25% off at Spice Route between 11am and 12 noon everyday", price: "$16.99", name: "Spice Route", cuisine: "Indian" },
  // { img: img2, title: "Buy a main course, get a free dessert at Ocean Breeze between 9pm and 11pm from Monday - Thursday", price: "$24.99", name: "Ocean Breeze", cuisine: "Seafood" },
  { img: img25, title: "Buy 1 drink, get 1 free at Black Dog Pub between 3pm and 6pm every weekday", price: "$9.99", name: "Black Dog Pub", cuisine: "Mexican" },
];

const images6 = [
  { img: img4, title: "Get Flat 25% off at Café Delight between 11am and 12 noon everyday", price: "$18.99", name: "Café Delight", cuisine: "Mexican" },
  { img: img3, title: "Buy a main course, get a free appetizer at Sakura Sushi between 9pm and 11pm from Monday - Thursday", price: "$22.99", name: "Sakura Sushi", cuisine: "Japanese" },
  { img: img11, title: "Buy 1 drink, get 1 free at Blue Lagoon between 3pm and 6pm every weekday", price: "$14.99", name: "Blue Lagoon", cuisine: "Caribbean" },
  { img: img8, title: "Get Flat 25% off at Taco Fiesta between 11am and 12 noon everyday", price: "$9.99", name: "Taco Fiesta", cuisine: "Mexican" },
  { img: img2, title: "Buy a main course, get a free dessert at Bella Italia between 9pm and 11pm from Monday - Thursday", price: "$11.99", name: "Bella Italia", cuisine: "Italian" },
  { img: img6, title: "Buy 1 drink, get 1 free at The Red Bar between 3pm and 6pm every weekday", price: "$10.99", name: "The Red Bar", cuisine: "American" },
];
const images7 = [
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
          <Dishes district="District VI (Terézváros)" images={images3} />
        </div>
        <div id="dishes-district4">
          <Dishes district="District VIII (Józsefváros)" images={images4} />
        </div>
        {/* <div id="dishes-district5">
          <Dishes district="District IX (Ferencváros)" images={images5} />
        </div> */}
        {/* <div id="dishes-district6">
          <Dishes district="District XIII (Angyalföld)" images={images6} />
        </div>
        <div id="dishes-district6">
          <Dishes district="District II (Rózsadomb)" images={images4} />
        </div> */}
        <div id="dishes-district6">
          <Dishes district="Other Districts" images={images5} />
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
