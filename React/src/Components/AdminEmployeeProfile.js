import React from 'react';

const AdminEmployeeProfile = () => {
  const employeeData = {
    name: 'John Doe',
    email: 'john@example.com',
    position: 'Software Engineer',
    salary: '5000'
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Employee Profile (Admin/HR)</h2>
      <div className="card col-md-6 mx-auto">
        <div className="card-body">
          <p><strong>Name:</strong> {employeeData.name}</p>
          <p><strong>Email:</strong> {employeeData.email}</p>
          <p><strong>Position:</strong> {employeeData.position}</p>
          <p><strong>Salary:</strong> ${employeeData.salary}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminEmployeeProfile;
