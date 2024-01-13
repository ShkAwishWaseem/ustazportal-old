// import React, { useState } from 'react';
// import { app } from './firebase';
// import { getDatabase, ref, push } from 'firebase/database';

// const UserForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Get a reference to the 'users' node in Firebase Realtime Database
//     const db = getDatabase(app);
//     const usersRef = ref(db, 'users');

//     // Push user data to the database
//     push(usersRef, {
//       name,
//       email,
//     });

//     // Clear form fields
//     setName('');
//     setEmail('');
//   };

//   return (
//     <form onSubmit={handleSubmit} className="container mt-4">
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">
//           Name:
//         </label>
//         <input
//           type="text"
//           className="form-control"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="email" className="form-label">
//           Email:
//         </label>
//         <input
//           type="email"
//           className="form-control"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <button type="submit" className="btn btn-primary">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default UserForm;


import React, { useState , useEffect} from 'react';
import { app } from './firebase';
import { getDatabase, ref, push } from 'firebase/database';
import "./Demo.css"

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [course, setCourse] = useState('');
  useEffect(() => {
     window.scrollTo(0, 0)
   },[])

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
    });

    // Clear form fields
    setName('');
    setEmail('');
    setAge('');
    setCountry('');
    setPhoneNumber('');
    setCourse('');
  };

  return (


     <div className='container mt-5'>
               <h1 className='text-center color fw-bold '>Request a Free Demo</h1>
               <p className='paragraph fw-bold text-center'>Experience our services firsthand—request a demo today to explore the features, benefits, and seamless learning opportunities we provide.</p>

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
          <h1 className='color '>Free Demo</h1>
     <p className='demo_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iste corporis dignissimos veritatis dolorum cumque provident ab nam rerum velit omnis obcaecati dicta, laboriosam neque porro fuga aspernatur et incidunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore maxime numquam facere repellat sit illum porro fugit, eius delectus laborum praesentium, accusantium id velit nulla. Cum magnam sit quia?</p>
        </div>
      </div>
    </div>
  </div>
      </div>
  );
};

export default UserForm;


