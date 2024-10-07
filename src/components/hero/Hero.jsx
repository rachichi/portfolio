import { Link } from "react-router-dom"

import React from 'react'
import './Hero.css'
import homeImg from "../../assets/homeImageNoText.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

export function Hero(){
  return (
    <div className='hero'>
        <img src={homeImg}/>
        <p>Hi, I'm Rachel. I build data-driven solutions, specializing in large-scale platform transformations</p>
        <div className="hero-action">
            <div className="hero-resume">
              <Link to = "/Work" className='link'>Check out my work</Link>
              <FontAwesomeIcon className='resume-icon' icon={faArrowAltCircleRight}/>
            </div>
            <div className="hero-connect">
              <AnchorLink className='anchor-link' href='#ftwork'>or scroll for featured projects</AnchorLink>
              <FontAwesomeIcon className='connect-icon' icon={faArrowAltCircleDown}/>
            </div>
        </div>
    </div>
  )
}