import React, { useState } from 'react'

function AddStudent() {
      const currentdate = new Date();
    const datetime = currentdate.getDate() + " "
                + currentdate.toLocaleString('default', { month: 'short' })  + " " 
                + currentdate.getFullYear() + " "   
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes()

    const [firstName, setFirstName] = useState("")
    const [middleName, setMiddleName] = useState("")
    const [lastName, setLastName] = useState("")
    const [sClass, setSclass] = useState("")
    const [div, setDiv] = useState("")
    const [pNo, setPNo] = useState(0)
    const [addla, setAddla] = useState("")
    const [addlb, setAddlb] = useState("")
    const [landmark, setLandmark] = useState("")
    const [city, setCity] = useState("")
    const [pinCode, setPinCode] = useState(0)

    
  return (
    <div className='AddStudent'>
        <div className='manageHeader'>
            <h2 className='manageHeader-text'>Manage Student</h2>
            <label className='manageHeader-date'>{datetime}</label>
        </div>
        <div className='addStudent-form'>

          <input type="text" placeholder='First Name ' onChange={(e) => setFirstName(e.target.value)} />
          <input type="text" placeholder='Middle Name ' onChange={(e) => setMiddleName(e.target.value)} />
          <input type="text" placeholder='Last Name ' onChange={(e) => setLastName(e.target.value)} /> 
          <lable className="addStudent-form-lable">Class: </lable>
          <select onChange={(e) => setSclass(e.target.value)}>
          <option selected disabled hidden value="IV">Select Class</option>
          <option value="IV">IV</option>
          <option value="V">V</option>
          <option value="VI">VI</option>
          <option value="VII">VII</option>
          <option value="VII">VIII</option>
          </select>
          <div className='addStudent-class'>
            <div className={div === 1 ? 'addStudent-class-element-active' : 'addStudent-class-element'}> <button onClick={() => setDiv(1)}>A</button></div>
            <div className={div === 2 ? 'addStudent-class-element-active' : 'addStudent-class-element'}> <button onClick={() => setDiv(2)}>B</button></div>
            <div className={div === 3 ? 'addStudent-class-element-active' : 'addStudent-class-element'}> <button onClick={() => setDiv(3)}>C</button></div>
            <div className={div === 4 ? 'addStudent-class-element-active' : 'addStudent-class-element'}> <button onClick={() => setDiv(4)}>D</button></div>
          </div>
          <input type="number" placeholder='Phone Number ' onChange={(e) => setPNo(e.target.value)} />
          <input type="text" placeholder='Address Line A ' onChange={(e) => setAddla(e.target.value)} />
          <input type="text" placeholder='Address LIne B ' onChange={(e) => setAddlb(e.target.value)} />
          <input type="text" placeholder='Land Mark ' onChange={(e) => setLandmark(e.target.value)} />
          <input type="text" placeholder='City ' onChange={(e) => setCity(e.target.value)} />
          <input type="number" placeholder='Pin Code ' onChange={(e) => setPinCode(e.target.value)} />
        </div>
    </div>
  )
}

export default AddStudent