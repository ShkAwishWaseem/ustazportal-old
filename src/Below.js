import React from 'react'
import "./Below.css"
import { Link } from 'react-router-dom'
import arrow from "./assests/img/pngegg.png"

const Below = () => {
     const ScrollToTop = () => {
          window.scrollTo(0, 0)
        }
  return (
    <div className="parent_below">
                    <div className="below-logo">
                         logo
                    </div>
                    <div className="below-btn">
                         <button>Get a free demo</button>
                    </div>
                    <div className="arrow-up">
                    <button id="myBtn" onClick={ScrollToTop}>
          <img src={arrow} alt="..." />
        </button>
                    </div>
    </div>
  )
}

export default Below
