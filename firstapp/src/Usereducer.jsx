import React, { useReducer } from "react";

export default function Usereducer() {
  const initialstate = 0;
  const reducer = (cstate, action) => {
    switch (action) {
      case "Increment":
        return cstate + 1;
      case "Decrement":
        return cstate > 0 ? cstate - 1 : 0;
      default:
    }
  };
  const [count, dispatch] = useReducer(reducer, initialstate);
  return (
    <>
      <p>count={count}</p>
      <button onClick={() => dispatch("Increment")}>+</button>
      <button onClick={() => dispatch("Decrement")}>-</button>
    </>
  );
}
