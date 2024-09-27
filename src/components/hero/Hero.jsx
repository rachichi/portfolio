import { Link } from "react-router-dom"

import React from 'react'
import './Hero.css'
import homeImg from "../../assets/homeImageNoText.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'

export function Hero(){
  return (
    <div id='home' className='hero'>
        <img src={homeImg}/>
        <p>Hi, I'm Rachel. I build data-driven solutions, specializing in large-scale platform transformations</p>
        <div className="hero-action">
            <div className="hero-resume"><Link to = "/Projects" className='link'>Check out my work</Link></div>
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>or scroll for featured projects</AnchorLink></div>
        </div>
    </div>
  )
}