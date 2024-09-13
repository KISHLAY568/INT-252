import { useState } from "react";

export default function Registration() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  function display() {
    alert(`Name: ${name}, Age: ${age}`);
  }
  return (
    <>
      <form onSubmit={display}>
        <label for="name">Name: </label>
        <input
          id="name"
          placeholder="enter your name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label for="age">Name: </label>
        <input
          id="age"
          placeholder="enter your age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        ></input>
        <br />
        <button>submit</button>
      </form>
    </>
  );
}
