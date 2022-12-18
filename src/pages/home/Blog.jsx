import React from 'react'

export const Blog = () => {
    const blog = [
        {
            id: 1,
            date: "september 23,2022",
            title: "10 things you should know before buying house",
            img: "https://uploads-ssl.webflow.com/62fa81dfa1e5c446a25769a5/62fa832e5d155467ce560e4d_sidekix-media-I58Xjx0zzBQ-unsplash-p-800.jpg",
        },
        {
            id: 2,
            date: "september 23,2022",
            title: "is the real market curshing?",
            img: "https://uploads-ssl.webflow.com/62fa81dfa1e5c446a25769a5/6300da7e43691059963088eb_ronnie-george-9gGvNWBeOq4-unsplash-p-800.jpg",
        },
        {
            id: 3,
            date: "september 23,2022",
            title: "Why a house with a pool is good investment",
            img: "https://uploads-ssl.webflow.com/62fa81dfa1e5c446a25769a5/6300db197c69a23fcb58ef0e_digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash-p-800.jpg",
        },
        {
            id: 4,
            date: "september 23,2022",
            title: "5 thins nobody told you about being a home owner",
            img: "https://uploads-ssl.webflow.com/62fa81dfa1e5c446a25769a5/62fcf44a440f2dfb257d8303_kara-eads-L7EwHkq1B2s-unsplash-p-800.jpg",
        },
    ]
    return (
        <>
            <div className="container flex-row cs d-flex align-items-start justify-content-center"
                style={{ "maxWidth": "1300px", 'marginTop': "220px" }}>
                <div className="col-md-4">
                    <h1>From Our <strong>Blog</strong></h1>
                </div>
                <div className="col-md-8 d-flex flex-wrap justify-content-center">
                    {blog.map((each) => {
                        const { id, title, date, img } = each
                        return (
                            <div className="box bg-danger m-2 position-relative"
                                key={id}
                                style={{ "width": "400px", 'height': "350px",'overflow':"hidden" }}>
                                <img src={img} className='das w-100 h-100 object-cover position-absolute top-0' />
                                <div className="content-box">
                                    <span className='p'>{date}</span>
                                    <span className="fs-6"><strong>{title}</strong></span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
