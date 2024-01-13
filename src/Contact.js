// // // import React , {useEffect}from 'react'
// // import "./Contact.css"

// // // function Contact() {
// // //   useEffect(() => {
// // //     window.scrollTo(0, 0)
// // //   }, [])
// // //   return (
// // //      <>
// // //       <main id="main">
// // // <div classNameName="breadcrumbs" data-aos="fade-in">
// // //   <div classNameName="container form">
// // //     <h2>Contact Us</h2>
// // //     <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
// // //   </div>
// // // </div>


// // // <section id="contact" classNameName="contact">
// // //   <div classNameName="container" data-aos="fade-up">

// // //     <div classNameName="row mt-5">

// // //       <div classNameName="col-lg-4">
// // //         <div classNameName="info">
// // //           <div classNameName="address">
// // //             <i classNameName="bi bi-geo-alt"></i>
// // //             <h4>Location:</h4>
// // //             <p classNameName='p-color'>A108 Adam Street, New York, NY 535022</p>
// // //           </div>

// // //           <div classNameName="email">
// // //             <i classNameName="bi bi-envelope"></i>
// // //             <h4>Email:</h4>
// // //             <p classNameName='p-color'>info@example.com</p>
// // //           </div>

// // //           <div classNameName="phone">
// // //             <i classNameName="bi bi-phone"></i>
// // //             <h4>Call:</h4>
// // //             <p classNameName='p-color'>+1 (571) 977-6331</p>
// // //           </div>

// // //         </div>

// // //       </div>

// // //       <div classNameName="col-lg-8 mt-5 mt-lg-0">

// // //         <form action="" method="post">
// // //           <div classNameName="row">
// // //             <div classNameName="col-md-6 form-group">
// // //               <input type="text" name="name" classNameName="form-control" id="name" placeholder="Your Name" required/>
// // //             </div>
// // //             <div classNameName="col-md-6 form-group mt-3 mt-md-0">
// // //               <input type="email" classNameName="form-control" name="email" id="email" placeholder="Your Email" required/>
// // //             </div>
// // //           </div>
// // //           <div classNameName="form-group mt-3">
// // //             <input type="text" classNameName="form-control" name="subject" id="subject" placeholder="Subject" required/>
// // //           </div>
// // //           <div classNameName="form-group mt-3">
// // //             <textarea classNameName="form-control" name="message" rows="5" placeholder="Message" required></textarea>
// // //           </div>
// // //           <div classNameName="text-center mt-4"><button classNameName="btn-color" type="submit">Send Message</button></div>
// // //         </form>

// // //       </div>

// // //     </div>

// // //   </div>
// // // </section>

// // // </main>
// // //     </>
// // //   )
// // // }

// // // export default Contact



// // // import React, { useEffect, useState } from 'react';
// // // import "./Contact.css"

// // // function Contact() {
// // //   useEffect(() => {
// // //     window.scrollTo(0, 0)
// // //   }, []);

