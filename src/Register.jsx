import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    alert(`Registered successfully!\nWelcome, ${formData.name}`);
  };

  return (
    <div className="register-wrapper">
      <div className="register-container">
        <div className="logo">✨ SHINE SALES</div>
        <h1 className="welcome-title">Create Account</h1>
        <form onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
            autoComplete="new-password"
            minLength={6}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
            autoComplete="new-password"
            minLength={6}
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Register</button>
        </form>
        <p className="redirect">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
