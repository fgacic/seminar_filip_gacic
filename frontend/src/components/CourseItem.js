function CourseItem({ course, openDetails, openEdit }) {
    return (<div style={{ display: 'flex', borderBottom: '1px solid black' }}><p>{course.ime}  ({course.kod})</p>  <p style={{ marginLeft: '40px', color: 'blue', cursor: 'pointer' }} onClick={openDetails}>Details</p> <p style={{ marginLeft: '20px', color: 'blue', cursor: 'pointer' }} onClick={() => openEdit(course)}>Edit</p></div>);
}

export default CourseItem;