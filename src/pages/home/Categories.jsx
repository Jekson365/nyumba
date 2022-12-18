import React from 'react'
import { Link } from 'react-router-dom'
import './home.scss'

export const Categories = () => {
    const cats = [
        {
            id: 1,
            title: "properties",
            img: "https://uploads-ssl.webflow.com/62fa691cc55f6309ef33ee6a/62ffa139ad862c760cfe0e4d_lissete-laverde-7OFTxbGWqwk-unsplash.webp"
        },
        {
            id: 1,
            title: "about",
            img: "https://uploads-ssl.webflow.com/62fa691cc55f6309ef33ee6a/62ffa1cfe804db3af7dcfc42_naomi-ellsworth-EMPLSuvDuhQ-unsplash.webp"
        },
        {
            id: 1,
            title: "contact",
            img: "https://uploads-ssl.webflow.com/62fa691cc55f6309ef33ee6a/62ffa5543788e8d3b2a8d8c3_jason-goodman-6awfTPLGaCE-unsplash.webp"
        },
        {
            id: 1,
            title: "blog",
            img: "https://uploads-ssl.webflow.com/62fa691cc55f6309ef33ee6a/62ffa5539267bd78326b7f65_toa-heftiba-FV3GConVSss-unsplash.webp"
        },
    ]
    return (
        <>
            <div className="cat-wrapper d-flex justify-content-center flex-wrap container-fluid w-100"
                style={{ "marginTop": "100px" }}
            >
                {cats.map((each) => {
                    const { id, title, img } = each
                    return (
                        <div
                            key={id}
                            className="cat-item col-md-4 cat d-flex align-items-center justify-content-center"
                            style={{
                                "backgroundImage": `url('${img}')`,
                                "height": "500px"
                            }}
                        >
                            <Link className='h1 cat-link'
                            to={`/${title}`}
                            >{title}</Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
