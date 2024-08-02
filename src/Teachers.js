import React from 'react';
import { motion } from 'framer-motion';
import "./Teachers.css"

const Teachers = () => {
  return (
    <motion.div
      data-aos="fade-up"
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <div className="accordion container">
        <h1 className='demo_heading color text-center'>Frequently Asked Questions</h1>
        <div className="accordion-item">
          <input type="checkbox" id="section1" />
          <label className="accordion-header" htmlFor="section1">
          Who can enroll in online Quran class?
          </label>
          <div className="accordion-content">
            <p className='color'>There are no age restrictions when you enroll with us. Our online Quran classes are open to individuals of all ages, providing benefits to everyone.</p>
          </div>
        </div>

        <div className="accordion-item">
          <input type="checkbox" id="section2" />
          <label className="accordion-header" htmlFor="section2">
          What are the fundamental prerequisites for beginners to join online Quran classes?
          </label>
          <div className="accordion-content">
            <p className='color'>No formalities required—just ensure you have a stable internet connection, your personal laptop, and a serene environment to participate in online Quran lessons.</p>
          </div>
        </div>


        <div className="accordion-item">
          <input type="checkbox" id="section3" />
          <label className="accordion-header" htmlFor="section3">
          What are the consequences if I happen to miss an online Quran class within a Quranic academy?
          </label>
          <div className="accordion-content">
            <p className='color'>Don't worry! If you miss any Quran class, you can easily reschedule it. Additionally, we provide recordings of previous classes for your convenience.</p>
          </div>
        </div>
        <div className="accordion-item">
          <input type="checkbox" id="section4" />
          <label className="accordion-header" htmlFor="section4">
          Is there a specific age restriction for enrolling in the Quran course?
          </label>
          <div className="accordion-content">
            <p className='color'>Absolutely not! When you choose to learn the Quran with us, age becomes irrelevant. There is no age limit when it comes to embracing the teachings of the Quran with our dedicated guidance.</p>
          </div>
        </div>

        <div className="accordion-item">
          <input type="checkbox" id="section5" />
          <label className="accordion-header" htmlFor="section5">
          What is the average duration for completing online Quran courses?
          </label>
          <div className="accordion-content">
            <p className='color'>The duration to complete the online Quran course varies based on the capabilities of the student. On average, students typically take anywhere from a few months to a year to successfully finish the course.</p>
          </div>
        </div>


        
      </div>
    </motion.div>
  );
};

export default Teachers;
