import React, { useContext } from 'react'
import Banner from '../components/Banner'
import defalutBcg from '../images/room-1.jpeg'
import {RoomContext} from '../context'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import StyledHero from '../components/StyledHero'

function SingleRoom() {
    const {getRoom} = useContext(RoomContext)
    const {slug} = useParams()
    const room = getRoom(slug)
    window.scrollTo(0,0)
    
    if(!room){
        return(
            <div className="error">
                <h3>No such room found</h3>
                <Link to="/rooms" className="btn-primary">back to rooms</Link>
            </div>
        )
    }
    const {name,description,capacity,size,price,extras,breakfast,pets,images} = room
    const [mainImg,...defaultImg] = images
    return (
        <>
            <StyledHero img={mainImg || defalutBcg}>
                <Banner title={`${name} room`}>
                    <Link to="/rooms" className="btn-primary">Back to rooms</Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {
                        defaultImg.map((image,index)=>{
                            return (
                                <img key={index} src={image} alt="hotelimage"/>
                            )
                        })
                    }
                </div>
                <div className="single-room-info">
                    <article className="description">
                        <h3>Details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>Info</h3>
                        <h6>Price : ${price}</h6>
                        <h6>size : {size} SQFT</h6>
                        <h6>
                            max capacity : {capacity>1?`${capacity} people`:`${capacity} person`}
                        </h6>
                        <h6>{pets?"pets allowed":"No pets allowed"}</h6>
                        <h6>{breakfast && "free breakfast included"}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {
                        extras.map((item,index)=>{
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </section>
        </>
    )
}

export default SingleRoom
