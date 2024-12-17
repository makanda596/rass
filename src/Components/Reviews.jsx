import React from "react";

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: "Jane Doe",
            rating: 5,
            feedback:
                "Amazing service! The staff was professional and friendly. My experience exceeded all expectations!",
            image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1734162867/salon1_dpbegj.png",
        },
        {
            id: 2,
            name: "John Smith",
            rating: 4,
            feedback:
                "Great atmosphere and skilled staff. I love my haircut and will definitely return.",
            image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1734162867/salon1_dpbegj.png",
        },
        {
            id: 3,
            name: "Emily Clark",
            rating: 5,
            feedback:
                "Truly a fantastic place! They made me feel special and the results were outstanding.",
            image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1734162867/salon1_dpbegj.png",
        },
        {
            id: 4,
            name: "Michael Lee",
            rating: 4,
            feedback:
                "Very good experience. The service was top-notch, and the staff was friendly.",
            image: "https://res.cloudinary.com/db5pgr14l/image/upload/v1734162867/salon1_dpbegj.png"
        },
    ];

    return (
        <section id="reviews" className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-pink-500 mb-8">
                    What Our Clients Say
                </h2>

                {/* Reviews Display */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
                    {reviews.map((review) => (
                        <div
                            className="bg-gradient-to-r from-pink-300 to-purple-500 p-2 rounded-lg shadow-xl text-black"
                            key={review.id}
                        >
                            <img
                                src={review.image}
                                alt={review.name}
                                className="w-24 h-24 rounded-full mx-auto border-4 border-white mb-4"
                            />
                            <h3 className="text-2xl font-semibold">
                                {review.name}
                            </h3>
                            <div className="flex justify-center mt-2 mb-4">
                                {Array(review.rating)
                                    .fill(0)
                                    .map((_, idx) => (
                                        <span
                                            key={idx}
                                            className="text-yellow-400 text-xl"
                                        >
                                            ★
                                        </span>
                                    ))}
                                {Array(5 - review.rating)
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
                                "{review.feedback}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;