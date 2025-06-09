import React from 'react';
import './Login.css';


const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="logo">✨ SHINE SALES</div>
        <h1 className="welcome-title">Welcome Back</h1>
        <form>
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Log In</button>
        </form>
        <p className="redirect">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
