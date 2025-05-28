import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const StudentDetails = () => {
  const {id} = useParams()
  const [student, setStudent] = useState(null)

  useEffect(() => {
    fetch(`https://68371575664e72d28e437a17.mockapi.io/Students/${id}`).then(res => res.json()).then(data => setStudent(data))
  }, [id])

  if(!student) return <p>Student is loading ...</p>
  

  return (
    <main>
      <div className='student-details'>
        <div>
          <h4>Id: {student.id}</h4>
          <h4>Name: {student.name.toUpperCase()}</h4>
          <h4>Age: {student.age}</h4>
          <h4>Grade: {student.grade}</h4>
        </div>
      </div>
    </main>
  )
}

export default StudentDetails