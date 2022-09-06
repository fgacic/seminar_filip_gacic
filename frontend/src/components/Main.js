import React from 'react';
import { useNavigate, } from 'react-router-dom';

function Main(props) {
    const navigate = useNavigate()

    return (
        <div>
            <input type="submit" value="Student" onClick={(e) => { navigate('/student') }} />
            <input type="submit" value="Mentor" onClick={(e) => { navigate('/mentor') }} />
        </div>
    );
}

export default Main;