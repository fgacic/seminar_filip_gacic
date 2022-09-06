import React, { Component, useState } from 'react';
import CourseForm from './CourseForm';
import CourseItem  from './CourseItem';
import StudentCourses from './StudentCourses';
import StudentItem  from './StudentItem';

function Mentor() {
    const [currentPage, setCurrentPage] = useState('course');
    const [openedCourse, setOpenedCourse] = useState(null);
    const [nowOpenedCourse, setNewOpenedCourse] = useState(null);
    const [openedStudent, setOpenedStudent] = useState(null);
    const [readOnly, setReadOnly] = useState(null)
    const [students, setStudents] = useState([{
        "id": 1,
        "email": "asd",
        "password": "dsa",
        "role": "student",
        "status": "none"
    },{
        "id": 1,
        "email": "asd",
        "password": "dsa",
        "role": "student",
        "status": "none"
    }]);
    const [courses, setCourses] = useState([{
        "id": 1,
        "ime": "Linearna algebra",
        "kod": "SIT001",
        "program": "Program nije unesen",
        "bodovi": 5,
        "sem_redovni": 1,
        "sem_izvanredni": 1,
        "izborni": "ne"
    },{
        "id": 1,
        "ime": "Linearna algebra",
        "kod": "SIT001",
        "program": "Program nije unesen",
        "bodovi": 5,
        "sem_redovni": 1,
        "sem_izvanredni": 1,
        "izborni": "ne"
    },{
        "id": 1,
        "ime": "Linearna algebra",
        "kod": "SIT001",
        "program": "Program nije unesen",
        "bodovi": 5,
        "sem_redovni": 1,
        "sem_izvanredni": 1,
        "izborni": "ne"
    }]);

    const openDetails = ()=>{}
    const openEdit = ()=>{}
    const openNewCourse = ()=>{}
    const closeForm = () =>{
        setOpenedCourse(null);
    } 

    return (
            <div className="beginning-component">
                <h1>Mentor</h1>
                <button onClick={()=>setCurrentPage('course')}>courses</button>
                <button onClick={()=>setCurrentPage('students')}>students</button>
                <br/>
                <br/>
                <button onClick={()=>{setOpenedCourse(null); nowOpenedCourse? setNewOpenedCourse(null) : setNewOpenedCourse({})}}>New Course</button>
                {nowOpenedCourse && <CourseForm course={nowOpenedCourse} closeForm={closeForm}/>}
                {openedCourse && <CourseForm course={openedCourse} isDetails={readOnly} closeForm={closeForm}/> }
                <div>
                    <ul style={{minWitdh:'50%'}}>
                        {{
                            'course':courses?.map((course)=><CourseItem course={course} openDetails/>),
                            'students':students?.map((student)=><StudentItem student={student} openStudentInfo={(s)=>{setOpenedStudent(s); setCurrentPage('student')}}/>),
                            'student': openedStudent?.map((student)=><StudentCourses student={student}/>), 
                         }[currentPage]}
                    </ul>
      
                </div>
            </div>
    )
}

export default Mentor;