import { Link } from "react-router-dom"

import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

export function Navbar() {

    const [menu,setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right="0";
    }
    const closeMenu = () => {
        menuRef.current.style.right="-350px";
    }

    return(
        <div className="navbar">
            <div class="logo">Rachel 静如 Liu</div>
            <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close' />
                <li><Link to = "/" className='anchor-link'>Home</Link></li>
                <li><Link to = "/Projects" className='anchor-link'>Projects</Link></li>
                <li><Link to = "/About" className='anchor-link'>About</Link></li>
                <li><Link to = "https://www.autodesk.com/" target="_blank" className='anchor-link'>Resumé</Link></li>
            </ul>
        </div>
    )
}