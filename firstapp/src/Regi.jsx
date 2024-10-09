import React, { useState, useEffect, useRef } from "react";

const Useref = () => {
  const [myData, setMyData] = useState("");

  const count = useRef(9);
  console.log(count);
  useEffect(() => {
    count.current = count.current + 1;
  });

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
