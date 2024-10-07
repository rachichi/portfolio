import React from 'react'
import './FtWork.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import greybox from '../../assets/greybox.png'

export function FtWork() {
  return (
    <section id='ftwork' className="mywork">
      <div className="container-2">
          <div className="rachel-h2 white">Featured Projects</div>
          <Link to = "/ProjectTemplate" className='link'>
            <div className="column-4 proj-1">
              <img src={greybox} alt="" />
              <div className="grid-2-x-2">
                <div className="rachel-h3 light-pink">Featured Project 1</div>
                <div className="rachel-body-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum expedita unde rerum debitis non quidem laudantium, ratione tempora fuga quasi beatae quae modi labore doloremque eius laborum quis. Doloremque, odio.</div>
              </div>
              <div className="tag-wrapper-2">
                <div className="tag-2">
                  <div className="text-4">Product Design</div>
                </div>
                <div className="tag-2">
                  <div className="text-4">User Research</div>
                </div>
              </div>
            </div>
          </Link>

          <Link to = "/ProjectTemplate" className='link'>
            <div className="column-4 proj-1">
              <img src={greybox} alt="" />
              <div className="grid-2-x-2">
                <div className="rachel-h3 white">Featured Project 2</div>
                <div className="rachel-body-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum expedita unde rerum debitis non quidem laudantium, ratione tempora fuga quasi beatae quae modi labore doloremque eius laborum quis. Doloremque, odio.</div>
              </div>
              <div className="tag-wrapper-2">
                <div className="tag-2">
                  <div className="text-4">Product Design</div>
                </div>
                <div className="tag-2">
                  <div className="text-4">User Research</div>
                </div>
              </div>
            </div>
          </Link>

          <Link to = "/ProjectTemplate" className='link'>
            <div className="column-4 proj-1">
              <img src={greybox} alt="" />
              <div className="grid-2-x-2">
                <div className="rachel-h3 white">Featured Project 3</div>
                <div className="rachel-body-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum expedita unde rerum debitis non quidem laudantium, ratione tempora fuga quasi beatae quae modi labore doloremque eius laborum quis. Doloremque, odio.</div>
              </div>
              <div className="tag-wrapper-2">
                <div className="tag-2 ">
                  <div className="text-4">Product Design</div>
                </div>
                <div className="tag-2">
                  <div className="text-4">User Research</div>
                </div>
              </div>
            </div>
          </Link>

          <div className="mywork-showmore">
          <Link to = "/Work" className='link'>Show More</Link>
          <FontAwesomeIcon icon={faArrowAltCircleRight}/>
        </div>
        </div>

        
      
    </section>
  )
}