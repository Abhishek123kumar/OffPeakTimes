import React, { useState } from "react";

import DishesCard from "../layouts/DishesCard";

import { useSwipeable } from 'react-swipeable';

const Dishes = ({ district, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div {...handlers} className="min-h-full  flex flex-col justify-center items-center lg:px-32 px-1">
      <h1 className="text-3xl lg:text-4xl font-semibold text-center pt-16 pb-2 lg:pt-24 lg:pb-5">
        {district}
      </h1>

      {/* Carousel */}
      <div className=" w-full max-w-lg lg:max-w-2xl flex justify-center items-center">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className=" left-2 lg:left-0  mr-1 top-1/2 bg-gray-800 text-white p-2 lg:p-4 rounded-full hover:bg-gray-600"
        >
          &#10094;
        </button>

        {/* Carousel Content */}
        <div className="w-full flex justify-center">
          <DishesCard
            img={images[currentIndex].img}
            title={images[currentIndex].title}
            price={images[currentIndex].price}
            name={images[currentIndex].name}
            cuisine={images[currentIndex].cuisine}
          />
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className=" right-2 lg:right-0  top-1/2 ml-1 bg-gray-800 text-white p-2 lg:p-4 rounded-full hover:bg-gray-600"
        >
          &#10095;
        </button>
      </div>

      {/* Dots for navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full cursor-pointer ${currentIndex === index ? "bg-gray-500" : "bg-gray-300"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Dishes;
