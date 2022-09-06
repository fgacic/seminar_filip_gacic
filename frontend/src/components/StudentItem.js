function StudentItem({student}) {
    return ( <div style={{display:'flex', borderBottom: '1px solid black'}}><p>{student.email} </p></div> );
}

export default StudentItem;