import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterPage from './Components/RegisterPage';
import LoginPage from './Components/LoginPage';
import EmployeeProfile from './Components/EmployeeProfile';
import EmployeeList from './Components/EmployeeList';
import AttendanceUpdate from './Components/AttendanceUpdate';
import SalaryUpdateForm from './Components/SalaryUpdateForm';
import AdminEmployeeProfile from './Components/AdminEmployeeProfile';
import EmployeeDetailsForm from './Components/EmpolyeeDetailsForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/employee-profile" component={EmployeeProfile} />
        <Route path="/employee-list" component={EmployeeList} />
        <Route path="/attendance-update" component={AttendanceUpdate} />
        <Route path="/salary-update" component={SalaryUpdateForm} />
        <Route path="/admin/employee-profile" component={AdminEmployeeProfile} />
        <Route path="/admin/employee-details" component={EmployeeDetailsForm} />
      </Switch>
    </Router>
  );
}

export default App;
