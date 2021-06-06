import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import FeaturedRooms from '../components/FeaturedRooms'
import Hero from '../components/Hero'
import Services from '../components/Services'

function Home() {
    return (
        <>
            <Hero hero="defaultHero">
                <Banner title="luxurious rooms" subtitle="deluxe rooms from $100">
                    <Link to="/rooms" className="btn-primary">Our rooms</Link>
                </Banner>
            </Hero>
            <Services/>
            <FeaturedRooms/>
        </>
    )
}

export default Home
