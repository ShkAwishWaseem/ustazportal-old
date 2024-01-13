import React from 'react'
import "./Banner.css"
import bg from "./assests/bg.mp4"
import { Link } from 'react-router-dom'
import arrow from "./assests/img/pngegg.png"


function Banner() {

  const ScrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
     <div className="banner">
          <div className="gradient"></div>
     <video autoPlay loop muted>
       <source src={bg} />
     </video>
     <div className="content">
       <h1>We Provide <span className='green'>Quran Teaching</span> Classes and Courses</h1>
       <p>At our institute, we are dedicated to providing comprehensive Quran teaching classes and courses. Our experienced and qualified instructors are passionate about spreading the knowledge of the Quran.</p>
       <button ><Link to="/course">Courses</Link></button>
        <button id="myBtn" onClick={ScrollToTop}>
          <img src={arrow} alt="..." />
        </button>
     </div>
   </div>
   
  )
}

export default Banner
