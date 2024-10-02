import React, { useState } from 'react';
import img from "../assets/img/best-deal.jpeg";
import PaymentFormModal from './PaymentModal';
import step1Image from '../assets/img/step1.png';


const HowItWorks = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleJoinClick = () => {
        setIsModalOpen(true);
    };

    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">How It Works</h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="p-4 rounded-full bg-blue-100 mb-4">
                            <img
                                src={step1Image}
                                alt="Sign Up"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Step 1: Sign Up</h3>
                        <p className="text-gray-700">
                            Get Offpeak membership<br></br>
                            €9/month or €99/year<br></br>
                            1st month free trial
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="p-4 rounded-full bg-blue-100 mb-4">
                            <img
                                src={img}
                                alt="Find a Deal"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Step 2: Find a Deal</h3>
                        <p className="text-gray-600">
                            Browse exclusive deals & discounts<br></br>
                            at top restaurants & bars.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="p-4 rounded-full bg-blue-100 mb-4">
                            <img
                                src="https://images.pexels.com/photos/5638748/pexels-photo-5638748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="Dine & Save"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Step 3: Dine & Save</h3>
                        <p className="text-gray-600">
                            Visit during off-peak hours <br></br>
                            & enjoy your special offers
                        </p>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="mt-6">
                    <button
                        onClick={handleJoinClick}
                        className="bg-blue-500 text-[1.1rem] text-white px-4 py-2 text-sm rounded-lg hover:bg-blue-600 transition"
                    >
                        Get Membership
                    </button>
                </div>
            </div>
            {isModalOpen && <PaymentFormModal closeModal={() => setIsModalOpen(false)} />}
        </section>
    );
};

export default HowItWorks;
