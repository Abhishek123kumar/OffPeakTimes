import React, { useState } from 'react';

const PaymentFormModal = ({ closeModal }) => {
    const [step, setStep] = useState(1); // Step state to manage the current step

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handleBackStep = () => {
        setStep(step - 1);
    };

    const handlePaymentSubmit = (event) => {
        event.preventDefault();
        // Handle payment logic here (API call, etc.)
        // Close the modal after payment processing
        closeModal();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 p-4">
            <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
                    {step === 1 ? 'User Details' : 'Choose Plan'}
                </h2>
                <form onSubmit={handlePaymentSubmit}>
                    {step === 1 && (
                        <>
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            {/* <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div> */}
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="photo">Upload a Photo</label>
                                <input
                                    type="file"
                                    id="photo"
                                    className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    accept="image/*" // Only accept image files
                                    required
                                />
                            </div>
                        </>
                    )}



                    {step === 2 && (
                        <div className="mb-5">
                            <h3 className="mb-4 text-lg font-medium text-blue-800">Select Subscription Plan:</h3>
                            <div className="flex flex-col">
                                <label className="flex items-center mb-3">
                                    <input
                                        type="radio"
                                        name="subscription"
                                        value="monthly"
                                        className="mr-2 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                        required
                                    />
                                    <span className="text-gray-700 border shadow-md p-4 text-sm">
                                        €9 per month (first month free, cancel anytime)
                                    </span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="subscription"
                                        value="yearly"
                                        className="mr-2 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                        required
                                    // defaultChecked
                                    />
                                    <span className="text-gray-700 border shadow-md p-4 text-sm">
                                        €99 per year (cancel within first month for full refund)
                                    </span>
                                </label>
                            </div>
                        </div>
                    )}

                    <div className="flex flex-col sm:flex-row justify-between">
                        {step > 1 && (
                            <button
                                type="button"
                                onClick={handleBackStep}
                                className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition mb-2 sm:mb-0 sm:mr-2"
                            >
                                Back
                            </button>
                        )}
                        {step < 2 ? (
                            <button
                                type="button"
                                onClick={handleNextStep}
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mb-2 sm:mb-0 sm:mr-2"
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mb-2 sm:mb-0 sm:mr-2"
                            >
                                Pay Now
                            </button>
                        )}
                        <button
                            type="button"
                            onClick={closeModal}
                            className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PaymentFormModal;
