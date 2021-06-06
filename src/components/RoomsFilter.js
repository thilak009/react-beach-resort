import React, { useContext } from 'react'
import { RoomContext } from '../context'
import Title from './Title'

const getUnique=(items,value)=>{
    return [...new Set(items.map(item => item[value]))]
}

function RoomFilter({rooms}) {

    const {type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets,handleChange} = useContext(RoomContext)
    let types = getUnique(rooms,"type")
    types = ["all",...types]

    let people = getUnique(rooms,"capacity")

    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {
                            types.map((item,index)=>{
                                return(<option key={index} value={item}>{item}</option>)
                            })
                        }
                    </select>
                </div>
                {/* end of select type */}
                {/* guests */}
                <div className="form-group">
                    <label htmlFor="capacity">guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {
                            people = people.map((item,index)=>{
                                return <option key={index} value={item}>{item}</option>
                            })
                        }
                    </select>
                </div>
                {/* end of guests */}
                {/* room price */}
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice}
                     id="price" value={price} onChange={handleChange} className="form-control"/>
                </div>
                {/* end of room price */}
                {/* size */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" 
                            value={minSize} onChange={handleChange} className="size-input" />
                        <input type="number" name="maxSize" id="size"
                             value={maxSize} onChange={handleChange} className="size-input" />
                    </div>
                </div>
                {/* end of size */}
                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast"
                            id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                    <input type="checkbox" name="pets"
                            id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* end of extras */}
            </form>
        </section>
    )
}

export default RoomFilter
