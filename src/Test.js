// components/Test.js
import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { ref, get } from 'firebase/database';

const Test = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Reference to the "users" collection in the Firebase database
        const usersRef = ref(db, 'users');

        // Fetch data from the database
        const snapshot = await get(usersRef);

        // Convert the snapshot to an array of user objects
        const usersArray = [];
        snapshot.forEach((childSnapshot) => {
          const user = childSnapshot.val();
          usersArray.push(user);
        });

        // Update the state with the fetched data
        setUserData(usersArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {userData.map((user) => (
          <div key={user.id}>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
            <li>Course: {user.course}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Test;
