import React, { useState } from 'react';

const AttendanceUpdate = () => {
  const [attendance, setAttendance] = useState({
    date: '',
    status: ''
  });

  const handleChange = (e) => {
    setAttendance({
      ...attendance,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(attendance);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Update Attendance</h2>
      <form className="col-md-6 mx-auto" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={attendance.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Status</label>
          <select className="form-control" name="status" value={attendance.status} onChange={handleChange}>
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Update</button>
      </form>
    </div>
  );
};

export default AttendanceUpdate;
