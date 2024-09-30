import React from 'react'
import './MyWork.css'
import greybox from '../../assets/greybox.png'
import { Link } from 'react-router-dom'

export function MyWork() {
  return (
    <div className="work">
      <h1>WORK</h1>
      <div className="card-container">
        <div className="card">
          <img src={greybox} alt="placeholder image"/>
          <div className="card-content">
            <h3>Project Template</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa fugiat quos, incidunt, totam repellendus quas quidem rem accusamus, tempore adipisci quia voluptates magni consequatur architecto natus consequuntur. Ipsam, non.</p>
            <Link to ="/ProjectTemplate" className="btn">Read More</Link>
          </div>
        </div>
        <div className="card">
          <img src={greybox} alt="placeholder image"/>
          <div className="card-content">
            <h3>Card 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa fugiat quos, incidunt, totam repellendus quas quidem rem accusamus, tempore adipisci quia voluptates magni consequatur architecto natus consequuntur. Ipsam, non.</p>
            <a href="https://www.ucla.edu/" className="btn">Read More</a>
          </div>
        </div>
        <div className="card">
          <img src={greybox} alt="placeholder image"/>
          <div className="card-content">
            <h3>Card 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa fugiat quos, incidunt, totam repellendus quas quidem rem accusamus, tempore adipisci quia voluptates magni consequatur architecto natus consequuntur. Ipsam, non.</p>
            <a href="https://www.ucla.edu/" className="btn">Read More</a>
          </div>
        </div>
        <div className="card">
          <img src={greybox} alt="placeholder image"/>
          <div className="card-content">
            <h3>Card 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa fugiat quos, incidunt, totam repellendus quas quidem rem accusamus, tempore adipisci quia voluptates magni consequatur architecto natus consequuntur. Ipsam, non.</p>
            <a href="https://www.ucla.edu/" className="btn">Read More</a>
          </div>
        </div>
        <div className="card">
          <img src={greybox} alt="placeholder image"/>
          <div className="card-content">
            <h3>Card 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa fugiat quos, incidunt, totam repellendus quas quidem rem accusamus, tempore adipisci quia voluptates magni consequatur architecto natus consequuntur. Ipsam, non.</p>
            <a href="https://www.ucla.edu/" className="btn">Read More</a>
          </div>
        </div>
        <div className="card">
          <img src={greybox} alt="placeholder image"/>
          <div className="card-content">
            <h3>Card 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa fugiat quos, incidunt, totam repellendus quas quidem rem accusamus, tempore adipisci quia voluptates magni consequatur architecto natus consequuntur. Ipsam, non.</p>
            <a href="https://www.ucla.edu/" className="btn">Read More</a>
          </div>
        </div>
        <div className="card">
          <img src={greybox} alt="placeholder image"/>
          <div className="card-content">
            <h3>Card 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa fugiat quos, incidunt, totam repellendus quas quidem rem accusamus, tempore adipisci quia voluptates magni consequatur architecto natus consequuntur. Ipsam, non.</p>
            <a href="https://www.ucla.edu/" className="btn">Read More</a>
          </div>
        </div>
        <div className="card">
          <img src={greybox} alt="placeholder image"/>
          <div className="card-content">
            <h3>Card 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa fugiat quos, incidunt, totam repellendus quas quidem rem accusamus, tempore adipisci quia voluptates magni consequatur architecto natus consequuntur. Ipsam, non.</p>
            <a href="https://www.ucla.edu/" className="btn">Read More</a>
          </div>
        </div>
        <div className="card">
          <img src={greybox} alt="placeholder image"/>
          <div className="card-content">
            <h3>Card 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa fugiat quos, incidunt, totam repellendus quas quidem rem accusamus, tempore adipisci quia voluptates magni consequatur architecto natus consequuntur. Ipsam, non.</p>
            <a href="https://www.ucla.edu/" className="btn">Read More</a>
          </div>
        </div>
    </div>
  </div>
  )
}