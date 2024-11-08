import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const queryParams = new URLSearchParams(window.location.search);
  const name = queryParams.get("name");
  return <h1>Welcome, {name}</h1>;
}

export default Home;
