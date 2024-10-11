import React, { useCallback, useState } from "react";
import Usechild from "./Usechild";

const Usecal = () => {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  return (
    <>
      <Usechild />
      <div>
        <p>{count}</p>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
      </div>
    </>
  );
};

export default Usecal;
