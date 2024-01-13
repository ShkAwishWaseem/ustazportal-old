import React , {useEffect}  from "react";
import "./Profile.css"
import about from "./assests/img/about.jpg"


function Profile() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <div>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <img src="https://images.pexels.com/photos/8489084/pexels-photo-8489084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid about-resize profile_image" alt="..." />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>
              Delivering Top-notch and <span className="color">Quality Online Quran</span> Teaching Worldwide
              </h3>
              <p className="fst-italic fw-bold  ">
              Providing Exceptional and Superior Quranic Instruction Worldwide!
              </p>
              <p className="">
              Embark on a premium Quranic learning journey with our exceptional online teaching services! Boasting the finest Quran tutors from around the globe, we are committed to delivering high-quality online Quran lessons to students worldwide. Our <span className="color fw-bold">mission</span> is to ensure a top-notch educational experience for learners of all ages, offering complimentary online Quran classes for both kids and adults, eliminating the need for inconvenient commutes. Seize the chance to master <span className="color fw-bold">Quranic reading within the tranquility of your home, no matter your geographical location.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
