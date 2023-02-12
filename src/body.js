import React, { useState } from 'react'
import Nav from './nav'
import Main from './main'
import './index.css'

function Body() {

  const [page,setPage] = useState(2)

  const changePage = (pageno) => {
    setPage(pageno)
  }

  return (
    <div className='Body'>
      <Nav className='body-nav' changePage = {changePage} page={page}/>
      <Main className='body-main' page={page}/>
    </div>
  )
}

export default Body