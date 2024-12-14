import React from "react";

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-6 sm:px-12">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-semibold text-gray-800">Contact Us</h1>
                <p className="text-lg text-gray-600">We'd love to hear from you! Reach out to us via the form below.</p>
            </div>

            {/* Contact Form and Image Section */}
            <div className="flex flex-col lg:flex-row lg:space-x-12">
                {/* Form Section (Left) */}
                <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="text-gray-700 font-medium">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                                    placeholder="Your Name"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="text-gray-700 font-medium">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                                    placeholder="Your Email"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="mt-6">
                            <label htmlFor="message" className="text-gray-700 font-medium">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                                placeholder="Your Message"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-6 text-center">
                            <button
                                type="submit"
                                className="bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600 transition duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* Image Section (Right) */}
                <div className="lg:w-1/2 mt-8 lg:mt-0">
                    <img
                        src="https://via.placeholder.com/500x400"
                        alt="Contact Us"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Contact Details */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <h3 className="text-xl font-semibold text-gray-800">Our Office</h3>
                    <p className="text-gray-600 mt-4">1234 Street Name, City, Country</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <h3 className="text-xl font-semibold text-gray-800">Phone Number</h3>
                    <p className="text-gray-600 mt-4">(123) 456-7890</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <h3 className="text-xl font-semibold text-gray-800">Email Address</h3>
                    <p className="text-gray-600 mt-4">contact@yourdomain.com</p>
                </div>
            </div>

            {/* Map Section */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Find Us Here</h2>
                <div className="w-full h-72">
                    <iframe
                        className="w-full h-full rounded-lg"
                        title="Map Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2946.6794962357884!2d-71.1583177!3d42.3600835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a407bfe2c5f%3A0x17954ffdf0b9b98d!2sBoston%2C%20MA!5e0!3m2!1sen!2sus!4v1613015282122!5m2!1sen!2sus"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen
                        aria-hidden="false"
                        tabIndex="0"
                    ></iframe>
                </div>
            </div>

            {/* Social Media Section */}
            <div className="mt-12 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Follow Us</h2>
                <div className="flex justify-center space-x-6">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 transition duration-300">
                        <i className="fab fa-facebook fa-2x"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 transition duration-300">
                        <i className="fab fa-instagram fa-2x"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 transition duration-300">
                        <i className="fab fa-twitter fa-2x"></i>
                    </a>
                </div>
            </div>
        </div>
        
    );
};

export default ContactPage;
