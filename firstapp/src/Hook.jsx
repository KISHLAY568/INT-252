import React, { useState, useEffect } from "react";
const Hook = () => {
  const [count, setCount] = useState(100);
  useEffect(() => {
    console.log("Document Mount");
  }, []);
  useEffect(() => {
    console.log(`you clicked ${count} times`);
  }, [count]);
  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
      </div>
    </>
  );
};

export default Hook;
