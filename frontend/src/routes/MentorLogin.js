import React from 'react';

function MentorLogin(props) {
    return (
        <div className="mentor-login">
            <form>
                <label>
                    Name:
                    <input type="text" id="name-label" />
                </label>
                <br />
                <label>
                    Pass:
                    <input type="text" id="pass-label" />
                </label>
                <br />
                <input type="submit" value="Submit" onClick={() => { }} />
            </form>
        </div>
    );
}

export default MentorLogin;