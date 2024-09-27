import React, { useState, useEffect, createContext, useContext } from "react";

// Create a Theme Context
const ThemeContext = createContext();

const Hook = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

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

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        <div>
          <h1>Counter: {count}</h1>
          <button onClick={Increment}>Increment</button>
          <button onClick={Decrement}>Decrement</button>
          <br />
          <button onClick={toggleTheme}>
            Switch to {theme === "light" ? "Dark" : "Light"} Theme
          </button>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default Hook;
