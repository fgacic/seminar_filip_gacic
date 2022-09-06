import Student from "./components/Student";
import Register from "./components/Register"
import { useSelector } from "react-redux";
import StudentLogin from "./routes/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route, Redirect

} from "react-router-dom";
import Mentor from "./components/Mentor"
import MentorLogin from "./routes/MentorLogin"
import Main from "./components/Main"


function App() {
  const loginHandler = () => {

  }

  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route exact path="/" element={<StudentLogin />} />
          <Route exact path="/student" element={localStorage.getItem('token') ? <Student /> : <StudentLogin />} />
          <Route exact path="/mentor" element={localStorage.getItem('token') ? <Mentor /> : <StudentLogin />} />
          <Route exact path="/register" element={<Register />} />

        </Routes>

      </Router>

    </div>
  );
}

export default App;