import { React, useState, useMemo } from "react";
function Usecallback() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);
  const multiplication = useMemo(
    function multiply() {
      console.log("multiply");
      return add * 10;
    },
    [add]
  );

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