// // //   const [formData, setFormData] = useState({
// // //     name: '',
// // //     email: '',
// // //     subject: '',
// // //     message: '',
// // //   });

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData((prevData) => ({
// // //       ...prevData,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();

// // //     // Making the fetch request
// // //     fetch('http://localhost:8000/api/login', {
// // //       method: 'POST',
// // //       headers: {
// // //         'Content-Type': 'application/json',
// // //       },
// // //       body: JSON.stringify(formData),
// // //     })
// // //       .then(response => response.json())
// // //       .then(data => {
// // //         // Handle the response from the server
// // //         console.log('Server response:', data);
// // //         // You can reset the form if needed
// // //         setFormData({
// // //           fullName: '',
// // //           email: '',
// // //           subject: '',
// // //           message: '',
// // //         });
// // //       })
// // //       .catch(error => {
// // //         console.error('Error:', error);
// // //       });
// // //   };

// // //   return (
// // //     <>
// // //       <main id="main">
// // //         {/* ... (previous code) */}

// // //         <section id="contact" classNameName="contact">
// // //           <div classNameName="container" data-aos="fade-up">
// // //             <div classNameName="row mt-5">
// // //               {/* ... (previous code) */}

// // //               <div classNameName="col-lg-8 mt-5 mt-lg-0">
// // //                 <form onSubmit={handleSubmit}>
// // //                   <div classNameName="row">
// // //                     <div classNameName="col-md-6 form-group">
// // //                       <input
// // //                         type="text"
// // //                         name="name"
// // //                         classNameName="form-control"
// // //                         id="name"
// // //                         placeholder="Your Name"
// // //                         value={formData.name}
// // //                         onChange={handleChange}
// // //                         required
// // //                       />
// // //                     </div>
// // //                     <div classNameName="col-md-6 form-group mt-3 mt-md-0">
// // //                       <input
// // //                         type="email"
// // //                         classNameName="form-control"
// // //                         name="email"
// // //                         id="email"
// // //                         placeholder="Your Email"
// // //                         value={formData.email}
// // //                         onChange={handleChange}
// // //                         required
// // //                       />
// // //                     </div>
// // //                   </div>
// // //                   <div classNameName="form-group mt-3">
// // //                     <input
// // //                       type="text"
// // //                       classNameName="form-control"
// // //                       name="subject"
// // //                       id="subject"
// // //                       placeholder="Subject"
// // //                       value={formData.subject}
// // //                       onChange={handleChange}
// // //                       required
// // //                     />
// // //                   </div>
// // //                   <div classNameName="form-group mt-3">
// // //                     <textarea
// // //                       classNameName="form-control"
// // //                       name="message"
// // //                       rows="5"
// // //                       placeholder="Message"
// // //                       value={formData.message}
// // //                       onChange={handleChange}
// // //                       required
// // //                     ></textarea>
// // //                   </div>
// // //                   <div classNameName="text-center mt-4">
// // //                     <button classNameName="btn-color" type="submit">
// // //                       Send Message
// // //                     </button>
// // //                   </div>
// // //                 </form>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </section>
// // //       </main>
// // //     </>
// // //   );
// // // }

// // // export default Contact;

// // import React from 'react'


// // const Contact = () => {
// //   return (
// //     <>
// //     {/* <div className="main-section">

    
// // <section className="bg-light py-3 py-md-5">
// //   <div className="container">
// //     <div className="row justify-content-md-center">
// //       <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
// //         <h2 className="mb-4 display-5 text-center">Contact</h2>
// //         <p className="text-secondary mb-5 text-center">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque et neque id ligula mattis commodo.</p>
// //         <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
// //       </div>
// //     </div>
// //   </div>

// //   <div className="container">
// //     <div className="row justify-content-lg-center">
// //       <div className="col-12 col-lg-9">
// //         <div className="bg-white border rounded shadow-sm overflow-hidden">

// //           <form action="#!">
// //             <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
// //               <div className="col-12">
// //                 <label for="fullname" className="form-label">Full Name <span className="text-danger">*</span></label>
// //                 <input type="text" className="form-control" id="fullname" name="fullname" value="" required/>
// //               </div>
// //               <div className="col-12 col-md-6">
// //                 <label for="email" className="form-label">Email <span className="text-danger">*</span></label>
// //                 <div className="input-group">
// //                   <span className="input-group-text">
// //                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
// //                       <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
// //                     </svg>
// //                   </span>
// //                   <input type="email" className="form-control" id="email" name="email" value="" required/>
// //                 </div>
// //               </div>
// //               <div className="col-12 col-md-6">
// //                 <label for="phone" className="form-label">Phone Number</label>
// //                 <div className="input-group">
// //                   <span className="input-group-text">
// //                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
// //                       <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
// //                     </svg>
// //                   </span>
// //                   <input type="tel" className="form-control" id="phone" name="phone" value=""/>
// //                 </div>
// //               </div>
// //               <div className="col-12">
// //                 <label for="message" className="form-label">Message <span className="text-danger">*</span></label>
// //                 <textarea className="form-control" id="message" name="message" rows="3" required></textarea>
// //               </div>
// //               <div className="col-12">
// //                 <div className="d-grid">
// //                   <button className="btn card_btn btn-lg" type="submit">Submit</button>
// //                 </div>
// //               </div>
// //             </div>
           
            
// //           </form>

// //         </div>
// //       </div>
// //     </div>
// //   </div>
// // </section> 
// //   <div id="map-container-google-2" className="z-depth-1-half map-container" >
// //   <iframe src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" className="map" allowfullscreen title="new"></iframe>
// // </div>
// // </div> */}
// // <div className="main-section">
// //   <section className="bg-light py-3 py-md-5">
// //     <div className="container">
// //       <div className="row justify-content-md-center">
// //         <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
// //           <h2 className="mb-4 display-5 text-center">Contact</h2>
// //           <p className="text-secondary mb-5 text-center">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque et neque id ligula mattis commodo.</p>
// //           <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
// //         </div>
// //       </div>

// //       <div className="row justify-content-md-center">
// //         <div className="col-12 col-md-6 mb-4 mb-md-0">
// //           <div className="bg-white border rounded shadow-sm overflow-hidden">
// //             <form action="#!">
// //             <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
// //               <div className="col-12">
// //                 <label for="fullname" className="form-label">Full Name <span className="text-danger">*</span></label>
// //                 <input type="text" className="form-control" id="fullname" name="fullname" value="" required/>
// //               </div>
// //               <div className="col-12 col-md-6">
// //                 <label for="email" className="form-label">Email <span className="text-danger">*</span></label>
// //                 <div className="input-group">
// //                   <span className="input-group-text">
// //                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
// //                       <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
// //                     </svg>
// //                   </span>
// //                   <input type="email" className="form-control" id="email" name="email" value="" required/>
// //                 </div>
// //               </div>
// //               <div className="col-12 col-md-6">
// //                 <label for="phone" className="form-label">Phone Number</label>
// //                 <div className="input-group">
// //                   <span className="input-group-text">
// //                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
// //                       <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
// //                     </svg>
// //                   </span>
// //                   <input type="tel" className="form-control" id="phone" name="phone" value=""/>
// //                 </div>
// //               </div>
// //               <div className="col-12">
// //                 <label for="message" className="form-label">Message <span className="text-danger">*</span></label>
// //                 <textarea className="form-control" id="message" name="message" rows="3" required></textarea>
// //               </div>
// //               <div className="col-12">
// //                 <div className="d-grid">
// //                   <button className="btn card_btn btn-lg" type="submit">Submit</button>
// //                 </div>
// //               </div>
// //             </div>
// //             </form>
// //           </div>
// //         </div>

// //         <div className="col-12 col-md-6">
// //           <div id="map-container-google-2" className="z-depth-1-half map-container">
// //             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51959.56779725288!2d-77.2013938005504!3d38.93166368333378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b635ecb18a793b%3A0x8e62ba5eadfaeaf1!2sMcLean%2C%20VA%2C%20USA!5e0!3m2!1sen!2s!4v1705079663544!5m2!1sen!2s" referrerpolicy="no-referrer-when-downgrade" frameborder="0" className="map" allowfullscreen title="new"></iframe>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   </section>
// // </div>


// //     </>
// //   )
// // }

// // export default Contact



// // firebase.js




// // ContactForm.js
// import React, { useState } from 'react';
// import { getDatabase, ref, push } from 'firebase/database';
// import { app } from './firebase';
// import "./Contact.css"

// const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Create a reference to the 'contacts' node in Firebase Realtime Database
//     const db = getDatabase(app);
//     const contactsRef = ref(db, 'contacts');

//     // Get form data
//     const formData = {
//       name,
//       email,
//       phone,
//       message,
//     };

//     // Push form data to the database
//     push(contactsRef, formData)
//       .then(() => {
//         // Data successfully saved to Firebase
//         console.log('Form data submitted to Firebase!');

//         // Clear form fields and reset error
//         setName('');
//         setEmail('');
//         setPhone('');
//         setMessage('');
//         setError('');
//       })
//       .catch((error) => {
//         // Handle errors here
//         console.error('Error submitting form data to Firebase:', error);
//         setError('Error submitting form data. Please try again.');
//       });
//   };

//   return (
//     <div className="container">
//       <div className="row justify-content-md-center">
//         <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
//           <h2 className="mb-4 display-5 text-center">Contact</h2>
//           <p className="text-secondary mb-5 text-center">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque et neque id ligula mattis commodo.</p>
//           <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
//         </div>
//       </div>

//       <div className="row justify-content-md-center">
//         <div className="col-12 col-md-6 mb-4 mb-md-0">
//           <div className="bg-white border rounded shadow-sm overflow-hidden">
//             <form onSubmit={handleSubmit}>
//               <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
//                 <div className="col-12">
//                   <label htmlFor="fullname" className="form-label">Full Name <span className="text-danger">*</span></label>
//                   <input type="text" className="form-control" id="fullname" name="fullname" value={name} onChange={(e) => setName(e.target.value)} required />
//                 </div>
//                 <div className="col-12 col-md-6">
//                   <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
//                   <div className="input-group">
//                     <span className="input-group-text">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
//                         <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
//                       </svg>
//                     </span>
             
//                     <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                   </div>
//                 </div>
//                 <div className="col-12 col-md-6">
//                   <label htmlFor="phone" className="form-label" >Phone Number <span className="text-danger">*</span></label>
//                   <div className="input-group">
//                     <span className="input-group-text">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
//                         <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
//                       </svg>
//                     </span>
//                     <input type="tel" className="form-control" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
//                   </div>
//                 </div>
//                 <div className="col-12">
//                   <label htmlFor="message" className="form-label">Message <span className="text-danger">*</span></label>
//                   <textarea className="form-control" id="message" name="message" rows="3" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
//                 </div>
//                 <div className="col-12">
//                   <div className="d-grid">
//                     <button className="btn card_btn btn-lg btn" type="submit">Submit</button>
//                   </div>
//                 </div>
//                 {error && (
//                   <div className="col-12">
//                     <div className="alert alert-danger mt-3" role="alert">
//                       {error}
//                     </div>
//                   </div>
//                 )}
//               </div>
              
//             </form>
//           </div>
//         </div>

//         <div className="col-12 col-md-6">
//           <div id="map-container-google-2" className="z-depth-1-half map-container">
//             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51959.56779725288!2d-77.2013938005504!3d38.93166368333378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b635ecb18a793b%3A0x8e62ba5eadfaeaf1!2sMcLean%2C%20VA%2C%20USA!5e0!3m2!1sen!2s!4v1705079663544!5m2!1sen!2s" referrerPolicy="no-referrer-when-downgrade" frameBorder="0" className="map" allowFullScreen title="new"></iframe>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;



import React, { useState, useEffect } from 'react';
import { getDatabase, ref, push } from 'firebase/database';
import { app } from './firebase';
import "./Contact.css";

// SuccessComponent.js
const SuccessComponent = () => {

  return (
    <div className="alert alert-success mt-3 sticky-top mt-0" role="alert">
      Form submitted successfully!
    </div>
  );
};

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a reference to the 'contacts' node in Firebase Realtime Database
    const db = getDatabase(app);
    const contactsRef = ref(db, 'contacts');

    // Get form data
    const formData = {
      name,
      email,
      phone,
      message,
    };

    // Push form data to the database
    push(contactsRef, formData)
      .then(() => {
        // Data successfully saved to Firebase
        console.log('Form data submitted to Firebase!');

        // Clear form fields and reset error
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setError('');

       // Show the success component
       setShowSuccess(true);

       // Hide success component after 4 seconds
       setTimeout(() => {
         setShowSuccess(false);
       }, 2000);
     })
      .catch((error) => {
        // Handle errors here
        console.error('Error submitting form data to Firebase:', error);
        setError('Error submitting form data. Please try again.');
      });
  };

  return (
    <>
    
                {showSuccess && <SuccessComponent />}
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
          <h2 className="mb-4 display-5 text-center">Contact</h2>
          <p className="text-secondary mb-5 text-center">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque et neque id ligula mattis commodo.</p>
          <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
        </div>
      </div>

      <div className="row justify-content-md-center">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <div className="bg-white border rounded shadow-sm overflow-hidden">

            <form onSubmit={handleSubmit} className='contact-form'>
              <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
              <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                <div className="col-12">
                  <label htmlFor="fullname" className="form-label">Full Name <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="fullname" name="fullname" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="col-12 col-md-6 email">
                  <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                      </svg>
                    </span>
             
                    <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                </div>
                <div className="col-12 col-md-6 phone">
                  <label htmlFor="phone" className="form-label" >Phone Number <span className="text-danger">*</span></label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                      </svg>
                    </span>
                    <input type="tel" className="form-control" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="form-label">Message <span className="text-danger">*</span></label>
                  <textarea className="form-control" id="message" name="message" rows="3" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                </div>
                <div className="col-12">
                  <div className="d-grid">
                    <button className="btn card_btn btn-lg btn" type="submit">Submit</button>
                  </div>
                </div>
                {error && (
                  <div className="col-12">
                    <div className="alert alert-danger mt-3" role="alert">
                      {error}
                    </div>
                  </div>
                )}
              </div>
              </div>
            </form>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div id="map-container-google-2" className="z-depth-1-half map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51959.56779725288!2d-77.2013938005504!3d38.93166368333378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b635ecb18a793b%3A0x8e62ba5eadfaeaf1!2sMcLean%2C%20VA%2C%20USA!5e0!3m2!1sen!2s!4v1705079663544!5m2!1sen!2s" referrerPolicy="no-referrer-when-downgrade" frameBorder="0" className="map" allowFullScreen title="new"></iframe>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactForm;
