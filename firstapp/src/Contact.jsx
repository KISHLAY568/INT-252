import React from "react";
function Contact() {
  const queryParams = new URLSearchParams(window.location.search);
  const method = queryParams.get("method");
  return <h1>Contact method: {method}</h1>;
}
