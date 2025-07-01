import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy login logic, always successful
    navigate('/');
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="logo">✨ SHINE SALES</div>
        <h1 className="welcome-title">Welcome Back</h1>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email Address" required value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
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