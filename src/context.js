import React, { useEffect, useState } from 'react'
import Client from './Contentful'

const RoomContext = React.createContext()

function RoomProvider({children}) {
    
    const [roomState,setRoomState] = useState({
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    })
    const [wait,setWait] = useState(false)
    
    useEffect(()=>{
        filterRooms()
    },[wait])

    useEffect(()=>{
        getData()
    },[])
    const getData=async()=>{
        try {
            let response = await Client.getEntries({content_type: "beachResortRoom",order: "fields.price"})
            let rooms = formatData(response.items)
            let featuredRooms = rooms.filter(room => room.featured === true)
            let maxPrice = Math.max(...rooms.map(item => item.price))
            let maxSize = Math.max(...rooms.map(item => item.size))
            setRoomState({...roomState,
                loading: false,
                rooms: rooms,
                sortedRooms: rooms,
                featuredRooms: featuredRooms,
                price: maxPrice,
                maxPrice: maxPrice,
                maxSize: maxSize
            })
        } catch (error) {
            console.log(error);
        }
    }

    const formatData=(items)=>{
        let tempItems = items.map((item)=>{
            let id = item.sys.id
            let images = item.fields.images.map((image)=> image.fields.file.url)
            let room = {...item.fields,images,id}
            return room;
        })
        return tempItems;
    }
    const getRoom=(slug)=>{
        let tempRooms = [...roomState.rooms]
        const room = tempRooms.find((room)=> room.slug === slug)
        return room;
    }
    const handleChange=(e)=>{
        const target = e.target
        const name = e.target.name
        const value = target.type === "checkbox"? target.checked : target.value
        setRoomState({...roomState,[name]: value})
        setWait(!wait)
    }
    const filterRooms=()=>{
        let {rooms,type,capacity,price,minSize,maxSize,breakfast,pets} = roomState
        let tempRooms = [...rooms]
        if(type !== "all"){
            tempRooms = tempRooms.filter((room)=> room.type === type)
        }
        if(capacity !== 1){
            tempRooms = tempRooms.filter((room)=> room.capacity >= capacity)
        }
        tempRooms = tempRooms.filter((room)=> room.price < price)
        tempRooms = tempRooms.filter((room)=> room.size >= minSize && room.size <= maxSize)
        if(breakfast){
            tempRooms = tempRooms.filter((room)=> room.breakfast === true)
        }
        if(pets){
            tempRooms = tempRooms.filter((room)=> room.pets === true)
        }
        setRoomState({...roomState,sortedRooms: tempRooms})
    }

    return (
        <RoomContext.Provider value={{...roomState,getRoom: getRoom,handleChange: handleChange}}>
            {children}
        </RoomContext.Provider>
    )
}
const RoomConsumer = RoomContext.Consumer

export {RoomProvider, RoomConsumer, RoomContext}
