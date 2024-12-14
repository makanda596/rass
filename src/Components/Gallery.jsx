import React from "react";

const Gallery = () => {
    return (
        <section
            id="gallery"
            className="relative bg-cover bg-center h-screen text-white"
        >
            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="path-to-your-video.mp4" // Replace with your video URL
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <h2 className="text-5xl font-bold mb-4 text-pink-500">Our Gallery</h2>
                <p className="text-lg text-gray-300 mb-8 max-w-xl text-center">
                    Dive into the beauty of our work and services, showcasing creativity and expertise.
                </p>

                {/* View Gallery Button */}
                <button
                    onClick={() => window.location.href = "/gallery"} // Redirect to the full gallery page
                    className="bg-pink-500 text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-pink-600 transition-colors duration-300 shadow-lg"
                >
                    View Gallery
                </button>
            </div>
        </section>
    );
};

export default Gallery;
