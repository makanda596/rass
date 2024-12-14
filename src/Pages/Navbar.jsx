import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    return (
        <>
            <nav className="bg-black text-white fixed top-0 w-full z-50 shadow-md">
                <div className="container mx-auto flex justify-between items-center p-4">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-pink-500">
                        Beauty Studio
                    </div>

                    {/* Navigation Links */}
                    <ul className="hidden md:flex space-x-6">
                        <li>
                            <a href="/" className="hover:text-pink-400 transition">Home</a>
                        </li>
                        <li>
                            <a href="/services" className="hover:text-pink-400 transition">Services</a>
                        </li>
                        <li>
                            <a href="/gallery" className="hover:text-pink-400 transition">Gallery</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-pink-400 transition">Contact</a>
                        </li>
                        <li>
                            <button
                                onClick={openPopup}
                                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition focus:outline-none"
                            >
                                Book Now
                            </button>
                        </li>
                    </ul>

                    {/* Social Media Links */}
                    <div className="hidden md:flex space-x-4">
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-500 hover:text-pink-400 transition text-lg"
                        >
                            <FaFacebook />
                        </a>
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-500 hover:text-pink-400 transition text-lg"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://www.tiktok.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-500 hover:text-pink-400 transition text-lg"
                        >
                            <FaTiktok />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            className="text-gray-400 focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-black shadow-lg">
                        <ul className="space-y-4 p-4">
                            <li>
                                <a href="/" className="block text-pink-300 hover:text-pink-400 transition">Home</a>
                            </li>
                            <li>
                                <a href="/services" className="block text-pink-300 hover:text-pink-400 transition">Services</a>
                            </li>
                            <li>
                                <a href="/gallery" className="block text-pink-300 hover:text-pink-400 transition">Gallery</a>
                            </li>
                            <li>
                                <a href="/contact" className="block text-pink-300 hover:text-pink-400 transition">Contact</a>
                            </li>
                            <li>
                                <button
                                    onClick={openPopup}
                                    className="block bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition focus:outline-none"
                                >
                                    Book Now
                                </button>
                            </li>
                            <li className="flex justify-center space-x-4 mt-4">
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className="text-pink-500 hover:text-pink-400 text-lg" />
                                </a>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="text-pink-500 hover:text-pink-400 text-lg" />
                                </a>
                                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                                    <FaTiktok className="text-pink-500 hover:text-pink-400 text-lg" />
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>

            {/* Booking Popup */}
            {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-2xl font-bold text-pink-400 mb-4">Book an Appointment</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-pink-300 mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full p-2 border border-pink-300 rounded"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-pink-300 mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-2 border border-pink-300 rounded"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-pink-300 mb-2" htmlFor="service">
                                    Service
                                </label>
                                <select id="service" className="w-full p-2 border border-pink-300 rounded">
                                    <option value="nail-art">Nail Art</option>
                                    <option value="salon">Salon</option>
                                    <option value="barber">Barber</option>
                                    <option value="tattoo">Tattoo</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-pink-300 mb-2" htmlFor="date">
                                    Date
                                </label>
                                <input type="date" id="date" className="w-full p-2 border border-pink-300 rounded" />
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button
                                    type="button"
                                    className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded"
                                    onClick={closePopup}
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
