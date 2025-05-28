import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddStudent = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [grade, setGrade] = useState('')

  let navigate = useNavigate()

  const handleAdd = (e) => {
    e.preventDefault()
    const newStudent = {name, age, grade}
    fetch('https://68371575664e72d28e437a17.mockapi.io/Students', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newStudent)
    }).then(() => navigate('/students'))
  }

  return (
    <section>
      <h2 style={{textAlign: 'center', padding: '2rem', fontSize: '2.4rem'}}>Add Student Form</h2>
      <form onSubmit={handleAdd}>
        <label>Student name: </label>
        <input required value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label>Student age: </label>
        <input required value={age} onChange={(e) => setAge(e.target.value)} />
        <br />
        <label>Student grade: </label>
        <input required value={grade} onChange={(e) => setGrade(e.target.value)} />
        <br />
        <button type='submit'>Add</button>
      </form>
    </section>
  )
}

export default AddStudent