import { useState } from "react";

function CourseForm({course, isDetails}) {
    const [formData, setFormData] = useState(course || {});

    return ( 
    <div style={{display:'flex', flexDirection:'column'}}>
        <p>Ime: </p>
        <input type={'text'} disabled={isDetails} onChange={(e)=>{setFormData({...formData, ime: e.target.value})}}/>
        <p>Kod: </p>
        <input type={'text'} disabled={isDetails} onChange={(e)=>{setFormData({...formData, kod: e.target.value})}}/>
        <p>Program: </p>
        <input type={'text'} disabled={isDetails} onChange={(e)=>{setFormData({...formData, program: e.target.value})}}/>
        <p>Bodovi: </p>
        <input type={'text'} disabled={isDetails} onChange={(e)=>{setFormData({...formData, bodovi: e.target.value})}}/>
        <p>Sem_redovni: </p>
        <input type={'text'} disabled={isDetails} onChange={(e)=>{setFormData({...formData, sem_redovni: e.target.value})}}/>
        <p>Sem_izvanredni: </p>
        <input type={'text'} disabled={isDetails} onChange={(e)=>{setFormData({...formData, sem_izvanredni: e.target.value})}}/>
    </div>
    );
}

export default CourseForm;