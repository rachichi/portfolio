import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer>
      <div className="footerContainer">
          <div className="socialIcons">
            <ul>
              <a href="https://www.instagram.com/rachi.chi/" target="_blank"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
              <a href="https://www.linkedin.com/in/rachel-liu-2023/" target="_blank"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
              <a href="https://github.com/rachichi" target="_blank"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
            </ul>
          </div>
          <div className="footerNav">
              <ul>
                <li><Link to = "/" className='link'>Home</Link></li>
                <li><Link to = "/Work" className='link'>Work</Link></li>
                <li><Link to = "/About" className='link'>About</Link></li>
                <li><Link to = "https://www.autodesk.com/" target="_blank" className='link'>Resumé</Link></li>
              </ul>
          </div>
          
      </div>
      <div className="footerBottom">
          <p>copyright &copy; 2024; made with react by rachel</p>
      </div>
    </footer>
  )
}