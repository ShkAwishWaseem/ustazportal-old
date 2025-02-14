import React from 'react'
import "./Choose.css"
import { motion } from 'framer-motion'

function Choose() {

  return (
     <motion.div className="container mt"
     initial={{opacity:0}}
     whileInView={{opacity:1}}
     transition={{duration:1 , delay:0.3}}
    
     
     
     >
     <div className="text-center mb-2-8 mb-lg-6">
         <h2 className="display-18 display-md-16 display-lg-14 font-weight-700">Why choose <strong className="span_color font-weight-700">Us</strong></h2>
         <span className='span_color s'>The trusted source for why choose us</span>
     </div>
     <div className="row align-items-center">
         <div className="col-sm-6 col-lg-4 mb-2-9 mb-sm-0">
             <div className="pr-md-3">
                 <div className="text-center text-sm-right mb-2-9">
                     <div className="mb-4 mt-4">
                         <img src="https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." className="rounded-circle resize"/>
                     </div>
                     <h4 className="sub-info color">Expertise and Accreditation</h4>
                     <p className="display-30 mb-0">Our team comprises highly qualified and certified Online Quran tutors who possess in-depth knowledge of Islamic teachings.</p>
                 </div>
                 <div className="text-center text-sm-right mt-4">
                     <div className="mb-4">
                         <img src="https://images.pexels.com/photos/7957076/pexels-photo-7957076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." className="rounded-circle resize"/>
                     </div>
                     <h4 className="sub-info color">Flexible Learning Environment</h4>
                     <p className="display-30 mb-0">You have the freedom to choose your study hours and can access our classes from the comfort of your home. </p>
                 </div>
             </div>
         </div>
         <div className="col-lg-4 d-none d-lg-block">
             <div className="why-choose-center-image">
                 <img src="https://images.pexels.com/photos/318451/pexels-photo-318451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." className="rounded-circle main-img"/>
             </div>
         </div>
         <div className="col-sm-6 col-lg-4">
             <div className="pl-md-3">
                 <div className="text-center text-sm-left mb-2-9">
                     <div className="mb-4 mt-4">
                         <img src="https://images.pexels.com/photos/39396/hourglass-time-hours-sand-39396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." className="rounded-circle resize"/>
                     </div>
                     <h4 className="sub-info color">Personalized Learning Approach</h4>
                     <p className="display-30 mb-0">We understand that every learner is unique, with distinct learning styles and preferences. </p>
                 </div>
 
                 <div className="text-center text-sm-left mt-4">
                     <div className="mb-4">
                         <img src="https://images.pexels.com/photos/796607/pexels-photo-796607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." className="rounded-circle resize"/>
                     </div>
                     <h4 className="sub-info color">Interactive and Engaging Sessions</h4>
                     <p className="display-30 mb-0">Learning the Quran should be an engaging and interactive experience.</p>
                 </div>
             </div>
         </div>
     </div>
 </motion.div>
 
  )
}

export default Choose
