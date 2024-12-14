import React from "react";

const ServicePage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-6 sm:px-12">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-semibold text-gray-800">Our Services</h1>
                <p className="text-lg text-gray-600">Discover the wide range of services we offer to cater to your needs.</p>
            </div>

            {/* Service Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {/* Service 1 */}
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <div className="mb-6">
                        <i className="fas fa-cogs text-4xl text-pink-500"></i>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800">Service 1</h3>
                    <p className="text-gray-600 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id lectus a eros interdum suscipit.
                    </p>
                </div>

                {/* Service 2 */}
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <div className="mb-6">
                        <i className="fas fa-laptop-code text-4xl text-pink-500"></i>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800">Service 2</h3>
                    <p className="text-gray-600 mt-4">
                        Vivamus congue ligula et mauris sollicitudin, ut rutrum turpis fermentum. Cras tristique mauris vitae.
                    </p>
                </div>

                {/* Service 3 */}
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <div className="mb-6">
                        <i className="fas fa-rocket text-4xl text-pink-500"></i>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800">Service 3</h3>
                    <p className="text-gray-600 mt-4">
                        Suspendisse potenti. Nulla facilisi. Fusce nec sapien dolor. Donec in efficitur dui, sit amet suscipit.
                    </p>
                </div>

                {/* Service 4 */}
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <div className="mb-6">
                        <i className="fas fa-paint-brush text-4xl text-pink-500"></i>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800">Service 4</h3>
                    <p className="text-gray-600 mt-4">
                        Curabitur ac ligula condimentum, consequat nulla ac, ullamcorper urna. Pellentesque habitant morbi.
                    </p>
                </div>

                {/* Service 5 */}
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <div className="mb-6">
                        <i className="fas fa-headset text-4xl text-pink-500"></i>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800">Service 5</h3>
                    <p className="text-gray-600 mt-4">
                        Nunc tincidunt urna in volutpat bibendum. Etiam sollicitudin, arcu vel venenatis tempor, lorem quam.
                    </p>
                </div>

                {/* Service 6 */}
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <div className="mb-6">
                        <i className="fas fa-truck text-4xl text-pink-500"></i>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800">Service 6</h3>
                    <p className="text-gray-600 mt-4">
                        Quisque euismod dolor sit amet turpis finibus, vel convallis mauris tincidunt. Nulla non nisi auctor.
                    </p>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="mt-24 bg-gray-100 py-16 px-6 sm:px-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-gray-800">Why Choose Us?</h2>
                    <p className="text-lg text-gray-600">We are committed to delivering high-quality services with a focus on customer satisfaction.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <i className="fas fa-thumbs-up text-4xl text-pink-500 mb-6"></i>
                        <h3 className="text-xl font-semibold text-gray-800">Customer Satisfaction</h3>
                        <p className="text-gray-600 mt-4">We prioritize our clients and ensure they receive the best service possible.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <i className="fas fa-star text-4xl text-pink-500 mb-6"></i>
                        <h3 className="text-xl font-semibold text-gray-800">Top Quality</h3>
                        <p className="text-gray-600 mt-4">We use the best practices and latest technology to provide top-quality services.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <i className="fas fa-clipboard-check text-4xl text-pink-500 mb-6"></i>
                        <h3 className="text-xl font-semibold text-gray-800">Reliability</h3>
                        <p className="text-gray-600 mt-4">You can count on us to deliver timely and reliable solutions every time.</p>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="mt-24 text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Ready to Get Started?</h2>
                <p className="text-lg text-gray-600 mb-8">Contact us today to learn more about our services and how we can help you.</p>
                <a
                    href="/contact"
                    className="bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600 transition duration-300"
                >
                    Contact Us
                </a>
            </div>
        </div>
    );
};

export default ServicePage;
