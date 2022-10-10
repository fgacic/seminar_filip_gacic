
function StudentItem({ student, openStudentInfo }) {
    return (<div style={{ display: 'flex', borderBottom: '1px solid black' }}><p>{student.email} 
    <button onClick={() => openStudentInfo(student.id)}>Courses</button></p></div>);
}

export default StudentItem