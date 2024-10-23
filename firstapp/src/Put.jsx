import React, { useState, useEffect } from "react";
import axios from "axios";

const Put = () => {
  const [responseData, setResponseData] = useState([null]);
  const [error, setError] = useState(null);

  const handlePutRequest = () => {
    axios
      .put("https://jsonplaceholder.typicode.com/posts/1", {
        title: "HZ",
        body: "This is HZ section",
        userId: 1,
      })
      .then((response) => {
        console.log(response);
        setResponseData(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <button onClick={handlePutRequest}>send put request</button>
      {error && <p>Error: {error}</p>}
      {responseData && (
        <div>
          <h3>Response Data:</h3>
          <p>Title: {responseData.title}</p>
          <p>Body: {responseData.body}</p>
        </div>
      )}
    </div>
  );
};

export default Put;
