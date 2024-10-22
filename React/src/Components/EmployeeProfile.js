import React from 'react';

const EmployeeProfile = () => {
  const profileData = {
    name: 'John Doe',
    email: 'john@example.com',
    position: 'Software Engineer'
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Employee Profile</h2>
      <div className="card col-md-6 mx-auto">
        <div className="card-body">
          <p><strong>Name:</strong> {profileData.name}</p>
          <p><strong>Email:</strong> {profileData.email}</p>
          <p><strong>Position:</strong> {profileData.position}</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
