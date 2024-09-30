import React, { useState } from 'react';
import PaymentFormModal from './PaymentModal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleJoinClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('https://images.pexels.com/photos/3126420/pexels-photo-3126420.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-no-repeat">
      <div className="w-full lg:w-2/3 space-y-5">
        <h1 className="text-white font-semibold text-5xl">
          Experience More for Less During Off-Peak Hours
        </h1>
        <p className="text-white text-lg pt-5">
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
