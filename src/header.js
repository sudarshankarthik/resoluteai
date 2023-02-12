import React from 'react'
import './index.css'
import user from './res/icons/user.png'

function Header() {
  return (
    <div className='header'>
        <h2 className='header-logo'>Logo</h2>
        <div className='header-userid'>
            <img src={user} alt='user' width='15px'/>
            <label className='header-userid-text'>username@resoluteai.in</label>
        </div>
    </div>
  )
}

export default Header