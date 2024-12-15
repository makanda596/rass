import React, { useState, useEffect } from "react";
import { images } from "../assets/data";

const HeroSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showForm, setShowForm] = useState(false); // State to toggle the booking form

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, []);

    const handleButtonClick = () => {
        setShowForm(true); // Show the booking form
    };

    const closeForm = () => {
        setShowForm(false); // Hide the booking form
    };

    return (
        <section className="h-screen bg-cover bg-center relative object-cover" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Beauty Studio</h1>
                <p className="text-lg md:text-2xl mb-8">Your Style, Your Way</p>
                <button
                    className="bg-primary-500 bg-pink-700 text-white py-3 px-6 rounded-lg transition"
                    onClick={handleButtonClick} // Show the booking form on button click
                >
                    Book an Appointment
                </button>
            </div>

            {/* Booking Form */}
            {showForm && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-8 w-full max-w-sm shadow-lg relative">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            onClick={closeForm} // Close the form
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold text-pink-500 text-center mb-6">Book an Appointment</h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-pink-500">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full mt-1 p-2 border border-pink-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-pink-500">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full mt-1 p-2 border border-pink-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-pink-500">
                                    Service
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    className="w-full mt-1 p-2 border border-pink-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                                >
                                    <option value="Nail Art">Nail Art</option>
                                    <option value="Salon">Salon</option>
                                    <option value="Tattoo">Tattoo</option>
                                    <option value="Barber">Barber</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="date" className="block text-sm font-medium text-pink-500">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    className="w-full mt-1 p-2 border border-pink-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                                />
                            </div>
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition"
                                    onClick={closeForm}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default HeroSection;
