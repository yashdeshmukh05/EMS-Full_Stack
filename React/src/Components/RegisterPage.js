import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/signup/Employee', formData);  // Update the URL to your backend
      console.log(response.data);  // Display the response from the backend (optional)
      setSuccessMessage('User registered successfully!');  // Success message
      setError(null);  // Clear any previous errors
    } catch (error) {
      setError('An error occurred while registering the user.');  // Handle error
      setSuccessMessage(null);  // Clear the success message
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Register</h2>
      <form className="col-md-6 mx-auto" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>FirstName</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your First name"
          />
        </div>
        <div className="form-group">
          <label>LastName</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your Last name"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
