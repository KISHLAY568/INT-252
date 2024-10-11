import React, { useState, useMemo } from "react";

const Usememo = () => {
  const [add, setAdd] = useState(0);
  const [show, setShow] = useState(true);

  const getValue = () => {
    setAdd(add + 1);
  };

  const countNumber = (num) => {
    console.log("Heavy computation triggered with value:", num);
    for (let i = 0; i <= 1000000; i++) {}
    return num;
  };

  const checkData = useMemo(() => {
    return countNumber(add);
  }, [add]);

  return (
    <>
      <button onClick={getValue} style={{ backgroundColor: "red" }}>
        Counter
      </button>
      <p>My new number: {checkData}</p>

      <button onClick={() => setShow(!show)}>
        {show ? "You clicked me" : "Click me please"}
      </button>
    </>
  );
};

export default Usememo;
