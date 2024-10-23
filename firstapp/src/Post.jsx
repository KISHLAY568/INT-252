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
};
