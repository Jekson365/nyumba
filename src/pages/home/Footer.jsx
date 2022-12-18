import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import './home.scss'

export const Footer = () => {
    return (
        <>
            <footer className="text-center text-lg-start text-muted"
                style={{ "background": "red" }}
            >
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <img 
                                    className='w-75'
                                    src="https://uploads-ssl.webflow.com/62fa691cc55f6309ef33ee6a/631367d4e19fbb776f79ab90_Nyumba_Logo-removebg-preview.webp" alt="" />
                                </h6>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <p>
                                    <a href="#!" className="text-reset">Home</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">About us</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Blog</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Contact</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Properties</a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <p>
                                    <a href="#!" className="text-reset">Privaciy and Policty</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Terms & conditions</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Style Guide</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Licenses</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Changelog</a>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <p>
                                    <a href="#!" className="text-reset">Error 404</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Password</a>
                                </p>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div className='iconsss'>
                        <FaFacebook/>
                        <FaInstagram/>
                        <FaTwitter/>
                        <FaYoutube/>
                        <FaLinkedin/>
                    </div>
                </section>
            </footer>
        </>
    )
}
