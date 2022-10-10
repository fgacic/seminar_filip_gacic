import React from 'react'
import { useNavigate, } from 'react-router-dom';


function Logout() {
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={(e) => {
                localStorage.removeItem("token");
                window.location.reload();
            }}>
                Logout
            </button >
        </div>
    )
}

export default Logout