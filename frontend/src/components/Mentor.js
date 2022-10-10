import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CourseForm from './CourseForm';
import CourseItem from './CourseItem';
import Logout from './Logout';
import StudentCourses from './StudentCourses';
import StudentItem from './StudentItem';

function Mentor() {
    const [currentPage, setCurrentPage] = useState('course');
    const [openedCourse, setOpenedCourse] = useState(null);
    const [nowOpenedCourse, setNewOpenedCourse] = useState(null);
    const [openedStudent, setOpenedStudent] = useState(null);
    const [readOnly, setReadOnly] = useState(null)
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState();

    const openDetails = () => { }
    const openEdit = () => { }
    const openNewCourse = () => { }
    const closeForm = () => {
        setOpenedCourse(null);
    }


    useEffect(() => {
        axios.get('http://localhost:5000/korisnici').then(response => { setStudents(response.data) })
        axios.get('http://localhost:5000/predmeti').then(response => setCourses(response.data))

    }, [])
    return (

        <div className="beginning-component">
            <Logout />
            <h1>Mentor</h1>
            <button onClick={() => setCurrentPage('course')}>courses</button>
            <button onClick={() => setCurrentPage('students')}>students</button>
            <br />
            <br />
            <button onClick={() => { setOpenedCourse(null); nowOpenedCourse ? setNewOpenedCourse(null) : setNewOpenedCourse({}) }}>New Course</button>
            {nowOpenedCourse && <CourseForm course={nowOpenedCourse} closeForm={closeForm} />}
            {openedCourse && <CourseForm course={openedCourse} isDetails={readOnly} closeForm={closeForm} />}
            <div>
                <ul style={{ minWitdh: '50%' }}>
                    {{
                        'course': courses?.map((course) => <CourseItem course={course} openDetails={openDetails} openEdit={setOpenedCourse} />),
                        'students': students?.map((student) => <StudentItem student={student} openStudentInfo={(s) => { setOpenedStudent(s); setCurrentPage('student') }} />),
                        'student': <StudentCourses student={openedStudent} />,
                    }[currentPage]}
                </ul>

            </div>

        </div>
    )
}

export default Mentor;