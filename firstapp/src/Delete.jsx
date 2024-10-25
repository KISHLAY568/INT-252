import React, { useState, useEffect } from "react";
import axios from "axios";

const Delete = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const handleDeleteRequest = () => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setMessage("post deleted successfully");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <button onClick={handleDeleteRequest}>send post request</button>
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
