import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const StudentList = () => {
  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/students').then(res => res.json()).then(data => setStudents(data))
  }, [])

  const handleDelete = (id) =>{
    fetch('http://localhost:3000/students',{
      method: 'DELETE'
    }).then(() =>{
      setStudents(students.filter((student) => student.id != id))
    })
  }
  return (
    <section style={{display: 'flex', flexDirection: 'column', gap: '3.5rem', padding: '1.5rem'}}>
      <h2 style={{textAlign: 'center', fontSize: '2.6rem'}}>Students List</h2>
      <div className='student-list'>
        <ul>
          {students.map((student) => (
            <li key={student.id} className='student'>
              Id: {student.id} <br></br>
              Name: {student.name} <br></br>
              <Link to={`/student/${student.id}`}>See details</Link>
              <button onClick={() => handleDelete(student.id)}>
                Delete student
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default StudentList