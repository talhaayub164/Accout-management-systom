import React,{useState} from 'react'

export function Customer(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [cnic,setCnic] = useState("");
    const [cell,setCell] = useState("");
    const [customerData,setCustomerData] = useState([]);
    const [search,setSearch] = useState("");

    const handleSave = () => {
        const newCustomer = {
            name,
            email,
            cnic,
            cell
        };
        setCustomerData([...customerData, newCustomer]);
        

    };
    const clearFoam = () => {
        setName("");
        setEmail("");
        setCnic("");
        setCell("");
    }



    return(
        <div className="box">
            <label id='name'>Customer Search</label>
            <input type='text' id='name' placeholder = "Customer Search" value={search} onChange={(e) => setSearch(e.target.value)}></input>
            <h1>Customer Foam</h1>
            <label id='name'>Customer Name</label>
            <input type="text" id='name' placeholder="Customer Name" value={name} onChange={(e) => setName(e.target.value)}></input>
            <br /><br />
            <label id='name'>Customer Email</label>
            <input type="text" id='name' placeholder="Customer Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <br /><br />
            <label id='name'>CNIC</label>
            <input type="Number" id="name" placeholder="Customer CNIC" value={cnic} onChange={(e) => setCnic(e.target.value)}></input>
            <br /><br />
            <label id='name'>Cell Number</label>
            <input type="Number" id="name" placeholder="Customer Cell Number" value={cell} onChange={(e) => setCell(e.target.value)}></input>
            <br /><br />
            <button id='btn' onClick={handleSave}>Save</button>
            <button id='btn1' onClick={clearFoam}>Save</button>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Cnic</th>
                    <th>Cell</th>
                </thead>
                <tbody>
                {customerData.filter(customer => customer.name.toLowerCase().includes(search.toLowerCase()
                    ))
                    .map((customer,index) => (
                        <tr key={index}>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.cnic}</td>
                            <td>{customer.cell}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}