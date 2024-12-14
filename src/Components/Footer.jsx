import React from "react";

const Footer = () => {
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
                        <h1 className="text-2xl font-bold text-white">YourBrand</h1>
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
                                <a href="#about" className="hover:text-blue-400 transition">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-blue-400 transition">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#gallery" className="hover:text-blue-400 transition">
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-blue-400 transition">
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
                                    href="mailto:info@yourbrand.com"
                                    className="hover:text-blue-400 transition"
                                >
                                    info@yourbrand.com
                                </a>
                            </li>
                            <li>
                                Phone:{" "}
                                <a
                                    href="tel:+123456789"
                                    className="hover:text-blue-400 transition"
                                >
                                    +1 234 567 89
                                </a>
                            </li>
                            <li>Address: 123 YourBrand Street, City, Country</li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div>
                        <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-blue-400 transition"
                                aria-label="Facebook"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-blue-400 transition"
                                aria-label="Twitter"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-blue-400 transition"
                                aria-label="Instagram"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-blue-400 transition"
                                aria-label="LinkedIn"
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-8"></div>

                {/* Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-6">
                    <p className="text-sm">
                        © {new Date().getFullYear()} YourBrand. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
