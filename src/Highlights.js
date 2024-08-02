import React, { useEffect, useState } from "react";
import "./Highlights.css";
import { motion } from "framer-motion";
import Card from "./Card";
import { db, get, ref } from "./firebase";

function Highlights() {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch data from Firebase
    const fetchData = async () => {
      try {
        const coursesRef = ref(db, 'courses');
        const snapshot = await get(coursesRef);
        const data = snapshot.val();

        if (data) {
          const cardArray = Object.entries(data).map(([key, value]) => ({
            id: key,
            ...value,
          }));
          setCardData(cardArray);
        }
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container card_container mt-5">
        <div className="row">
          <div className="col text-center mb-5 bg text-white p-3 container_child">
            <h1 className="display-4">Courses we Offer</h1>
            <p className="lead">
            Explore our courses. We update our website daily for an enhanced learning experience.
            </p>
          </div>
        </div>
        <motion.div
          className="container"
          data-aos="fade-up"
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {loading ? (
            // Show loader when data is being fetched
            <div className="text-center">Loading...</div>
          ) : (
            // Show cards when data is fetched
            <div className="row">
              {cardData.map((item) => (
                <Card key={item.id} title={item.title} text={item.text} img_source={item.img_source} />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </>
  );
}

export default Highlights;
