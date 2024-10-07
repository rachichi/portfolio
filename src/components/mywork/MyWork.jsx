import React from 'react'
import './MyWork.css'
import greybox from '../../assets/greybox.png'
import { Link } from 'react-router-dom'

export function MyWork() {
  return (
    <div className="work">
      <h1>WORK</h1>
      <div className="card-container">
        <Link to = "/ProjectTemplate" className='card'>
            <img src={greybox} alt="placeholder image" />
            <div className="card-content">
              <div className="rachel-h3">Featured Project 1</div>
              <div className="rachel-body-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum expedita unde rerum debitis non quidem laudantium, ratione tempora fuga quasi beatae quae modi labore doloremque eius laborum quis. Doloremque, odio.</div>
            </div>
        </Link>
        <Link to = "/ProjectTemplate" className='card'>
            <img src={greybox} alt="placeholder image" />
            <div className="card-content">
              <div className="rachel-h3">Featured Project 1</div>
              <div className="rachel-body-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum expedita unde rerum debitis non quidem laudantium, ratione tempora fuga quasi beatae quae modi labore doloremque eius laborum quis. Doloremque, odio.</div>
            </div>
        </Link>
        <Link to = "/ProjectTemplate" className='card'>
            <img src={greybox} alt="placeholder image" />
            <div className="card-content">
              <div className="rachel-h3">Featured Project 1</div>
              <div className="rachel-body-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum expedita unde rerum debitis non quidem laudantium, ratione tempora fuga quasi beatae quae modi labore doloremque eius laborum quis. Doloremque, odio.</div>
            </div>
        </Link>
        <Link to = "/ProjectTemplate" className='card'>
            <img src={greybox} alt="placeholder image" />
            <div className="card-content">
              <div className="rachel-h3">Featured Project 1</div>
              <div className="rachel-body-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum expedita unde rerum debitis non quidem laudantium, ratione tempora fuga quasi beatae quae modi labore doloremque eius laborum quis. Doloremque, odio.</div>
            </div>
        </Link>
        <Link to = "/ProjectTemplate" className='card'>
            <img src={greybox} alt="placeholder image" />
            <div className="card-content">
              <div className="rachel-h3">Featured Project 1</div>
              <div className="rachel-body-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum expedita unde rerum debitis non quidem laudantium, ratione tempora fuga quasi beatae quae modi labore doloremque eius laborum quis. Doloremque, odio.</div>
            </div>
        </Link>
        <Link to = "/ProjectTemplate" className='card'>
            <img src={greybox} alt="placeholder image" />
            <div className="card-content">
              <div className="rachel-h3">Featured Project 1</div>
              <div className="rachel-body-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum expedita unde rerum debitis non quidem laudantium, ratione tempora fuga quasi beatae quae modi labore doloremque eius laborum quis. Doloremque, odio.</div>
            </div>
        </Link>
        <Link to = "/ProjectTemplate" className='card'>
            <img src={greybox} alt="placeholder image" />
            <div className="card-content">
              <div className="rachel-h3">Featured Project 1</div>
              <div className="rachel-body-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum expedita unde rerum debitis non quidem laudantium, ratione tempora fuga quasi beatae quae modi labore doloremque eius laborum quis. Doloremque, odio.</div>
            </div>
        </Link>
    </div>
  </div>
  )
}