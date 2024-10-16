import React from "react";
import "./form.css";

function LoginForm() {
  return (
    <div className="login-form-container">
      <form className="login-form">
        <label>
          Username:
          <input type="text" required />
        </label>
        <label>
          Email:
          <input type="email" required />
        </label>
        <label>
          Password:
          <input type="password" required />
        </label>
        <label>
          Confirm Password:
          <input type="password" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;