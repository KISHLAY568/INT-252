import React, { useReducer } from "react";

export default function Usereducer() {
  const initialstate = { count: 0, switchState: "OFF" };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        return { ...state, count: state.count + 1 };
      case "Decrement":
        return { ...state, count: state.count > 0 ? state.count - 1 : 0 };
      case "TurnOn":
        return { ...state, switchState: "ON" };
      case "TurnOff":
        return { ...state, switchState: "OFF" };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <>
      <p>count={state.count}</p>
      <p>switch={state.switchState}</p>
      <button onClick={() => dispatch({ type: "Increment" })}>+</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "TurnOn" })}>Turn ON</button>
      <button onClick={() => dispatch({ type: "TurnOff" })}>Turn OFF</button>
    </>
  );
}