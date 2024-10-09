import React, { useState, useEffect, useRef } from "react";
const Useref = () => {
  const [myData, setMyData] = useState("");
  const [count, setCount] = useState();
  const inputEle = useRef("");
  const changeStyle = () => {
    inputEle.current.style.backgroundColor = "red";
  };
  return (
    <>
      <input
        type="text"
        value={myData}
        onChange={(e) => setMyData(e.target.value)}
      />
      <p>The number of times rendered:{count.current}</p>
    </>
  );
};

export default Useref;
