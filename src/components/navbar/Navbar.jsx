import { Link } from "react-router-dom"

import React, { useRef, useState } from 'react'
import './Navbar.css'
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
            <div className="logo"><Link to = "/" className='link'>Rachel 静如 Liu</Link></div>
            <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close' />
                <li><Link to = "/" className='link'>Home</Link></li>
                <li><Link to = "/Work" className='link'>Work</Link></li>
                <li><Link to = "/About" className='link'>About</Link></li>
                <li><Link to = "https://www.autodesk.com/" target="_blank" className='link'>Resumé</Link></li>
            </ul>
        </div>
    )
}