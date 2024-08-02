import React, { useEffect } from "react";
import "./Policy.css";


const Policy = () => {
     useEffect(() => {
          window.scroll(0,0)
     },[])
  return (
    <div className="container mx-auto mt-5 policy-parent" >
      <h1 className="mb-4">
        Terms <span className="color"> And </span>Conditions
      </h1>
      <p>
        Welcome to <span className="color">UstazPortal!</span> We're excited to
        offer you a complimentary trial of our classes to help you determine if
        we're the right fit for you. Following the trial, you'll need to decide
        whether to continue with our lessons. If you choose to proceed, charges
        will be due monthly in advance, with payments made in the last week of
        each month for the upcoming month.
      </p>
      <ul>
        <li>
          We offer a complimentary trial class for you to explore whether we
          align with your needs and preferences.
        </li>
        <li>
          Once you finish the trial lessons with UstazPortal, it's essential to
          decide whether you'd like to continue with the lessons. If you opt to
          proceed, payment for the subsequent month is due in advance during the
          last week of each month, ensuring a seamless continuation of your
          learning journey.
        </li>
        <li>
          If you prefer to maintain your course schedule and continue with the
          same tutor when classes resume, UstazPortal will apply a full student
          cost for reserving the slot with your chosen tutor.
        </li>
        <li>
          Any absence is considered paid, and there won't be any makeup classes
          for missed sessions. The payment applies as long as you stick to the
          same schedule and tutor since we cannot allocate that time to other
          learners.
        </li>
        <li>
          If a student misses a class without prior notice (except in
          emergencies), no attendance will be recorded, and rescheduling of
          makeup classes won't be facilitated. However, makeup sessions can be
          organized with the same tutor or another, subject to availability at a
          mutually agreed-upon time.
        </li>
        <li>
          "Do not disclose your personal information, such as WhatsApp number,
          email address, or credit card number, to any of our tutors."
        </li>
        <li>
          If you need to skip a class, please notify your tutor in advance via
          Skype or email at least 4 hours before the scheduled time.
        </li>
        <li>
          If a student is absent for more than two weeks without prior notice,
          the tutor reserves the right to discontinue the courses, and no
          compensation will be provided as outlined in our Terms of Service.
        </li>
        <li>
          We reserve the right to make adjustments to teaching assignments as
          necessary, ensuring a commitment to maintaining the highest standards
          of education.
        </li>
        <li>
          Do not disclose any personal assets or contact information to tutors,
          as we cannot be held responsible for any resulting loss or damage.
        </li>
        <li>
          The tuition fees for students are subject to potential variations in
          accordance with our evolving regulations and terms of service over
          time.
        </li>
        <li>
          Tutors at UstazPortal enjoy paid vacations during both Eid occasions,
          and these are the only scheduled breaks for teachers throughout the
          year. Please note that there will be no makeup lessons or refunds for
          any vacations taken by the tutors.
        </li>
        <li>
          Our terms and conditions apply to both students and tutors, ensuring a
          fair and transparent learning environment.
        </li>
        <li className="fw-bold color mt-5 h6">
          Note: The Terms and Conditions can be changed and updated at any time
          depending upon the situations and circumstances.
        </li>
      </ul>
    </div>
  );
};

export default Policy;
