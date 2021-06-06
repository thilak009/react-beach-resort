import React, { useContext } from 'react'
import RoomFilter from './RoomsFilter'
import RoomList from './RoomList'
import { RoomContext } from '../context'
import Loading from './Loading'

function RoomContainer() {

    const {rooms,sortedRooms,loading} = useContext(RoomContext)

    if(loading){
        return <Loading/>
    }
    return (
        <>
            <RoomFilter rooms={rooms}/>
            <RoomList rooms={sortedRooms}/>
        </>
    )
}

export default RoomContainer
