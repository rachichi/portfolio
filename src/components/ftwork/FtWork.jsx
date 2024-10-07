import React from 'react'
import './FtWork.css'
import mywork_data from '../../assets/mywork_data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

export function FtWork() {
  return (
    <div id='ftwork' className="mywork">
        <div className="mywork-title">
            <h1>Featured projects</h1>
        </div>
        <div className="mywork-container">
            {mywork_data.map((work, index)=>{
                return <img key={index} src={work.w_img} alt="" />
                })}
        </div>
        <div className="mywork-showmore">
            <Link to = "/Work" className='link'>Show More</Link>
            <FontAwesomeIcon className='resume-icon' icon={faArrowAltCircleRight}/>
        </div>
    </div>
  )
}