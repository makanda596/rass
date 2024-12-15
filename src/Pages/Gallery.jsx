import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { nailArtImages, salonImages, tatooImages, BarberImages } from "../assets/data";

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="gallery-page">
            {/* Welcoming Section */}
            <div
                className="relative bg-cover bg-center h-screen text-white flex flex-col justify-center items-center"
                style={{
                    backgroundImage: 'url("https://res.cloudinary.com/db5pgr14l/image/upload/v1734160787/IMG-20241212-WA0086_ytfltt.jpg")',
                }}
            >
                <h1 className="text-4xl font-bold mb-4">Welcome to Our Salon!</h1>
                <p className="text-lg mb-6">Explore our amazing services. Click the buttons below to view more.</p>
                <div className="space-x-4">
                    <AnchorLink href="#salon" className="bg-pink-500 text-white py-2 px-6 rounded hover:bg-pink-600">
                        Salon
                    </AnchorLink>
                    <AnchorLink href="#barber" className="bg-pink-500 text-white py-2 px-6 rounded hover:bg-pink-600">
                        Tatoo
                    </AnchorLink>
                    <AnchorLink href="#kinyozi" className="bg-pink-500 text-white py-2 px-6 rounded hover:bg-pink-600">
                        Barber
                    </AnchorLink>
                    <AnchorLink href="#nailart" className="bg-pink-500 text-white py-2 px-6 rounded hover:bg-pink-600">
                        Nail Art
                    </AnchorLink>
                </div>
            </div>

            {/* Sections */}
            <div className="pt-24">
                {[{ id: "nailart", title: "Nail Art", images: nailArtImages },
                { id: "salon", title: "Salon", images: salonImages },
                { id: "barber", title: "Tatoos", images: tatooImages },
                { id: "kinyozi", title: "Barber", images: BarberImages }].map((section) => (
                    <div id={section.id} className="section py-10 px-10" key={section.id}>
                        <h2 className="text-2xl font-bold text-pink-500 mb-4">{section.title}</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {section.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.image}
                                    alt={`${section.title} ${index + 1}`}
                                    className="w-full h-64 object-cover border-2 border-transparent hover:border-pink-500 transition-all transform hover:scale-105 cursor-pointer"
                                    onClick={() => handleImageClick(image.image)}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for Selected Image */}
            {selectedImage && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50"
                    onClick={closeModal} // Close modal on backdrop click
                >
                    <div
                        className="relative"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
                    >
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="max-w-full max-h-full rounded shadow-lg"
                        />
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
