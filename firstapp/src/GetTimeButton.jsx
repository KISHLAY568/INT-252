import React, { useState } from "react";

export default function GetTimeButton() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  function displayTime() {
    const currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  }

  return (
    <div>
      <h1>
        {time}
      </h1>
      <button onClick={displayTime}>Get Time</button>
    </div>
  );
}
