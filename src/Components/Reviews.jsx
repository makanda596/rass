import React, { useState } from "react";

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: "Jane Doe",
            rating: 5,
            feedback:
                "Amazing service! The staff was professional and friendly. My experience exceeded all expectations!",
            image: "path-to-image1.jpg",
        },
        {
            id: 2,
            name: "John Smith",
            rating: 4,
            feedback:
                "Great atmosphere and skilled staff. I love my haircut and will definitely return.",
            image: "path-to-image2.jpg",
        },
        {
            id: 3,
            name: "Emily Clark",
            rating: 5,
            feedback:
                "Truly a fantastic place! They made me feel special and the results were outstanding.",
            image: "path-to-image3.jpg",
        },
    ];

    const [currentReview, setCurrentReview] = useState(0);

    const handleNext = () => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
    };

    const handlePrev = () => {
        setCurrentReview((prev) =>
            prev === 0 ? reviews.length - 1 : prev - 1
        );
    };

    return (
        <section id="reviews" className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-pink-500 mb-8">
                    What Our Clients Say
                </h2>

                {/* Review Carousel */}
                <div className="relative max-w-4xl mx-auto">
                    <div
                        className="bg-gradient-to-r from-pink-500 to-purple-500 p-10 rounded-lg shadow-xl text-white transform transition-all duration-700"
                        key={reviews[currentReview].id}
                    >
                        <img
                            src={reviews[currentReview].image}
                            alt={reviews[currentReview].name}
                            className="w-24 h-24 rounded-full mx-auto border-4 border-white mb-4"
                        />
                        <h3 className="text-2xl font-semibold">
                            {reviews[currentReview].name}
                        </h3>
                        <div className="flex justify-center mt-2 mb-4">
                            {Array(reviews[currentReview].rating)
                                .fill(0)
                                .map((_, idx) => (
                                    <span
                                        key={idx}
                                        className="text-yellow-400 text-xl"
                                    >
                                        ★
                                    </span>
                                ))}
                            {Array(5 - reviews[currentReview].rating)
                                .fill(0)
                                .map((_, idx) => (
                                    <span
                                        key={idx}
                                        className="text-gray-300 text-xl"
                                    >
                                        ★
                                    </span>
                                ))}
                        </div>
                        <p className="text-lg italic">
                            "{reviews[currentReview].feedback}"
                        </p>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={handlePrev}
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-pink-500 text-white p-3 rounded-full shadow hover:bg-pink-600 transition"
                    >
                        ❮
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-pink-500 text-white p-3 rounded-full shadow hover:bg-pink-600 transition"
                    >
                        ❯
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center mt-6 space-x-2">
                    {reviews.map((_, index) => (
                        <span
                            key={index}
                            onClick={() => setCurrentReview(index)}
                            className={`h-3 w-3 rounded-full cursor-pointer transition-all ${index === currentReview
                                    ? "bg-pink-500 scale-110"
                                    : "bg-gray-300"
                                }`}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
