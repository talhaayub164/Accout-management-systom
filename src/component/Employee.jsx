import React, { useState } from 'react';
import '../css/style.css';

export function Employee() {
  const [name, setName] = useState('');
  const [cnic, setCnic] = useState('');
  const [father, setFather] = useState('');
  const [gender, setGender] = useState('Select');
  const [maritalStatus, setMaritalStatus] = useState('Married');
  const [employeeData, setEmployeeData] = useState([]); 

  const handleSave = () => {
    
    const newEmployee = {
      name,
      cnic,
      father,
      gender,
      maritalStatus
    };

    // Add the new employee to the existing employee data
    setEmployeeData([...employeeData, newEmployee]);

    // You can reset the form values after saving if needed
    clearForm();
  };

  const clearForm = () => {
    setName('');
    setCnic('');
    setFather('');
    setGender('Select');
    setMaritalStatus('Married');
  };

  return (
    <div className="box">
      <h1>Employee Form</h1>
      <label id='name'>Employee Name</label>
      <input type="text" id='name'  placeholder="Employee name" value={name} onChange={(e) => setName(e.target.value)} />
      <br /><br />
      <label id='name'>Employee CNIC</label>
      <input type="number" id="name" placeholder="Employee CNIC" value={cnic} onChange={(e) => setCnic(e.target.value)} />
      <br /><br />
      <label id='name'>Father Name</label>
      <input type="text" id="name" placeholder="Father name" value={father} onChange={(e) => setFather(e.target.value)} />
      <br /><br />
      <label id='name'>Gender</label>
      <select id="name" value={gender} onChange={(e) => setGender(e.target.value)}>
        <option>Select</option>
        <option>Male</option>
        <option>Female</option>
      </select>
      <br /><br />
      <input type="file" id="name" />
      <br /><br />
      <label id='name'>Marital Status</label>
      <select id="name" value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)}>
        <option>Married</option>
        <option>Single</option>
      </select>
      <br /><br />
      <button id='btn' onClick={handleSave}>Save</button>
      <button id='btn1'  onClick={clearForm}>Clear</button>

      <h2>Employee Record</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>CNIC</th>
            <th>Father Name</th>
            <th>Gender</th>
            <th>Marital Status</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.cnic}</td>
              <td>{employee.father}</td>
              <td>{employee.gender}</td>
              <td>{employee.maritalStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
