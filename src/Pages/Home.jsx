import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon
import Hero from '../Components/Hero';
import Service from '../Components/Service';
import SpecialOffer from '../Components/SpecialOffers';
import Gallery from '../Components/Gallery';
import Bookings from '../Components/Bookings';
import Reviews from '../Components/Reviews';

function Home() {
    return (
        <div>
            <Hero />
            <SpecialOffer />
            <Service />
            <Gallery />
            <Bookings />
            <Reviews />

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/+254702370615"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center text-2xl"
                style={{ zIndex: 1000 }}
            >
                <FaWhatsapp />
            </a>
        </div >
    );
}

export default Home;
