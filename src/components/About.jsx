import React, { useState } from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";
import PaymentFormModal from "./PaymentModal";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleJoinClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-col justify-center items-center  lg:px-32 px-5">
      {/* <img src={img} alt="img" /> */}
      <div className=" mb-20">
        <button
          onClick={handleJoinClick}
          className="bg-blue-500 text-white px-4 py-2 text-sm rounded-lg hover:bg-blue-600 transition"
        >
          Get Membership
        </button>
      </div>
      <div className=" space-y-4 lg:pt-14">
        <h1 className="flex flex-1 justify-center font-semibold text-4xl text-center md:text-start">
          About
        </h1>
        <p>
          Offpeak brings the concept of Happy Hour at a large scale across Budapest.

        </p>
        <p>
          Our mission is to make some of the city’s best restaurants and bars more accessible and affordable for locals,
          while also helping these venues optimize their guest flow and enhance their dining experience throughout the day.
        </p>
        {/* <div className=" flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div> */}
      </div>
      {isModalOpen && <PaymentFormModal closeModal={() => setIsModalOpen(false)} />}

    </div>
  );
};

export default About;
