import React from "react";
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa"; // Correct import


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="container mx-auto px-6 lg:px-20">
                {/* Subscription Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        Subscribe for Updates
                    </h2>
                    <p className="text-sm mb-4">
                        Be the first to know about offers, Black Friday deals, and new styles.
                    </p>
                    <form className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full md:w-auto flex-1 px-4 py-2 bg-gray-800 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mb-8"></div>

                {/* Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h1 className="text-2xl font-bold text-white">Houseofnails</h1>
                        <p>
                            Transforming your ideas into reality with exceptional services. We are
                            committed to quality and innovation.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                            <li>
                                <a href="/" className="hover:text-blue-400 transition">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/services" className="hover:text-blue-400 transition">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="/gallery" className="hover:text-blue-400 transition">
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-blue-400 transition">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h2 className="text-lg font-semibold text-white mb-4">Contact Us</h2>
                        <ul className="space-y-2">
                            <li>
                                Email:{" "}
                                <a
                                    href="mailto:houseofnail17@gmail.com"
                                    className="hover:text-blue-400 transition"
                                >
                                    houseofnail17@gmail.com
                                </a>
                            </li>
                            <li>
                                Phone:{" "}
                                <a
                                    href="tel:+123456789"
                                    className="hover:text-blue-400 transition"
                                >
                                    +254 70237 0615
                                </a>
                            </li>
                            <li>30100 Kesses, Eldoret City,kenya</li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div>
                        <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>
                        <div className=" flex  justify-center space-x-4">
                            <a
                                href="https://wa.me/+254702370615"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-500 hover:text-pink-600 transition text-lg"
                            >
                                <FaWhatsapp /> {/* Correct WhatsApp icon */}
                            </a>
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
                    </div>

                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 mt-8"></div>

            {/* Copyright */}
            <div className="flex flex-col md:flex-row justify-center items-center mt-6">
                <p className="text-sm justify-center">
                    <p >&copy; {currentYear} Created by <a href="https://wa.me/+254742149060" target="_blank" rel="noopener noreferrer" className="text-pink-500 "> Makanda Worksoft</a>. All Rights Reserved.</p>

                </p>
            </div>
        </footer >
    );
};

export default Footer;
