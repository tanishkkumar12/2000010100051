// src/components/LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    clientID: '',
    ownerName: '',
    ownerEmail: '',
    rollNo: '',
    clientSecret: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://20.244.56.144/train/auth', formData);
      console.log('Login successful. Access Token:', response.data.access_token);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields for companyName, clientID, ownerName, ownerEmail, rollNo, and clientSecret */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;