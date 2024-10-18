import React, { useState } from "react";

function Addition() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [sum, setSum] = useState(null);

  const handleAddition = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    if (!isNaN(num1) && !isNaN(num2)) {
      setSum(num1 + num2);
    } else {
      setSum("Invalid input");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <label>
        First Number:
        <input
          type="text"
          value={firstNumber}
          onChange={(e) => setFirstNumber(e.target.value)}
          style={{
            padding: "8px",
            marginTop: "5px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </label>
      <label>
        Second Number:
        <input
          type="text"
          value={secondNumber}
          onChange={(e) => setSecondNumber(e.target.value)}
          style={{
            padding: "8px",
            marginTop: "5px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </label>
      <button
        onClick={handleAddition}
        style={{
          padding: "10px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Add
      </button>
      {sum !== null && (
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>Result: {sum}</p>
      )}
    </div>
  );
}

export default Addition;
