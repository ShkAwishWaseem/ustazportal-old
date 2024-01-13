import React from 'react'
import "./Teachers.css"
import trainer1 from "./assests/img/trainers/trainer-1.jpg"
import trainer2 from "./assests/img/trainers/trainer-2.jpg"
import trainer3 from "./assests/img/trainers/trainer-3.jpg"
import { motion } from 'framer-motion'


function Teachers() {
  return (
     <>
     <section id="trainers" className="teachers container ">
          <h1 className='container_child'>Team Members</h1>
     <motion.div className="container" data-aos="fade-up"
       initial={{opacity:0 , y:120}}
       whileInView={{opacity:1 , y:0}}
       transition={{duration:1 , delay:0.3}}
     >
       <div className="row" data-aos="zoom-in" data-aos-delay="100">
         <div className="col-lg-4 col-md-6 d-flex align-items-stretch bg-color">
           <div className="member">
             <img src={trainer1} className="img-fluid" alt="..." />
             <div className="member-content">
               <h4>Walter White</h4>
               <span>Web Development</span>
               <p>
                 Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
               </p>
               <div className="social">
                 <a href="/"><i className="bi bi-twitter"></i></a>
                 <a href="/"><i className="bi bi-facebook"></i></a>
                 <a href="/"><i className="bi bi-instagram"></i></a>
                 <a href="/"><i className="bi bi-linkedin"></i></a>
               </div>
             </div>
           </div>
         </div>

         <div className="col-lg-4 col-md-6 d-flex align-items-stretch bg-color">
           <div className="member">
             <img src={trainer2} className="img-fluid" alt="..." />
             <div className="member-content">
               <h4>Sarah Jhinson</h4>
               <span>Marketing</span>
               <p>
                 Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
               </p>
               <div className="social">
                 <a href="/"><i className="bi bi-twitter"></i></a>
                 <a href="/"><i className="bi bi-facebook"></i></a>
                 <a href="/"><i className="bi bi-instagram"></i></a>
                 <a href="/"><i className="bi bi-linkedin"></i></a>
               </div>
             </div>
           </div>
         </div>

         <div className="col-lg-4 col-md-6 d-flex align-items-stretch bg-color">
           <div className="member">
             <img src={trainer3} className="img-fluid" alt="..." />
             <div className="member-content">
               <h4>William Anderson</h4>
               <span>Content</span>
               <p>
                 Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
               </p>
               <div className="social">
                 <a href="/"><i className="bi bi-twitter"></i></a>
                 <a href="/"><i className="bi bi-facebook"></i></a>
                 <a href="/"><i className="bi bi-instagram"></i></a>
                 <a href="/"><i className="bi bi-linkedin"></i></a>
               </div>
             </div>
           </div>
         </div>

       </div>

     </motion.div>
   </section>
     </>
  )
}

export default Teachers
