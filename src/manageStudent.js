import React, { useEffect, useState } from 'react'
import './index.css'
import db from './firebaseconfig';
import { collection, getDoc, getDocs } from 'firebase/firestore';
import view from './res/icons/view.png'
import dlt from './res/icons/delete.png'
import write from './res/icons/edit.png'


function ManageStudent() {

    const currentdate = new Date();
    const datetime = currentdate.getDate() + " "
                + currentdate.toLocaleString('default', { month: 'short' })  + " " 
                + currentdate.getFullYear() + " "   
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes()

    const [users, setUsers] = useState([])
    const usersCollection = collection(db,"students")


    useEffect(() => {
      const getUsers = async() => {
        const data = await getDocs(usersCollection)
        
        setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      }
  
      getUsers()
    
      
    }, [])

    console.log(users)

    const students = users.map((student) => {
      return (
        <tr key={student.id}>
          <td>{student.firstName + " " + student.middleName}</td>
          <td>{student.sClass + " " + student.div}</td>
          <td>{student.pNo}</td>
          <td>
            <img src={view} alt='view' />
            <img src={write} alt='edit' />
            <img src={dlt} alt='delete' />
          </td>
        </tr>
      )
    })
    

  return (
    <div className='ManageStudent'>
        <div className='manageHeader'>
            <h2 className='manageHeader-text'>Manage Student</h2>
            <label className='manageHeader-date'>{datetime}</label>
        </div>
        <div className='manageTable'>
          <table>
            <thead>
            <tr>
              <th>Name</th>
              <th>Class</th>
              <th>Roll Number</th>
              <th>View / Edit / Delete</th>
            </tr>
            </thead>
            <tbody>
            {students}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default ManageStudent