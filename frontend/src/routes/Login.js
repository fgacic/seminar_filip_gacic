import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { decodeToken } from "react-jwt"

const StudentLogin = ({ }) => {
    let navigate = useNavigate();
    let [name, setName] = useState()
    let [pass, setPass] = useState()

    const handleChangeName = (event) => {
        const value = event.target.value;
        setName(value);
    };
    const handleChangePass = (event) => {
        const value = event.target.value;
        setPass(value);
    };
    async function handleSubmit(e) {
        e.preventDefault()
        await axios({
            method: 'POST',
            url: 'http://localhost:5000/korisnici/login',
            headers: { 'Content-Type': 'application/json' },
            data: {
                email: name,
                password: pass
            }
        })
            .then(res => {
                console.log(res)
                let userInfo = decodeToken(res.data.token)
                localStorage.setItem('token', res.data.token);
                userInfo.isMentor ? navigate('/mentor') : navigate('/student')
                window.location.reload(false);
            }).catch(function (error) {
                console.log(error);
            });

    }



    return (
        <div className="student-login">
            <h1>Login</h1>

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
            <input type="submit" value="Submit" onClick={handleSubmit} />
            <input type="submit" value="Register" onClick={() => { navigate('/register') }} />

        </div>

    )
}
export default StudentLogin
