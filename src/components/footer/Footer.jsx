import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export function Footer() {
  return (
    <footer>
      <div class="footerContainer">
          <div class="socialIcons">
              <a href=""><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
              <a href=""><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
              <a href=""><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
          </div>
          <div class="footerNav">
              <ul><li><a href="">Home</a></li>
                  <li><a href="">Work</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Resumé</a></li>
              </ul>
          </div>
          
      </div>
      <div class="footerBottom">
          <p>copyright &copy;2024; made with blood, sweat, and react by <span class="designer">Rachel Liu</span></p>
      </div>
    </footer>
  )
}