import React from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

function Services() {

    const services = [
        {
            icon: <FaCocktail/>,
            title: "free cocktails",
            info: "Enjoy our wide variety of cocktails which include Mojito, Espresso matini....."
        },
        {
            icon: <FaHiking/>,
            title: "endless hiking",
            info: "Guided Hiking and Backpacking trips at the nearest hill stations to enjoy the nature"
        },
        {
            icon: <FaShuttleVan/>,
            title: "free shuttle vans",
            info: "Your to and fro trips from hiking stops and nearest tourist locations are on us"
        },
        {
            icon: <FaBeer/>,
            title: "strongest beer",
            info: "People who stayed at our hotel say we have the strongest beer, only one way to find out"
        }
    ]

    return (
        <section className="services">
            <Title title="services"></Title>
            <div className="services-center">
                {
                    services.map((service,index)=>{
                        return(
                            <article key={index} className="service">
                                <span>{service.icon}</span>
                                <h6>{service.title}</h6>
                                <p>{service.info}</p>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Services
