import React from 'react'

export const Contact = () => {
    return (
        <>
            <div className="contact w-100 position-relative d-flex align-items-center flex-column justify-content-center"
                style={{
                    "minHeight": "100vh",
                    'backgroundImage': `url("https://uploads-ssl.webflow.com/62fa691cc55f6309ef33ee6a/6301c1db29395118cd8d0e29_lycs-architecture-kUdbEEMcRwE-unsplash.webp")`,
                    'backgroundSize': "cover"
                }}
            >
                <div className="overlay"></div>
                <div className="contact-content d-flex flex-column align-items-center justify-content-center">

                    <h1 className="h1">Join Our Netowrk</h1>
                    <p className="fs-6">
                        Keep up to date with the latest market trends and opportunities
                    </p>
                    <div className="form-group mt-5 d-flex flex-column align-items-center">
                        <p className="fs-5">Email Address</p>
                        <input type="email" placeholder='enter your email address' />
                        <button type='submit'>submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}
