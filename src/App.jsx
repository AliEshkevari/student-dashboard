import './index.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import StudentDetails from './components/StudentDetails'
import StudentList from './components/StudentList'
import AddStudent from './components/AddStudent';

function App() {
  return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/students">Student List</Link>
            </li>
            <li>
              <Link to="/addStudent">Add student</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/students' Component={StudentList} />
          <Route path='/student/:id' Component={StudentDetails} />
          <Route path='/addstudent' Component={AddStudent} />
        </Routes>
      </Router>
  )
}

export default App;