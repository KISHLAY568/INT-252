import React, { createContext } from "react";
import "./App.css";
import Child1 from "./Child1";

const NameContext = createContext();
const AgeContext = createContext();

function App() {
  const name = "Kishlay";
  const age = 21;
  return (
    <NameContext.Provider value={name}>
      <AgeContext.Provider value={age}>
        <Child1 />
      </AgeContext.Provider>
    </NameContext.Provider>
  );
}

export default App;
