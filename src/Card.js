import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'


const Card = ({title,text,img_source}) => {
  return (
    <>
      <div className="col-md-4 mb-4">
            <div className="card">
                <img src={img_source} className="card-img-top" alt="logo"/>
                <div className="card-body">
                    <h5 className="card-title color fw-bold">{title}</h5>
                    <p className="card-text text-black">{text}</p>
                    <Link to="/enroll" className="btn btn-primary card_btn">Enroll now</Link>
                </div>
            </div> 
    </div>
    </>
  )
}

export default Card
