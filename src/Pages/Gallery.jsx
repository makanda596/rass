import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";  // Updated import

const Gallery = () => {
    const [selectedImages, setSelectedImages] = useState([]);
    const [isComparing, setIsComparing] = useState(false); // State to control sliding effect

    const handleImageSelect = (imageUrl) => {
        if (selectedImages.length < 2) {
            setSelectedImages([...selectedImages, imageUrl]);
        } else {
            alert("You can only compare two images at a time.");
        }
    };

    const clearComparison = () => {
        setSelectedImages([]);
        setIsComparing(false); // Hide the comparison when cleared
    };

    const salonImages = ["salon1.jpg", "salon2.jpg", "salon3.jpg"];
    const kinyoziImages = ["kinyozi1.jpg", "kinyozi2.jpg"];
    const barberImages = ["barber1.jpg", "barber2.jpg"];
    const nailArtImages = ["nail1.jpg", "nail2.jpg", "nail3.jpg"];

    return (
        <div className={`gallery-page ${isComparing ? "slide" : ""}`}>
            {/* Welcoming Section with Full Height Background Image */}
            <div
                className="relative bg-cover bg-center h-screen text-white flex flex-col justify-center items-center"
                style={{ backgroundImage: 'url("your-background-image.jpg")' }}
            >
                <h1 className="text-4xl font-bold mb-4">Welcome to Our Salon!</h1>
                <p className="text-lg mb-6">Explore our amazing services. Click the buttons below to view more.</p>
                <div className="space-x-4">
                    <AnchorLink
                        href="#salon"  // Changed to anchor link for smooth scroll
                        className="bg-pink-500 text-white py-2 px-6 rounded hover:bg-pink-600"
                    >
                        Salon
                    </AnchorLink>
                    <AnchorLink
                        href="#barber"
                        className="bg-pink-500 text-white py-2 px-6 rounded hover:bg-pink-600"
                    >
                        Barber
                    </AnchorLink>
                    <AnchorLink
                        href="#kinyozi"
                        className="bg-pink-500 text-white py-2 px-6 rounded hover:bg-pink-600"
                    >
                        Kinyozi
                    </AnchorLink>
                    <AnchorLink
                        href="#nailart"
                        className="bg-pink-500 text-white py-2 px-6 rounded hover:bg-pink-600"
                    >
                        Nail Art
                    </AnchorLink>
                </div>
            </div>

            {/* Sections */}
            <div className={`pt-24 ${isComparing ? "content-slide" : ""}`}>
                <div id="salon" className="section">
                    <h2 className="text-2xl font-bold text-pink-500 mb-4">Salon</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {salonImages.map((image, index) => (
                            <div key={index} className="group relative cursor-pointer">
                                <img
                                    src={image}
                                    alt={`Salon ${index + 1}`}
                                    className="w-full h-64 object-cover border-2 border-transparent hover:border-pink-500 transition-all transform group-hover:scale-105"
                                />
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={() => {
                                            handleImageSelect(image);
                                            setIsComparing(true); // Trigger slide effect when comparing
                                        }}
                                        className="bg-pink-500 text-white py-2 px-6 rounded-full"
                                    >
                                        Compare
                                    </button>
                                    <a
                                        href={image}
                                        download
                                        className="bg-green-500 text-white py-2 px-6 rounded-full"
                                    >
                                        Download
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="kinyozi" className="section">
                    <h2 className="text-2xl font-bold text-pink-500 mb-4">Kinyozi</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {kinyoziImages.map((image, index) => (
                            <div key={index} className="group relative cursor-pointer">
                                <img
                                    src={image}
                                    alt={`Kinyozi ${index + 1}`}
                                    className="w-full h-64 object-cover border-2 border-transparent hover:border-pink-500 transition-all transform group-hover:scale-105"
                                />
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={() => {
                                            handleImageSelect(image);
                                            setIsComparing(true);
                                        }}
                                        className="bg-pink-500 text-white py-2 px-6 rounded-full"
                                    >
                                        Compare
                                    </button>
                                    <a
                                        href={image}
                                        download
                                        className="bg-green-500 text-white py-2 px-6 rounded-full"
                                    >
                                        Download
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="barber" className="section">
                    <h2 className="text-2xl font-bold text-pink-500 mb-4">Barber</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {barberImages.map((image, index) => (
                            <div key={index} className="group relative cursor-pointer">
                                <img
                                    src={image}
                                    alt={`Barber ${index + 1}`}
                                    className="w-full h-64 object-cover border-2 border-transparent hover:border-pink-500 transition-all transform group-hover:scale-105"
                                />
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={() => {
                                            handleImageSelect(image);
                                            setIsComparing(true);
                                        }}
                                        className="bg-pink-500 text-white py-2 px-6 rounded-full"
                                    >
                                        Compare
                                    </button>
                                    <a
                                        href={image}
                                        download
                                        className="bg-green-500 text-white py-2 px-6 rounded-full"
                                    >
                                        Download
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="nailart" className="section">
                    <h2 className="text-2xl font-bold text-pink-500 mb-4">Nail Art</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {nailArtImages.map((image, index) => (
                            <div key={index} className="group relative cursor-pointer">
                                <img
                                    src={image}
                                    alt={`Nail Art ${index + 1}`}
                                    className="w-full h-64 object-cover border-2 border-transparent hover:border-pink-500 transition-all transform group-hover:scale-105"
                                />
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={() => {
                                            handleImageSelect(image);
                                            setIsComparing(true);
                                        }}
                                        className="bg-pink-500 text-white py-2 px-6 rounded-full"
                                    >
                                        Compare
                                    </button>
                                    <a
                                        href={image}
                                        download
                                        className="bg-green-500 text-white py-2 px-6 rounded-full"
                                    >
                                        Download
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Image Comparison Section */}
            {selectedImages.length > 0 && (
                <div className="fixed top-0 right-0 w-1/3 bg-black bg-opacity-75 text-white p-4 z-50">
                    <h3 className="text-lg font-bold mb-2 text-center">Image Comparison</h3>
                    <div className="flex justify-center space-x-6">
                        {selectedImages.map((image, index) => (
                            <div key={index} className="w-1/2 p-2">
                                <img
                                    src={image}
                                    alt={`Selected ${index + 1}`}
                                    className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 text-center">
                        <button
                            onClick={clearComparison}
                            className="bg-pink-500 text-white py-2 px-6 rounded-full hover:bg-pink-600 transition-colors"
                        >
                            Clear Comparison
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
