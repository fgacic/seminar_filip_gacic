import { useState } from "react";

function CourseForm({course, isDetails, submit, closeForm}) {
    const [formData, setFormData] = useState(course || {});

    return ( 
    <div style={{display:'flex', flexDirection:'column'}}>
        <p>Ime: </p>
        <input type={'text'} disabled={isDetails} defaultValue={course.ime} onChange={(e)=>{setFormData({...formData, ime: e.target.value})}}/>
        <p>Kod: </p>
        <input type={'text'} disabled={isDetails} defaultValue={course.kod} onChange={(e)=>{setFormData({...formData, kod: e.target.value})}}/>
        <p>Program: </p>
        <input type={'text'} disabled={isDetails} defaultValue={course.program} onChange={(e)=>{setFormData({...formData, program: e.target.value})}}/>
        <p>Bodovi: </p>
        <input type={'text'} disabled={isDetails} defaultValue={course.bodovi} onChange={(e)=>{setFormData({...formData, bodovi: e.target.value})}}/>
        <p>Sem_redovni: </p>
        <input type={'text'} disabled={isDetails} defaultValue={course.sem_redovni} onChange={(e)=>{setFormData({...formData, sem_redovni: e.target.value})}}/>
        <p>Sem_izvanredni: </p>
        <input type={'text'} disabled={isDetails} defaultValue={course.sem_izvanredni} onChange={(e)=>{setFormData({...formData, sem_izvanredni: e.target.value})}}/>
        <div style={{display:'flex', flexDirection:'row', marginTop:'20px', justifyContent:'space-evenly'}}>
            <button onClick={()=>submit(formData)}>Submit course</button>
            <button onClick={closeForm}>Close</button>
        </div>
    </div>
    );
}

export default CourseForm;