import React, { useState } from 'react';

export function Report() {
    const [item, setItem] = useState("");
    const [vendor, setVendor] = useState("");
    const [company, setCompany] = useState(""); // Corrected spelling
    const [quantity, setQuantity] = useState("");
    const [reportData, setReportData] = useState([]); 
    const [searchQuery, setSearchQuery] = useState("");

    const handleSave = () => {
        const newReport = {
            item,
            vendor,
            company, // Updated variable name
            quantity
        };
        setReportData([...reportData, newReport]);
        clearForm(); 
    };
    const clearForm = () => {
        setItem("");
        setVendor("");
        setCompany("");
        setQuantity("");
    };

    return (
        <div className="box">
            <label id='name'>Search Item</label>
<input
    type='text'
    id='name'
    placeholder='Search Item'
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
/>

            <h1>Add Item</h1>
            <label id='name'>Item Name</label>
            <input type='text' id='name'  placeholder='Item Name' value={item} onChange={(e) => setItem(e.target.value)}></input>
            <br /><br />
            <label id='name'>Vendor Name</label>
            <input type='text' id='name' placeholder='Vendor Name' value={vendor} onChange={(e) => setVendor(e.target.value)}></input>
            <br /><br />
            <label id='name'>Company Name</label> {/* Corrected spelling */}
            <input type='text' id='name' placeholder='Company Name' value={company} onChange={(e) => setCompany(e.target.value)}></input>
            <br /><br />
            <label id='name'>Quantity</label>
            <input type='number' id='name' placeholder='Quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)}></input>
            <br /><br />
            <button id='btn' onClick={handleSave}>Add</button>
            <button id='btn1' onClick={clearForm}>Clear</button>
            <h1>Stock Report</h1>

            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Vendor</th>
                        <th>Company</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
    {reportData
        .filter(report =>
            report.item.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((report, index) => (
            <tr key={index}>
                <td>{report.item}</td>
                <td>{report.vendor}</td>
                <td>{report.company}</td>
                <td>{report.quantity}</td>
            </tr>
        ))}
</tbody>

            </table>
        </div>
    );
}
