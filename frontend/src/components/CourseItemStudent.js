import axios from "axios";

function CourseItem({ course, openDetails, ispisiPredmet, user }) {
    return (<div style={{ display: 'flex', borderBottom: '1px solid black' }}><p>{course.ime}  ({course.kod})</p>
        <p style={{ marginLeft: '40px', color: 'blue', cursor: 'pointer' }} onClick={openDetails}>Details</p>
        <p style={{ marginLeft: '20px', color: 'blue', cursor: 'pointer' }}
            onClick={() => {
                axios({
                    url: 'http://localhost:5000/upisi',
                    method: 'post',
                    data: {
                        student_id: user.id,
                        predmet_id: course.id
                    }
                }).then(() => { window.location.reload() })
            }}>Upisi</p>
        <p style={{ marginLeft: '20px', color: 'blue', cursor: 'pointer' }}
            onClick={() => { axios.delete(`http://localhost:5000/ispisi/${user.id}/${course.id}`).then(() => { window.location.reload() }) }}>Ispisi</p></div>);
}

export default CourseItem;