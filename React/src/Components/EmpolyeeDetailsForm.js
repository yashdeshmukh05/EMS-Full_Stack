import React, { useState } from 'react';

const EmployeeDetailsForm = () => {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    position: ''
  });

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Update Employee Details (Admin/HR)</h2>
      <form className="col-md-6 mx-auto" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={details.name}
            onChange={handleChange}
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={details.email}
            onChange={handleChange}
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group">
          <label>Position</label>
          <input
            type="text"
            className="form-control"
            name="position"
            value={details.position}
            onChange={handleChange}
            placeholder="Enter Position"
          />
        </div>
        <button type="submit" className="btn btn-success btn-block">Update Details</button>
      </form>
    </div>
  );
};

export default EmployeeDetailsForm;
