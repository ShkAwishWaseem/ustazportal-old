import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
   

  return (
    <div className="footer">
      <div className="mt-5">
      <div className="bg">
      </div>
        <footer className="text-center text-lg-start text-dark">
          <section className="d-flex justify-content-between p-4 text-white">
            <div>
              <a href="/" className="text-white me-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="text-white me-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/" className="text-white me-4">
                <i className="fab fa-google"></i>
              </a>
              <a href="/" className="text-white me-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/" className="text-white me-4">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="/" className="text-white me-4">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section>

          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">USTAZPORTAL</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto hr-color" />
                  <p>
                  We are an online Quran platform bridging tutors and students, fostering a seamless learning experience.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Courses</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                  <p>  
                    <Link to="/course" className="fw-bold color text-decoration-none">
                      Nazra
                    </Link>
                  </p>
                  <p>  
                    <Link to="/course" className="fw-bold color text-decoration-none">
                      Tajweed
                    </Link>
                  </p>
                  <p>
                  <Link to="/course" className="fw-bold color text-decoration-none">
                      Memorization
                    </Link>
                  </p>
                  <p>
                    <Link to="/course" className="fw-bold color text-decoration-none">
                      Arabic Learning
                    </Link>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Social links</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                  
                  <a href="https://www.instagram.com/ustazportal/" className="fw-bold color text-decoration-none" target="_blank" rel="noreferrer" >
                      Instagram
                    </a>
                  </p>
                  <p>
                  <a href="/courses" className="fw-bold color text-decoration-none">
                      Facebook
                    </a>
                  </p>
                  <p>
                  <a href="/courses" className="fw-bold color text-decoration-none">
                      LinkedIn
                    </a>
                  </p>
                  <p>
                  <a href="/courses" className="fw-bold color text-decoration-none">
                      Fiverr
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <i className="fas fa-home mr-3"></i> McLean, Virginia, US
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> Ustazportal@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> +1 (929) 553-9388
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="text-center p-3 copy bg">
            © 2024 Copyright:  
             <a className="text-dark" href="https://www.instagram.com/ustazportal/">
              Ustazportal.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
