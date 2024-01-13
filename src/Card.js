import React from 'react'
import "./Card.css"


const Card = ({title,paragraph,img_source}) => {
  return (
    <>
      <div className="col-md-4 mb-4">
            <div className="card">
                <img src={img_source} className="card-img-top" alt="logo"/>
                <div className="card-body">
                    <h5 className="card-title color fw-bold">{title}</h5>
                    <p className="card-text text-black">{paragraph}</p>
                    <a href="/demo" className="btn btn-primary card_btn">Learn More</a>
                </div>
            </div> 
    </div>
    </>
  )
}

export default Card
