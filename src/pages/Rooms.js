import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import RoomContainer from '../components/RoomContainer'

function Rooms() {
    return( 
        <>
            <Hero hero="roomsHero">
                <Banner title="our rooms">
                    <Link to="/" className="btn-primary">Back Home</Link>
                </Banner>
            </Hero>
            <RoomContainer/>
        </>
    )
}

export default Rooms
