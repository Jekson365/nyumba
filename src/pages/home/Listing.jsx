import React from 'react'
import { IoIosResize } from 'react-icons/io'
import { FaBath, FaBed } from 'react-icons/fa'
import './home.scss'

export const Listing = () => {
    const data = [
        {
            id: Math.floor() * 99999,
            name: '1431 Timothy St,Northmead',
            sqft: 56.356,
            bedroom: 5,
            bathroom: 3,
            img: "https://uploads-ssl.webflow.com/62fa81dfa1e5c446a25769a5/62fa82c5757b1331fde6d61d_john-fornander-Id7u0EkTjBE-unsplash-p-500.jpg",
            type: "sale",
            price: "20.000.000"
        },
        {
            id: Math.floor() * 99999,
            name: '1431 Timothy St,Northmead',
            sqft: 56.356,
            bedroom: 5,
            bathroom: 3,
            img: "https://uploads-ssl.webflow.com/62fa81dfa1e5c446a25769a5/62fa99a112099954a1d82c2b_avi-werde-hHz4yrvxwlA-unsplash-p-500.jpg",
            type: "sale",
            price: "20.000.000"
        },
        {
            id: Math.floor() * 99999,
            name: '1431 Timothy St,Northmead',
            sqft: 56.356,
            bedroom: 5,
            bathroom: 3,
            img: "https://uploads-ssl.webflow.com/62fa81dfa1e5c446a25769a5/62fa9bdef7b32d73cc41d9d2_webaliser-_TPTXZd9mOo-unsplash-p-500.jpg",
            type: "sale",
            price: "20.000.000"
        },
        {
            id: Math.floor() * 99999,
            name: '1431 Timothy St,Northmead',
            sqft: 56.356,
            bedroom: 5,
            bathroom: 3,
            img: "https://uploads-ssl.webflow.com/62fa81dfa1e5c446a25769a5/63160a5dede28c79546ba343_r-architecture-2gDwlIim3Uw-unsplash-p-500.jpg",
            type: "sale",
            price: "20.000.000"
        },
        {
            id: Math.floor() * 99999,
            name: '1431 Timothy St,Northmead',
            sqft: 56.356,
            bedroom: 5,
            bathroom: 3,
            img: "https://uploads-ssl.webflow.com/62fa81dfa1e5c446a25769a5/62fcf4fae9e60014e6bff76d_greg-rivers-rChFUMwAe7E-unsplash-p-500.jpg",
            type: "sale",
            price: "20.000.000"
        },
        {
            id: Math.floor() * 99999,
            name: '1431 Timothy St,Northmead',
            sqft: 56.356,
            bedroom: 5,
            bathroom: 3,
            img: "https://uploads-ssl.webflow.com/62fa81dfa1e5c446a25769a5/62fcf5ab79e0c6f19b3b1659_stephan-bechert-yFV39g6AZ5o-unsplash-p-500.jpg",
            type: "sale",
            price: "20.000.000"
        },
    ]
    return (
        <section className='container-fluid listing' 
            data-aos='fade-up'
        >
            <h1>Feautured Listings</h1>
            <div className="list-wrapper d-flex justify-content-center align-items-center flex-wrap">
                {data.map((each) => {
                    const { id, name, sqft, bedroom, bathroom, img, type, price } = each
                    return (
                        <>
                            <div className="d-flex flex-column m-2 position-relative list-wrap">
                                <div className="list-box col-md-4 "
                                    style={{ "backgroundImage": `url('${img}')` }}
                                >
                                    <span className="price position-absolute">{price}$</span>
                                    <span className="type position-absolute">{type}</span>
                                </div>
                                <div className="d-flex content flex-column align-items-start">
                                    <span className='p ap-title mb-3'>{name}</span>
                                    <div className="d-flex flex-row align-items-center align-items-center">
                                        <p className='specs'><FaBed /> <span>{bedroom}</span></p>
                                        <p className='specs'><FaBath /> <span>{bathroom}</span></p>
                                        <p className='specs'><IoIosResize /> <span>{sqft} sqft</span> </p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
            <button className="view-more">View More Properties</button>
        </section>
    )
}
