import Student from "./components/Student";
import StudentLogin from "./routes/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";
import Mentor from "./components/Mentor"



function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<StudentLogin />} />
          <Route exact path="/student" element={localStorage.getItem('token') ? <Student /> : <StudentLogin />} />
          <Route exact path="/mentor" element={localStorage.getItem('token') ? <Mentor /> : <StudentLogin />} />

        </Routes>

      </Router>

    </div>
  );
}

export default App;