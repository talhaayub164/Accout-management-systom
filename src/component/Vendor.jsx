import React, { useState } from 'react';

export function Vendor() {
  const [name, setName] = useState('');
  const [companey, setCompaney] = useState('');
  const [item, setItem] = useState('');
  const [vendorData, setVendorData] = useState([]);

  const handleSave = () => {
    const newVendor = {
      name,
      companey,
      item
    };
    setVendorData([...vendorData, newVendor]); // Use spread operator to update the array
    clearForm();
  };

  const clearForm = () => {
    setName('');
    setCompaney('');
    setItem('');
  };

  return (
    <div className="box">
      <h1>Vendor Form</h1>
      <label id='name'>Vendor Name</label>
      <input
        type="text"
        placeholder="Vendor Name"
        id='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />
      <label id='name'>Company Name</label>
      <input
        type="text"
        id="name"
        placeholder="Company Name"
        value={companey}
        onChange={(e) => setCompaney(e.target.value)}
      />
      <br /><br />
      <label id='name'>Item Detail</label>
      <input
        type="text"
        id="name"
        placeholder="Item Name"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <br /><br />
      <button id='btn' onClick={handleSave}>Save</button>
      <button id='btn1' onClick={clearForm}>Clear</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Item</th>
          </tr>
        </thead>
        <tbody>
          {vendorData.map((vendor, index) => (
            <tr key={index}>
              <td>{vendor.name}</td>
              <td>{vendor.companey}</td>
              <td>{vendor.item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
