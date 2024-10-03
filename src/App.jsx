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
import img18 from "./assets/img/Frici Papa.png"
import img9 from "./assets/img/Mag Pub.jpg"
import img19 from "./assets/img/Menza Étterem és Kávéház.jpg"
import img1 from "./assets/img/img1.jpg";
import img2 from "./assets/img/img2.jpg";
import img3 from "./assets/img/img3.jpg";
import img4 from "./assets/img/img4.jpg";
import img5 from "./assets/img/img5.jpg";
import img6 from "./assets/img/img6.jpg";
import img11 from "./assets/img/Fausto's.jpg";
import img12 from "./assets/img/Kiosk.png"
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
import img29 from "./assets/img/Mazel Tov.jpg"
import img28 from "./assets/img/Dunacorso.jpg"
import img30 from "./assets/img/Pörc & Preclik.jpg"
import img31 from "./assets/img/Cafe Vian.jpg"
import img32 from "./assets/img/White Raven Skybar & Lounge.jpg"
import img33 from "./assets/img/indigo.png"
const images1 = [
  { img: img13, title: "Get 20% off at Trattoria Pomo D’Oro between 2-5 PM, Monday to Thursday.", price: "$10.99", name: "Trattoria Pomo D’Oro", cuisine: "Italian" },
  { img: img17, title: "Buy a main course, get a free appetizer at Café Central before 6 PM", price: "$12.99", name: "Café Central", cuisine: "Hungarian" },
  { img: img12, title: "Flat 25% off on Burger Trio at Kiosk Budapest from 3-5 PM", price: "$10.99", cuisine: "Hungarian", name: "Kiosk Budapest" },
  { img: img23, title: "Flat 10% off on Tasty Dishes Between 11am and 12 noon everyday", price: "$11.99", cuisine: "Turkish", name: "Szeraj" },
  { img: img24, title: "Buy 1 drink, get 1 free Between 3pm and 6pm every weekday", price: "$10.99", name: "Vitulla", cuisine: "Bar" },
  { img: img28, title: "Get Flat 25% off at Dunacorso Between 9pm and 11pm from Monday - Thursday", price: "$12.99", name: "Dunacorso", cuisine: "Hungarian" },
];
const images2 = [
  { img: img10, title: "Get Flat 25% off at Fausto's between 11am and 12 noon everyday", price: "$14.99", name: "Fausto's", cuisine: "French" },
  // { img: img18, title: "Buy a main course, get a free appetizer/dessert at Frici Papa between 9pm and 11pm from Monday - Thursday", price: "$19.99", name: "Frici Papa", cuisine: "Hungarian" },
  { img: img29, title: "Get Flat 20% off at Mazel Tov between 11am and 12 noon everyday", price: "$16.99", name: "Mazel Tov", cuisine: "Mediterranean " },
  { img: img27, title: "Buy a main course, get a free appetizer at BarCraft Corvin between 9pm and 11pm from Monday - Thursday", price: "$22.99", name: "BarCraft Corvin", cuisine: "Bar" },
  // { img: img6, title: "Buy 1 drink, get 1 free at The Red Bar between 3pm and 6pm every weekday", price: "$8.99", name: "The Red Bar", cuisine: "American" },
  { img: img26, title: "Buy 1 drink, get 1 free at GoSip Bar between 3pm and 6pm every weekday", price: "$10.99", name: "GoSip Bar", cuisine: "Bar" },
];
const images3 = [
  { img: img14, title: "Get Flat 25% off at Trofea Grill between 11am and 12 noon everyday", price: "$14.99", name: "Trofea Grill", cuisine: "Buffet" },
  { img: img19, title: "Get Flat 15% off at Menza Étterem és Kávéház between 11am and 12 noon every weekday", price: "$19.99", name: "Menza Étterem és Kávéház", cuisine: "Hungarian" },
  { img: img9, title: "Buy 1 drink, get 1 free at Mag Pub between 3pm and 6pm every weekday", price: "$8.99", name: "Mag Pub", cuisine: "Bar" },
  { img: img30, title: "Buy a main course, get a free appetizer at Pörc & Prézli Étterem between 9pm and 11pm from Monday - Thursday", price: "$22.99", name: "Pörc & Prézli Étterem", cuisine: "Hungarian" },
  { img: img31, title: "Flat 30% off on Booking a table every Saturday!", price: "$10.99", name: "Café Vian", cuisine: "Hungarian" },
  // { img: img4, title: "Get Flat 25% off at Spice Hut between 11am and 12 noon everyday", price: "$16.99", name: "Spice Hut", cuisine: "Indian" },

];
const images4 = [
  { img: img18, title: "Buy a main course, get a free appetizer/dessert at Frici Papa between 9pm and 11pm from Monday - Thursday", price: "$19.99", name: "Frici Papa", cuisine: "Hungarian" },
  // { img: img4, title: "Buy 1 drink, get 1 free at The Coffee Place between 3pm and 6pm every weekday", price: "$6.99", name: "The Coffee Place", cuisine: "Cafe" },
  { img: img15, title: "Get Flat 25% off at Café Csiga between 11am and 12 noon everyday", price: "$13.99", name: "Café Csiga", cuisine: "Vegan" },
  // { img: img1, title: "Get Flat 25% off at Bella Italia between 11am and 12 noon everyday", price: "$11.99", name: "Bella Italia", cuisine: "Italian" },
  { img: img17, title: "Buy a main course, get a free appetizer at Café Central before 6 PM", price: "$12.99", name: "Café Central", cuisine: "Hungarian" },
  { img: img32, title: "Buy 1 drink, get 1 free at White Raven between 3pm and 6pm every Friday", price: "$8.99", name: "White Raven", cuisine: "French" },
];

const images5 = [
  { img: img16, title: "Buy a main course, get a free appetizer at Black Cab Burger between 9pm and 11pm from Monday - Thursdays", price: "$10.99", name: "Black Cab Burger", cuisine: "Burgers" },

  { img: img21, title: "Buy a main course, get a free appetizer at Gundel Restaurant between 9pm and 11pm from Monday - Thursday", price: "$19.99", name: "Gundel Restaurant", cuisine: "Hungarian" },
  { img: img22, title: "Get Flat 30% off at Sushi Sei between 11am and 12 noon everyday", price: "$12.99", name: "Sushi Sei", cuisine: "Japanese" },
  { img: img33, title: "Get Flat 25% off at Indigo Indiai Étterem Pest between 11am and 12 noon everyday", price: "$16.99", name: "Indigo Indiai Étterem Pest", cuisine: "Indian" },
  // { img: img2, title: "Buy a main course, get a free dessert at Ocean Breeze between 9pm and 11pm from Monday - Thursday", price: "$24.99", name: "Ocean Breeze", cuisine: "Seafood" },
  { img: img25, title: "Buy 1 drink, get 1 free at Black Dog Pub between 3pm and 6pm every weekday", price: "$9.99", name: "Black Dog Pub", cuisine: "Bar" },
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
        <div className="lg:flex">
          <div id="dishes">
            <Dishes district="District V (Belváros-Lipótváros)" images={images1} />
          </div>
          <div id="dishes-district2">
            <Dishes district="District VII (Erzsébetváros)" images={images2} />
          </div>
        </div>
        <div className="lg:flex">
          <div id="dishes-district3">
            <Dishes district="District VI (Terézváros)" images={images3} />
          </div>
          <div id="dishes-district4">
            <Dishes district="District VIII (Józsefváros)" images={images4} />
          </div>
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
