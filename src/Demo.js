import React, { useState, useEffect } from 'react';
import { app } from './firebase';
import { getDatabase, ref, push } from 'firebase/database';
import "./Demo.css"

const SuccessComponent = () => {
  return (
    <div className="alert alert-success mt-3 sticky-top mt-0" role="alert">
      Form submitted successfully!
    </div>
  );
};

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [course, setCourse] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get a reference to the 'users' node in Firebase Realtime Database
    const db = getDatabase(app);
    const usersRef = ref(db, 'users');

    // Push user data to the database
    push(usersRef, {
      name,
      email,
      age,
      country,
      phoneNumber,
      course,
    }).then(() => {
      // Data successfully saved to Firebase
      console.log('Form data submitted to Firebase!');

      // Clear form fields
      setName('');
      setEmail('');
      setAge('');
      setCountry('');
      setPhoneNumber('');
      setCourse('');

      // Show the success component
      setShowSuccess(true);

      // Hide success component after 4 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 2000);
    }).catch((error) => {
      // Handle errors here
      console.error('Error submitting form data to Firebase:', error);
    });
  };

  return (
    <>
    
      {showSuccess && <SuccessComponent />}
    <div className='container mt-5'>
      <div className='container mt-5'>
<h1 className='text-center color fw-bold '>Request a Free Demo</h1>
<p className='paragraph text-center'>Are you curious about what our learning experience feels like? Dive into our world with a free demo that gives you a taste of what's waiting for you.</p>

<div className="container d-flex justify-content-center align-items-center demo_container">
<div className="row col_demo">
<div className="col-md-6 order-md-1 order-2">
<form onSubmit={handleSubmit} className="user-form">
<div className="mb-3">
<label htmlFor="name" className="form-label">
Name:
</label>
<input
type="text"
className="form-control"
id="name"
value={name}
onChange={(e) => setName(e.target.value)}
required
/>
</div>
<div className="mb-3">
<label htmlFor="email" className="form-label">
Email:
</label>
<input
type="email"
className="form-control"
id="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
/>
</div>
<div className="mb-3">
<label htmlFor="age" className="form-label">
Age:
</label>
<input
type="number"
className="form-control"
id="age"
value={age}
onChange={(e) => setAge(e.target.value)}
required
/>
</div>
<div className="mb-3">
<label htmlFor="country" className="form-label">
Country:
</label>
<input
type="text"
className="form-control"
id="country"
value={country}
onChange={(e) => setCountry(e.target.value)}
required
/>
</div>
<div className="mb-3">
<label htmlFor="phoneNumber" className="form-label">
Phone Number:
</label>
<input
type="text"
className="form-control"
id="phoneNumber"
value={phoneNumber}
onChange={(e) => setPhoneNumber(e.target.value)}
required
/>
</div>
<div className="mb-3">
<label htmlFor="course" className="form-label">
Course:
</label>
<select
className="form-select form-control"
id="course"
value={course}
onChange={(e) => setCourse(e.target.value)}
required
>
<option value="">Select a course</option>
<option value="Course Nazra">Nazra</option>
<option value="Course Tajweed">Tajweed</option>
<option value="Course Memorization">Memorization</option>
<option value="Course Arabic Learning">Arabic Learning</option>
<option value="Course Arabic Grammer">Arabic Grammer</option>
<option value="Course Qira'at">Qira'at</option>
</select>
</div>
<button type="submit" className="btn card_btn">
Submit
</button>
</form>
</div>
<div className="col-md-6 form-text-container">
<div className="form-imgs-container">
<h1 className='color demo_heading'>Why Try Our Free Demo?</h1>
<h1 className='demo_color demo_heading_try mt-4'>Personalized Learning</h1>
<p className='demo_para'>Discover personalized, engaging courses tailored to your unique learning style. Experience education firsthand..</p>
<h1 className='demo_color demo_heading_try'>Meet Our Teachers</h1>
<p className='demo_para'>Meet skilled instructors in our demo—experts who make learning enjoyable and effective.</p>
<h1 className='demo_color demo_heading_try'>See Course Highlights</h1>
<p className='demo_para'>Get a sneak peek into our courses, exploring exciting subjects and materials.</p>
<h1 className='demo_color demo_heading_try'>Try Our Tools</h1>
<p className='demo_para'>Experience interactive tools, from live sessions to multimedia resources, in our engaging demo.</p>
</div>
</div>
</div>
</div>
</div>

    </div>
    </>
  );
};

export default UserForm;
