import React, { useState, useEffect } from 'react';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees([
      { id: 1, name: 'John Doe', position: 'Software Engineer' },
      { id: 2, name: 'Jane Smith', position: 'HR Manager' }
    ]);
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center">Employee List (Admin)</h2>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
