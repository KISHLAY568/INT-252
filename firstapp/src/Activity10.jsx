//task: create a React components that allows user to fetch details of a specific user by enternibg theire id in a text box using axios library. implement the following requirements
// 1.useridinput: provide a text input field for the user to enter a userId;
// 2.fetch Button: include a buton that whrn  a useLinkClickHandler, fetched the user details from the api(https://jsonplacceholder.typicode.com/users/(id);
// Display User Details: Upon successfully retrived,display the following user information
// ID 
// Name 
//  Email 
//   City 
   
// Error handling if the user id is invalid or the user is not found, display an appropriate error MessageChannel. 
// Expected Output 
// if user exist 
import React, { useState } from "react";
import axios from "axios";

const FetchUser = () => {
  const [userId, setUserId] = useState("");
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState(null);

  const handleFetchUser = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => {
        setUserDetails(response.data);
        setError(null);
      })
      .catch((error) => {
        setUserDetails(null);
        setError("User not found or invalid user ID");
      });
  };

  return (
    <div>
      <h1>Fetch User Details</h1>
      <div>
        <label>User ID:</label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button onClick={handleFetchUser}>Fetch</button>
      </div>
      {userDetails && (
        <div>
          <h2>User Details</h2>
          <p>ID: {userDetails.id}</p>
          <p>Name: {userDetails.name}</p>
          <p>Email: {userDetails.email}</p>
          <p>City: {userDetails.address.city}</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default FetchUser;