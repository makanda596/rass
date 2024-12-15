import React from "react";

const Service = () => {
    return (
        <section id="services" className="bg-maroon-500 py-16 text-white">
            <div className="container mx-auto text-center px-4 md:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-pink-500">Our Services</h2>

                {/* Service Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {/* Nail Art Service */}
                    <div
                        className="service-card bg-black p-6 rounded-lg shadow-lg cursor-pointer relative overflow-hidden group"
                        onClick={() => window.location.href = "/services"} // Redirect to specific service page
                    >
                        <img
                            src="https://res.cloudinary.com/db5pgr14l/image/upload/v1734162156/nail1_olul2t.jpg"
                            alt="Nail Art"
                            className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300"
                        />
                        <h3 className="text-xl sm:text-2xl font-semibold text-pink-500 mb-2">Nail Art</h3>
                        <p className="text-gray-300 mb-4">
                            Trendy, creative, and personalized nail art designs.
                        </p>

                        {/* Hover Text */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-sm sm:text-lg">Get creative with your nails!</p>
                        </div>

                        {/* View More Button */}
                        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white py-2 px-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            View More
                        </button>
                    </div>

                    {/* Salon Service */}
                    <div
                        className="service-card bg-black p-6 rounded-lg shadow-lg cursor-pointer relative overflow-hidden group"
                        onClick={() => window.location.href = "/services"} // Redirect to specific service page
                    >
                        <img
                            src="https://res.cloudinary.com/db5pgr14l/image/upload/v1734168931/IMG-20241214-WA0041_ziocmj.jpg"
                            alt="Salon"
                            className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300"
                        />
                        <h3 className="text-xl sm:text-2xl font-semibold text-pink-500 mb-2">Salon</h3>
                        <p className="text-gray-300 mb-4">
                            Professional hair styling, makeup, and skincare.
                        </p>

                        {/* Hover Text */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-sm sm:text-lg">Achieve a flawless look!</p>
                        </div>

                        {/* View More Button */}
                        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white py-2 px-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            View More
                        </button>
                    </div>

                    {/* Barber Service */}
                    <div
                        className="service-card bg-black p-6 rounded-lg shadow-lg cursor-pointer relative overflow-hidden group"
                        onClick={() => window.location.href = "/services"} // Redirect to specific service page
                    >
                        <img
                            src="https://res.cloudinary.com/db5pgr14l/image/upload/v1734163062/istockphoto-1677718095-612x612_jcwuxp.webp"
                            alt="Barber"
                            className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300"
                        />
                        <h3 className="text-xl sm:text-2xl font-semibold text-pink-500 mb-2">Barber</h3>
                        <p className="text-gray-300 mb-4">
                            Stylish haircuts and grooming packages tailored for men.
                        </p>

                        {/* Hover Text */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-sm sm:text-lg">Get a sharp, fresh look!</p>
                        </div>

                        {/* View More Button */}
                        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white py-2 px-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            View More
                        </button>
                    </div>

                    {/* Tattoo Service */}
                    <div
                        className="service-card bg-black p-6 rounded-lg shadow-lg cursor-pointer relative overflow-hidden group"
                        onClick={() => window.location.href = "/services"} // Redirect to specific service page
                    >
                        <img
                            src="https://res.cloudinary.com/db5pgr14l/image/upload/v1734162844/tatoo1_zrxkbr.jpg"
                            alt="Tattoo"
                            className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300"
                        />
                        <h3 className="text-xl sm:text-2xl font-semibold text-pink-500 mb-2">Tattoos</h3>
                        <p className="text-gray-300 mb-4">
                            Custom, creative tattoos designed for your personal style.
                        </p>

                        {/* Hover Text */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-sm sm:text-lg">Express yourself through tattoos!</p>
                        </div>

                        {/* View More Button */}
                        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white py-2 px-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            View More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
