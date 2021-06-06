import React, { useContext } from 'react'
import {RoomContext} from '../context'
import Loading from './Loading';
import Room from './Room';
import Title from './Title';


function FeaturedRooms() {
    const {featuredRooms,loading} = useContext(RoomContext)

    return (
        <section className="featured-rooms">
            <Title title="featred rooms"/>
            <div className="featured-rooms-center">
            {
                loading ? <Loading/> : featuredRooms.map((room)=>{
                    return <Room key={room.id} room={room}/>
                })
            }
            </div>
        </section>
    )
}

export default FeaturedRooms
