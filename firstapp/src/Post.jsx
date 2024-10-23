import React, { useState, useEffect } from "react";
import axios from "axios";

const Post = () => {
  const [responseData, setResponseData] = useState([null]);
  const [error, setError] = useState(null);

  const handlePostRequest = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: "foo",
        body: "bar",
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
      <button onClick={handlePostRequest}>send post request</button>
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

export default Post;
