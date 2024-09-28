import React from 'react';

const HowItWorks = () => {
    const handleScrollToSubscription = () => {
        const subscriptionSection = document.getElementById('subscription-section');
        if (subscriptionSection) {
            subscriptionSection.scrollIntoView({ behavior: 'smooth' });
        }
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
                                src="https://img.freepik.com/free-photo/sign-up-form-button-graphic-concept_53876-133556.jpg?size=626&ext=jpg"
                                alt="Sign Up"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Step1: Sign Up</h3>
                        <p className="text-gray-600">
                            Get your Offpeak subscription for only €9/month or €99/year (first
                            month free).
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="p-4 rounded-full bg-blue-100 mb-4">
                            <img
                                src="https://www.shutterstock.com/image-vector/best-deal-sale-sticker-template-600nw-2227446359.jpg"
                                alt="Find a Deal"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Step2: Find a Deal</h3>
                        <p className="text-gray-600">
                            Browse exclusive deals & discounts at top restaurants & bars.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="p-4 rounded-full bg-blue-100 mb-4">
                            <img
                                src="https://img.freepik.com/free-photo/top-chefs-signature-dish-highend-culinary-presentation_157027-4318.jpg"
                                alt="Dine & Save"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Step3: Dine & Save</h3>
                        <p className="text-gray-600">
                            Visit during off-peak hours, show proof of membership, and enjoy
                            your special offers.
                        </p>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="mt-6">
                    <button
                        onClick={handleScrollToSubscription}
                        className="bg-blue-500 text-white px-4 py-2 text-sm rounded-lg hover:bg-blue-600 transition"
                    >
                        Get Membership
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
