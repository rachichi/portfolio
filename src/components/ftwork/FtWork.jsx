import React from 'react'
import './FtWork.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

export function FtWork() {
  return (
    <div id='work' className="mywork">
        <div className="mywork-title">
            <h1>Featured projects</h1>
        </div>
        <div className="mywork-container">
            {mywork_data.map((work, index)=>{
                return <img key={index} src={work.w_img} alt="" />
                })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}