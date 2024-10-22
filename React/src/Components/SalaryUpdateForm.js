import React, { useState } from 'react';

const SalaryUpdateForm = () => {
  const [salaryData, setSalaryData] = useState({
    employeeId: '',
    salary: ''
  });

  const handleChange = (e) => {
    setSalaryData({
      ...salaryData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(salaryData);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Update Salary (HR)</h2>
      <form className="col-md-6 mx-auto" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Employee ID</label>
          <input
            type="text"
            className="form-control"
            name="employeeId"
            value={salaryData.employeeId}
            onChange={handleChange}
            placeholder="Enter Employee ID"
          />
        </div>
        <div className="form-group">
          <label>Salary</label>
          <input
            type="number"
            className="form-control"
            name="salary"
            value={salaryData.salary}
            onChange={handleChange}
            placeholder="Enter new salary"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Update Salary</button>
      </form>
    </div>
  );
};

export default SalaryUpdateForm;
