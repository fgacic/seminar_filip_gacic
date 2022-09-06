import React, { useState } from 'react';
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

    const editCourse = (data) => {
        console.log(data);
    }
    const createNewCourse = (data) => {
        console.log(data);
    }
    const closeForm = () =>{
        setNewOpenedCourse(null);
        setReadOnly(false);
        setOpenedCourse(null);
    } 

    return (
            <div className="beginning-component">
                <h1>Mentor</h1>
                <button onClick={()=>setCurrentPage('course')}>courses</button>
                <button onClick={()=>setCurrentPage('students')}>students</button>
                <br/>
                <br/>
                {currentPage==='course' && <button onClick={()=>{setOpenedCourse(null); nowOpenedCourse? setNewOpenedCourse(null) : setNewOpenedCourse({})}}>New Course</button>}
                {currentPage==='course' && nowOpenedCourse && <CourseForm course={nowOpenedCourse} closeForm={closeForm} submit={createNewCourse}/>}
                {currentPage==='course' && openedCourse && <CourseForm course={openedCourse} isDetails={readOnly} closeForm={closeForm} submit={editCourse}/> }
                <div>
                    <ul style={{minWitdh:'50%'}}>
                        {{
                            'course':courses?.map((course)=><CourseItem course={course} openDetails={()=>{setNewOpenedCourse(null); setReadOnly(true); setOpenedCourse(course)}} openEdit={()=>{setNewOpenedCourse(null); setReadOnly(false); setOpenedCourse(course)}}/>),
                            'students':students?.map((student)=><StudentItem student={student} openStudentInfo={(s)=>{setOpenedStudent(s); setCurrentPage('student')}}/>),
                            'student': openedStudent?.map((student)=><StudentCourses student={student}/>), 
                         }[currentPage]}
                    </ul>
      
                </div>
            </div>
    )
}

export default Mentor;