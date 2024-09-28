import React, { useState } from 'react';
import PaymentFormModal from './PaymentModal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleJoinClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat">
      <div className="w-full lg:w-2/3 space-y-5">
        <h1 className="text-backgroundColor font-semibold text-5xl">
          Experience More for Less During Off-Peak Hours
        </h1>
        <p className="text-backgroundColor">
          Unlock exclusive deals and discounts at top restaurants and bars in Budapest.
        </p>
        <div className="lg:pl-44">
          <button
            onClick={handleJoinClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Get Membership
          </button>
        </div>
      </div>

      {/* Modal for Payment */}
      {isModalOpen && <PaymentFormModal closeModal={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Home;
