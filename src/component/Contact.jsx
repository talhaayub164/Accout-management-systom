import { useState } from 'react';
import '../css/style.css';
export function Contact(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [subject,setSubject] = useState("");
    const [box,setBox] = useState("");
    const clearFoam = () => {
        setName("");
        setEmail("");
        setSubject("");
        setBox("");
    }
    
    return(
        <div className="box">
            <h1>Contact Us</h1>
            <p>
                LEAVE A MESSAGE
            </p>
            <h2>We love to hear from you</h2>
            <input type="text" id="name1" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}></input>
            <br /><br />
            <input type="text" id="email1" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <br /><br />
            <input type="text" id="subject1" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)}></input>
            <br /><br />
            <textarea className="form-control" id="mybox" rows="6" value={box} onChange={(e) => setBox(e.target.value)}></textarea>
            <br/><br />
            <button id='btn' onClick={clearFoam}>Submint</button>
        </div>
    )
}