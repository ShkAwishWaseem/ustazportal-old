import React , {useEffect} from 'react'
import "./Price.css"
import { Link } from 'react-router-dom'



const Price = () => {
     useEffect(() => {
          window.scrollTo(0, 0)
        })
  return (
    <>
     <section className="price_plan_area section_padding_130_80" id="pricing">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-lg-6">
            <div className="section-heading text-center wow fadeInUp" data-wow-delay="0.2s" >
              <h6 classNameName='fw-bold '>Pricing Plans</h6>
              <h3 classNameName='heading_size'>Explore Budget-Friendly Offers on a Global Scale</h3>
              <p classNameName='color'>Affordable online Quran learning with flexible schedules tailored to your preferences. Unleash enlightenment!</p>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4 ">
            <div className="single_price_plan wow fadeInUp" data-wow-delay="0.2s" >
              <div className="title">
                <h3>Ustazportal</h3>
                <p>Start a free trial</p>
                <div className="line"></div>
              </div>
              <div className="price">
                <h4>$0</h4>
              </div>
              <div className="description">
                <p><i className="lni lni-checkmark-circle"></i>Duration: 7days</p>
                <p><i className="lni lni-checkmark-circle"></i>3 Features</p>
                <p className='color_price'><i className="lni lni-close "></i>Learn Quran Reading</p>
                <p className='color_price'><i className="lni lni-close "></i>Salah/Kalma/Dua</p>
                <p className='color_price'><i className="lni lni-close "></i>Basic Tajweed Rules</p>
              </div>
              <div className="button"><Link className="btn btn-success btn-2 card_btn" to="/enroll">Enroll now</Link></div>
            </div>
          </div>
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="single_price_plan active wow fadeInUp" data-wow-delay="0.2s" >
              <div className="side-shape"><img src="https://bootdey.com/img/popular-pricing.png" alt=""/></div>
              <div className="title"><span>Popular</span>
                <h3>Small Business</h3>
                <p>For Small Business Team</p>
                <div className="line"></div>
              </div>
              <div className="price">
                <h4>$9.99</h4>
              </div>
              <div className="description">
                <p><i className="lni lni-checkmark-circle"></i>Duration: 3 Month</p>
                <p><i className="lni lni-checkmark-circle"></i>50 Features</p>
                <p><i className="lni lni-checkmark-circle"></i>No Hidden Fees</p>
                <p><i className="lni lni-checkmark-circle"></i>150+ Video Tuts</p>
                <p><i className="lni lni-close"></i>5 Tools</p>
              </div>
              <div className="button"><Link className="btn btn-warning card_btn" to="/enroll">Enroll</Link></div>
            </div>
          </div>
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="single_price_plan wow fadeInUp" data-wow-delay="0.2s" >
              <div className="title">
                <h3>Enterprise</h3>
                <p>Unlimited Possibilities</p>
                <div className="line"></div>
              </div>
              <div className="price">
                <h4>$49.99</h4>
              </div>
              <div className="description">
                <p><i className="lni lni-checkmark-circle"></i>Duration: 1 year</p>
                <p><i className="lni lni-checkmark-circle"></i>Unlimited Features</p>
                <p><i className="lni lni-checkmark-circle"></i>No Hidden Fees</p>
                <p><i className="lni lni-checkmark-circle"></i>Unlimited Video Tuts</p>
                <p><i className="lni lni-checkmark-circle"></i>Unlimited Tools</p>
              </div>
              <div className="button">
                <Link className="btn btn-info card_btn" to="/enroll">Enroll now</Link></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Price
