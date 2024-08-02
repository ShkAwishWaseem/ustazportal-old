import React, { useEffect } from "react";
import "./Faqs.css";

const Faqs = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="container mx-auto mt-5">
      <div className="first-child">
        <h1 className="fw-bold text-center">
          FAQ's for Online Quran Class and{" "}
          <span className="color">Courses</span>
        </h1>
        <div className="faqs-parent ">
          <div className="accordion container" id="accordionExample">
            <h2 className="fw-bold">
              For <span className="color">Students and Parents</span>
            </h2>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  At what age is it okay for kids to begin taking Quran lessons
                  online?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body color">
                  Children who are around 5-6 years old can begin online Quran
                  classes. However, the best time to start may vary based on
                  each child's ability to read and learn.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  How many Quran classes per week do you suggest for effective
                  learning?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body color">
                  We suggest taking Quran classes online 3 to 5 times a week.
                  But, if you prefer a different schedule or want to learn at
                  your own speed, we can adjust it accordingly.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Do online classes happen with many people together, or is it
                  just one person at a time?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body color">
                  We offer private, one-on-one sessions to make learning more
                  personal and tailored just for you.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  How can I learn the Quran by heart online?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body color">
                  You can learn and remember the Quran by joining our course on
                  memorizing it.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  How can I learn the Quran by heart online?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body color">
                  You can learn and remember the Quran by joining our course on
                  memorizing it.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  Can you read online Quran without Wudu?
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body color">
                  You can read the Quran online without needing to do wudu. But,
                  if you have a physical copy of the Quran, it's important to
                  perform ablution before reading it.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
