import React, { useState, useEffect } from "react";

const HeroSection = () => {
    const images = [
        "https://via.placeholder.com/1920x1080?text=Image+1",
        "https://via.placeholder.com/1920x1080?text=Image+2",
        "https://via.placeholder.com/1920x1080?text=Image+3",
        "https://via.placeholder.com/1920x1080?text=Image+4",
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section
            className="h-screen bg-cover bg-center relative"
            style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Beauty Studio</h1>
                <p className="text-lg md:text-2xl mb-8">Your Style, Your Way</p>
                <button className="bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-lg transition">
                    Book an Appointment
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
