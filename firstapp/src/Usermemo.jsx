import React, { useState } from "react";
function Usememo() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);
  function multiply() {
    console.log("multiply");
    return add * 10;
  }
  return (
    <>
      {multiply()}
      <br />
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <span>{add}</span>
      <br />
      <br />
      <button onClick={() => setMinus(minus - 1)}>Subtraction</button>
      <span>{minus}</span>
    </>
  );
}

export default Usememo;
