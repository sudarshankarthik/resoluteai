import React from 'react'
import users from './res/icons/users.png'
import list from './res/icons/list.png'
import logout from './res/icons/logout.png'
import './index.css'

function Nav(props) {

    

  return (
    <div className='Nav'>
        <div className={props.page === 1 ? 'nav-element-active' : 'nav-element'}><img src={users} alt='Add Student' height='18.5px'/> <button onClick={() => props.changePage(1)}>Add Student</button></div>
        <div className={props.page === 2 ? 'nav-element-active' : 'nav-element'}><img src={list} alt='Manage Student' height='18.5px'/><button onClick={() => props.changePage(2)}>Manage Student</button></div>
        <div className={props.page === 3 ? 'nav-element-active' : 'nav-element'}><img src={logout} alt='Logout' height='18.5px'/><button onClick={() => props.changePage(3)}>Logout</button></div>
    </div>
  )
}

export default Nav