import React from 'react'
import Hero from '../Components/Hero'
import Service from '../Components/Service'
import SpecialOffer from '../Components/SpecialOffers'
import Gallery from '../Components/Gallery'
import Bookings from '../Components/Bookings'
import Reviews from '../Components/Reviews'
function Home() {
    return (
        <div>
            <Hero />
            <SpecialOffer />
            <Service />
            <Gallery />
            <Bookings />
            <Reviews />
        </div>
    )
}

export default Home
