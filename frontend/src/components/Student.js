
import React, { Component, useEffect, useState } from 'react';
import Logout from './Logout';
import jwt_decode from "jwt-decode";
import axios from 'axios';

import CourseItemStudent from './CourseItemStudent';


export default function Student() {
    const [user, setUser] = useState([])
    const [courses, setCourses] = useState([])
    const [allCourses, setAllCourses] = useState([])

    async function ispisiPredmet(user, course) {

    }


    useEffect(() => {
        setUser(jwt_decode(localStorage.getItem('token')))

        axios.get(`http://localhost:5000/predmeti`).then(response => {
            setAllCourses(response.data)
        })
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:5000/korisniciprekopredmeta/${user.id}`).then(response => {
            setCourses(response.data.predmeti)
        })
    }, [user])

    return (
        <>
            <Logout />
            <h1>Student</h1>


            {courses.map(course => <CourseItemStudent user={user} course={course} ispisiPredmet={ispisiPredmet} />)}
            <br />
            <br />
            {allCourses.map(course => <CourseItemStudent user={user} course={course} ispisiPredmet={ispisiPredmet} />)}
        </>
    )
}
