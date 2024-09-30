import React from 'react'
import './AboutMe.css'
import profile_img from '../../assets/about_profile.svg'

export function AboutMe(){
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>ABOUT ME</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, debitis mollitia dolores dolorum saepe dicta eius, corrupti ipsum quos labore alias rem quo beatae dolore id ipsa, dolorem officiis iste?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati minima et distinctio rerum unde tempore voluptatum aliquid, deserunt eligendi consectetur? Assumenda iste molestias quisquam ullam officia. Labore, est maiores? Itaque!</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>SQL</p><hr style={{width: "80%"}}/></div>
                    <div className="about-skill"><p>PowerBI</p><hr style={{width: "70%"}}/></div>
                    <div className="about-skill"><p>Python</p><hr style={{width: "40%"}}/></div>
                    <div className="about-skill"><p>Figma</p><hr style={{width: "80%"}}/></div>
                </div>
            </div>
        </div>
    </div>
  )
}