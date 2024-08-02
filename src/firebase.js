

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get  } from 'firebase/database';
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


// export { app, analytics };
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, get , app};
