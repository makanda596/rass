import React, { useState } from "react";

const Bookings = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <section id="bookings" className="py-16 bg-white">
            <div className="container mx-auto px-6 flex flex-wrap items-center">
                {/* Left Side: Image */}
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                    <img
                        src="https://res.cloudinary.com/db5pgr14l/image/upload/v1734165766/IMG-20241212-WA0072_vnqtlc.jpg"
                        alt=""
                        className="rounded-lg shadow-lg w-full h-[450px] object-cover hidden md:flex"
                    />
                </div>

                {/* Right Side: Booking Form */}
                <div className="w-full lg:w-1/2">
                    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
                        <h2 className="text-4xl font-bold text-pink-500 mb-4">Make a Booking</h2>
                        <p className="text-gray-600 mb-8">
                            Book your preferred service and let us pamper you!
                        </p>

                        {!formSubmitted ? (
                            <form onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                                        placeholder="Your Email"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label
                                        htmlFor="service"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Select Service
                                    </label>
                                    <select
                                        id="service"
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                                    >
                                        <option value="" disabled selected>
                                            Choose a Service
                                        </option>
                                        <option value="nail-art">Nail Art</option>
                                        <option value="salon">Salon</option>
                                        <option value="barber">Barber</option>
                                        <option value="tattoos">Tattoos</option>
                                    </select>
                                </div>

                                <div className="mb-6">
                                    <label
                                        htmlFor="date"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Select Date
                                    </label>
                                    <input
                                        type="date"
                                        id="date"
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-pink-500 text-white py-2 px-4 rounded-md shadow hover:bg-pink-600 transition duration-300"
                                >
                                    Book Now
                                </button>
                            </form>
                        ) : (
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-pink-500 mb-4">
                                    Thank You for Booking!
                                </h3>
                                <p className="text-gray-600">
                                    We will get back to you shortly with the confirmation.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bookings;
