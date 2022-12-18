import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../main.scss'
import { FaBars } from 'react-icons/fa'


const logo = 'https://uploads-ssl.webflow.com/62fa691cc55f6309ef33ee6a/631367d4e19fbb776f79ab90_Nyumba_Logo-removebg-preview.webp'



export const Header = () => {
    const [nav,setNav] = useState("")
    return (
        <>
            <header className='d-flex flex-row align-items-center justify-content-between'>
                <Link to={'/home'}>
                    <img src={logo} className='logo' />
                </Link>
                <nav className={`nav-bar ${nav}`}>
                    <li className='nav-item'>
                        <Link to={'/home'}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/about'}>About Us</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/blog'}>Blog</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                    <li>
                        <button className='view-proprs'>View Properties</button>
                    </li>
                </nav>
                <li className='bars' onClick={()=> setNav(nav == 'de-active-bar' ? "active-bar" : "de-active-bar")}>
                    <FaBars />
                </li>
            </header>
        </>
    )
}
