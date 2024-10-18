import React, { useState } from "react";
import "./activity9.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-form-container">
      <div className="toggle-buttons">
        <button onClick={toggleForm} className={isLogin ? "active" : ""}>
          Login
        </button>
        <button onClick={toggleForm} className={!isLogin ? "active" : ""}>
          Signup
        </button>
      </div>

      {isLogin ? (
        <form className="login-form">
          <h2>Login Form</h2>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </div>
          <a href="#">Forgot password?</a>
          <button type="submit" className="btn">
            Login
          </button>
          <p>
            Not a member?{" "}
            <a href="#" onClick={toggleForm}>
              Signup now
            </a>
          </p>
        </form>
      ) : (
        <form className="signup-form">
          <h2>Signup Form</h2>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm password" />
          </div>
          <button type="submit" className="btn">
            Signup
          </button>
        </form>
      )}
    </div>
  );
};

export default AuthForm;
