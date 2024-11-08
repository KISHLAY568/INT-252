// import React, { createContext } from "react";
// import "./App.css";
// import Child1 from "./Child1";

// const NameContext = createContext();
// const AgeContext = createContext();

// function App() {
//   const name = "Kishlay";
//   const age = 21;
//   return (
//     <NameContext.Provider value={name}>
//       <AgeContext.Provider value={age}>
//         <Child1 />
//       </AgeContext.Provider>
//     </NameContext.Provider>
//   );
// }

// export default App;
// export { NameContext, AgeContext };

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:userId" element={<Profile />} />
    </Routes>
  );
}

export default App;
