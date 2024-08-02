import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import hamburger from './assests/img/hamburger.png';

function Header() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      const navbarNav = document.getElementById('navbarCollapse');
      const toggleButton = document.querySelector('.navbar-toggler');

      if (!navbarNav.contains(event.target) && !toggleButton.contains(event.target)) {
        setNavbarOpen(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleToggleClick = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  return (
    <>
<div className="nav-color p-2 header nav-text">
      <nav className="navbar navbar-expand-lg nav nav-pills nav-stacked nav-static ">
        <div className="container-fluid nav">
          <Link to="/" className="navbar-brand">
            USTAZPORTAL
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            onClick={handleToggleClick}
          >
            <img src={hamburger} alt="..." className="hamburger" />
          </button>
          <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarCollapse">
            <div className="navbar-nav">
              <Link to="/" className="nav-text nav-item nav-link hover-text" onClick={closeNavbar}>
                Home
              </Link>
              <Link to="/profile" className="nav-text nav-item nav-link hover-text" onClick={closeNavbar}>
                Profile
              </Link>
              <Link to="/trainers" className="nav-text nav-item nav-link hover-text" onClick={closeNavbar}>
                Trainers
              </Link>
              <Link to="/course" className="nav-text nav-item nav-link hover-text" onClick={closeNavbar}>
                Courses
              </Link>
              <Link to="/contact" className="nav-text nav-item nav-link hover-text" onClick={closeNavbar}>
                Contact
              </Link>

              <div className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle nav-text hover-text"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <div className="dropdown-menu bg" aria-labelledby="navbarDropdown">
                  <Link to="/price" className="dropdown-item" onClick={closeNavbar}>
                    Prices
                  </Link>
                  <Link to="/demo" className="dropdown-item" onClick={closeNavbar}>
                    Request a Demo
                  </Link>
                  <Link to="/faqs" className="dropdown-item" onClick={closeNavbar}>
                    FAQs
                  </Link>
            
                </div>
              </div>
              <div className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle nav-text hover-text"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  More
                </a>
                <div className="dropdown-menu bg" aria-labelledby="navbarDropdown">
                  <Link to="/refund" className="dropdown-item" onClick={closeNavbar}>
                    Refund Policy
                  </Link>
                  <Link to="/policy" className="dropdown-item" onClick={closeNavbar}>
                    Our policy
                  </Link>
                  <Link to="/privacy" className="dropdown-item" onClick={closeNavbar}>
                  Privacy policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
}

export default Header;
