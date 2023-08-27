import React, { useState } from 'react';
import './App.css';
import './css/style.css';
import { Home } from './component/Home.jsx';
import { Employee } from './component/Employee.jsx';
import { Customer } from './component/Customer.jsx';
import { Contact } from './component/Contact.jsx';
import { Vendor } from './component/Vendor.jsx';
import { Header } from './component/Header.jsx';
import { Report } from './component/Report.jsx';
import { HR } from './component/HR.jsx';
import { Account } from './component/Account.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function Login({ setLoggedIn }) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmint = () => {
    if (user === 'talha' && password === '12345') {
      setLoggedIn(true);
    } else {
      alert('Username or password is incorrect. sorry, please try again');
    }
  };

  return (
    <div className="login">
      <h1>Login Form</h1>
      <label id='name'>User Name</label>
      <br/>
      <input
        type="password"
        placeholder='Enter User Name'
        id="name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <br /><br />
      <label id='name'>Password</label>
      <br/>
      <input
        type="password"
        placeholder='Enter your password'
        id="name"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br/><br />
      <button id='btn' onClick={handleSubmint}>Submit</button>
    </div>
  );
}

function NavBar() {
  return (
    <ul className="nav">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/account">Account</Link>
      </li>
      <li>
        <Link to="/report">Report</Link>
      </li>
      <li>
        <Link to="/employee">Employee</Link>
      </li>
      <li>
        <Link to="/vendor">Vendor</Link>
      </li>
      <li>
        <Link to="/customer">Customer</Link>
      </li>
      <li>
        <Link to="/contact">Contact US</Link>
      </li>
      <li>
        <Link to="/hr">HR</Link>
      </li>
    </ul>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        {loggedIn ? (
          <div>
            <Header />
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/employee" element={<Employee />} />
              <Route path="/vendor" element={<Vendor />} />
              <Route path="/customer" element={<Customer />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/account" element={<Account />} />
              <Route path="/report" element={<Report />} />
              <Route path="/hr" element={<HR />} />
            </Routes>
          </div>
        ) : (
          <Login setLoggedIn={setLoggedIn} />
        )}
      </div>
    </Router>
  );
}

export default App;
