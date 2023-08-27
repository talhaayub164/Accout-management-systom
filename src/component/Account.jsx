import React, { useState } from 'react';

export function Account() {
    const [name, setName] = useState("");
    const [account, setAccount] = useState("");
    const [salery, setSalery] = useState("");
    const [accountData, setAccountData] = useState([]); 
    const [search, setSearch] = useState ("");
    const handleSave = () => {
        const newAccount = {
            name,
            account,
            salery
        };
        setAccountData([...accountData, newAccount]);
        clearForm(); // Clear the form after saving
    };
    const clearForm = () => { // Corrected function name
        setName("");
        setAccount("");
        setSalery("");
    };

    return (
        <div className="box">
            <label id='name'>Search Employee</label>
            <input type='text' id='name' placeholder='Employee Name' value={search} onChange={(e) => setSearch(e.target.value)}></input>

            <h1>Account Form</h1> 
            <label id='name'>Employee Name</label> 
            <input type='text' id='name' placeholder='Employee Name' value={name} onChange={(e) => setName(e.target.value)}></input>
            <br /><br />
            <label id='name'>Account Number</label>
            <input type='text' id='name' placeholder='Account Number' value={account} onChange={(e) => setAccount(e.target.value)}></input>
            <br /><br />
            <label id='name'>Salary</label> {/* Corrected spelling */}
            <input type='number' id='name' placeholder='Salary' value={salery} onChange={(e) => setSalery(e.target.value)}></input>
            <br/><br />
            <button id='btn' onClick={handleSave}>Save</button>
            <button id='btn1' onClick={clearForm}>Clear</button> 
            <h1>Account Detail</h1>
            <table>
                <thead>
                    <th>Employee Name</th>
                    <th>Account Number</th>
                    <th>Salery</th>
                </thead>
                <tbody>
                    {accountData.filter(account => account.name.toLowerCase().includes(search.toLowerCase()
                    ))
                   .map((account,index)=> (
                        <tr key={index}>
                            <td>{account.name}</td>
                            <td>{account.account}</td>
                            <td>{account.salery}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
