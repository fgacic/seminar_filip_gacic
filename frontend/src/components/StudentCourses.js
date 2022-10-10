import axios from "axios";
import { useEffect, useState } from "react";



function StudentCourses({ student }) {
    const [courses, setCourses] = useState([]);

    const getCourses = async (student) => {
        const res = await axios.get(`http://localhost:5000/korisniciprekopredmeta/${student}`)
        console.log(res)
        setCourses(res.data.predmeti)
    }

    useEffect(() => {
        getCourses(student)
        console.log(` studenti : ${student}`)
    }, [])

    return (<>{courses.map(course => <p>{course.ime}</p>)}</>);
}

export default StudentCourses;