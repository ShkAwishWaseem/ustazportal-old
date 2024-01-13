import React , {useEffect} from 'react'
import "./Price.css"


const Price = () => {
     useEffect(() => {
          window.scrollTo(0, 0)
        })
  return (
    <>
     <section class="price_plan_area section_padding_130_80" id="pricing">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-8 col-lg-6">
            <div class="section-heading text-center wow fadeInUp" data-wow-delay="0.2s" >
              <h6 className='fw-bold '>Pricing Plans</h6>
              <h3 className='heading_size'>Explore Budget-Friendly Offers on a Global Scale</h3>
              <p className='color'>Affordable online Quran learning with flexible schedules tailored to your preferences. Unleash enlightenment!</p>
              <div class="line"></div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-12 col-sm-8 col-md-6 col-lg-4 ">
            <div class="single_price_plan wow fadeInUp" data-wow-delay="0.2s" >
              <div class="title">
                <h3>Start Up</h3>
                <p>Start a trial</p>
                <div class="line"></div>
              </div>
              <div class="price">
                <h4>$0</h4>
              </div>
              <div class="description">
                <p><i class="lni lni-checkmark-circle"></i>Duration: 7days</p>
                <p><i class="lni lni-checkmark-circle"></i>10 Features</p>
                <p><i class="lni lni-close"></i>No Hidden Fees</p>
                <p><i class="lni lni-close"></i>100+ Video Tuts</p>
                <p><i class="lni lni-close"></i>No Tools</p>
              </div>
              <div class="button"><a class="btn btn-success btn-2 card_btn" href="/contact">Get Started</a></div>
            </div>
          </div>
          <div class="col-12 col-sm-8 col-md-6 col-lg-4">
            <div class="single_price_plan active wow fadeInUp" data-wow-delay="0.2s" >
              <div class="side-shape"><img src="https://bootdey.com/img/popular-pricing.png" alt=""/></div>
              <div class="title"><span>Popular</span>
                <h3>Small Business</h3>
                <p>For Small Business Team</p>
                <div class="line"></div>
              </div>
              <div class="price">
                <h4>$9.99</h4>
              </div>
              <div class="description">
                <p><i class="lni lni-checkmark-circle"></i>Duration: 3 Month</p>
                <p><i class="lni lni-checkmark-circle"></i>50 Features</p>
                <p><i class="lni lni-checkmark-circle"></i>No Hidden Fees</p>
                <p><i class="lni lni-checkmark-circle"></i>150+ Video Tuts</p>
                <p><i class="lni lni-close"></i>5 Tools</p>
              </div>
              <div class="button"><a class="btn btn-warning card_btn" href="/contact">Get Started</a></div>
            </div>
          </div>
          <div class="col-12 col-sm-8 col-md-6 col-lg-4">
            <div class="single_price_plan wow fadeInUp" data-wow-delay="0.2s" >
              <div class="title">
                <h3>Enterprise</h3>
                <p>Unlimited Possibilities</p>
                <div class="line"></div>
              </div>
              <div class="price">
                <h4>$49.99</h4>
              </div>
              <div class="description">
                <p><i class="lni lni-checkmark-circle"></i>Duration: 1 year</p>
                <p><i class="lni lni-checkmark-circle"></i>Unlimited Features</p>
                <p><i class="lni lni-checkmark-circle"></i>No Hidden Fees</p>
                <p><i class="lni lni-checkmark-circle"></i>Unlimited Video Tuts</p>
                <p><i class="lni lni-checkmark-circle"></i>Unlimited Tools</p>
              </div>
              <div class="button"><a class="btn btn-info card_btn" href="/contact">Get Started</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Price
