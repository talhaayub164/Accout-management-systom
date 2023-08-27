import React,{useState} from 'react'

export function HR() {
    const [name,setName] = useState("");
    const [hrData,setHRData] = useState([]);
    const handleSave =() => {
        const newdata = {
            name,
        
        };
        setHRData([...hrData,newdata]);
        clearForm();
       

    };
    const clearForm = () => {
        setName  ('');
    }
    return(
        <div className="box">
            <h1>Employee foam</h1>
            <label id='name'>Employee Name</label>
            <input type='text' id='name'  value={name} placeholder='Employee Name' onChange={(e) => setName(e.target.value)}></input>
            <br/><br />
            <button id='btn' onClick={handleSave}>Save</button>
            <button id='btn1' onClick={clearForm}>Clear</button>
            <table>
                <thead>
                    <th>Name</th>
                </thead>
                <tbody>
                    {hrData.map((HR,index) => (
                        <tr key={index}>
                            <td>{HR.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}