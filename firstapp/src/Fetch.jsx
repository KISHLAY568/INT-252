import React, { useState, useEffect } from "react";

const Stories = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "https://jsonplaceholder.typicode.com/posts";
  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      console.log(response);
      if (!response.ok) {
        throw new error("Something went wrong");
      }
      const result = await response.json();
      console.log(result);
      setData(result);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }
  return (
    <div>
      <h1>Fetched Data</h1>
      <ol>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ol>
    </div>
  );
};

export default Stories;
