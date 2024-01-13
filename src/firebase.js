// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAP4KLf9q2crVh_-LCpUlVBaR3HcRziZ7g",
//   authDomain: "ustaz-portal.firebaseapp.com",
//   databaseURL: "https://ustaz-portal-default-rtdb.firebaseio.com",
//   projectId: "ustaz-portal",
//   storageBucket: "ustaz-portal.appspot.com",
//   messagingSenderId: "854372140479",
//   appId: "1:854372140479:web:39b40a372d94e0c6124d0a",
//   measurementId: "G-9KPSMYBY0D"

// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);// firebase.js

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from 'firebase/analytics';


const firebaseConfig = {
     apiKey: "AIzaSyAP4KLf9q2crVh_-LCpUlVBaR3HcRziZ7g",
     authDomain: "ustaz-portal.firebaseapp.com",
     databaseURL: "https://ustaz-portal-default-rtdb.firebaseio.com",
     projectId: "ustaz-portal",
     storageBucket: "ustaz-portal.appspot.com",
     messagingSenderId: "854372140479",
     appId: "1:854372140479:web:39b40a372d94e0c6124d0a",
     measurementId: "G-9KPSMYBY0D"
};

// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);

// export { db };
// const analytics = getAnalytics(app);

// export { app, analytics };
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, app };