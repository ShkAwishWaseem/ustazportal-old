// import React, { useState, useEffect } from 'react';
// import "./Surah.css"

// function Surah() {

//     const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//         const response = await fetch('http://api.alquran.cloud/v1/ayah/262/en.asad'); 
//         const jsonData = await response.json();
//         setData(jsonData);
//     };
//     fetchData();
//   }, []);

//   return (
//     <>
//     {data.map(item => (
//           <h1 key={item._id}>{item.fullName}</h1>
//     ))}
//     <div class="container surah">
// <div class="row">
//     <div class="col-lg-4">
//         <div class="card card-margin">
//             <div class="card-header no-border">
//                 <h5 class="card-title">Surah Al-Imran</h5>
//             </div>
//             <div class="card-body pt-0">
//                 <div class="widget-49">
//                     <div class="widget-49-title-wrapper">
//                         <div class="widget-49-date-primary">
//                             <span class="widget-49-date-day">09</span>
//                             <span class="widget-49-date-month">apr</span>
//                         </div>
//                         <div class="widget-49-meeting-info">
//                             <span class="widget-49-pro-title">PRO-08235 DeskOpe. Website</span>
//                             <span class="widget-49-meeting-time">12:00 to 13.30 Hrs</span>
//                         </div>
//                     </div>
//                     <ol class="widget-49-meeting-points">
//                         <li class="widget-49-meeting-item"><span>Expand module is removed</span></li>
//                         <li class="widget-49-meeting-item"><span>Data migration is in scope</span></li>
//                         <li class="widget-49-meeting-item"><span>Session timeout increase to 30 minutes</span></li>
//                     </ol>
//                     <div class="widget-49-meeting-action">
//                         <a href="/" class="btn btn-sm btn-flash-border-primary">View All</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// </div>
//     </>

// )
// }
// export default Surah
