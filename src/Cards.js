import React from "react";
import "./Cards.css";
import pic1 from "./assests/img/course-details-tab-1.png";
import pic2 from "./assests/img/course-details-tab-2.png";
import pic3 from "./assests/img/course-details-tab-3.png";
import { motion } from "framer-motion";

function Cards() {
  return (
    <motion.main
      className="d-flex flex-wrap container mt"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <div className="cards">
        <img src={pic1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Our Community</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere odit
            fuga, a voluptate non error, aliquid repellat delectus.
          </p>
        </div>
      </div>
      <div className="cards">
        <img src={pic2} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Special Child Care</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing quisquam
            consequatur dicta tempore nam ipsa natus culpa.
          </p>
        </div>
      </div>
      <div className="cards ">
        <img src={pic3} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Quran ClassNameclassNamees</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing optio quisquam
            consequatur dicta tempore nam ipsa natus culpa.
          </p>
        </div>
      </div>
    </motion.main>
  );
}

export default Cards;
