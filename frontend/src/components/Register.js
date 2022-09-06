
import { useNavigate } from 'react-router-dom';
import React, { Component, useState } from 'react';
import axios from 'axios';

const Register = () => {

    let navigate = useNavigate();
    let [name, setName] = useState()
    let [pass, setPass] = useState()
    let [role, setRole] = useState('student')
    let [status, setStatus] = useState('redovni')

    const handleChangePass = (event) => {
        const value = event.target.value;
        setPass(value);
    };

    const handleChangeName = (event) => {
        const value = event.target.value;
        setName(value);
    };
    const handleChangeRole = (event) => {
        const value = event.target.value;
        setRole(value);
    };
    const handleChangeStatus = (event) => {
        const value = event.target.value;
        setStatus(value);
    };
    async function handleRegister(e) {
        e.preventDefault()
        console.log('asd')
        await axios({
            method: 'POST',
            url: 'http://localhost:5000/korisnici',
            data: {
                "email": name,
                "password": pass,
                "role": role,
                "status": role === "mentor" ? 'none' : status
            }
        }).then(res => {
            console.log(res)
        }).catch(function (error) {
            console.log(error);
        });
    };
    const test = () => {

        console.log(status)
    }



    return (
        <div className="beginning-component">
            <h1>Register</h1>

            <label>
                Name:
                <input type="text" id="name-label" value={name} onChange={handleChangeName} />
            </label>
            <br />
            <label>
                Pass:
                <input type="password" id="pass-label" value={pass} onChange={handleChangePass} />
            </label>
            <br />

            <select onChange={handleChangeRole}>
                <option value="student">Student</option>
                <option value="mentor">Mentor</option>
            </select >
            <br />
            {role === "student" && (<select onChange={handleChangeStatus}>
                <option value="redovni">Redovni</option>
                <option value="izvanredni">Izvanredni</option>
            </select >)}
            <br />

            <button onClick={handleRegister} >Submit</button>
            <button onClick={() => { navigate('/') }} >Login</button>


        </div>
    );
}


export default Register;