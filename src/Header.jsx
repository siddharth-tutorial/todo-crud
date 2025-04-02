import React from 'react'
import { Link } from 'react-router'

function Header() {
  return (
    <div>
      <Link to='/'>Home</Link>&nbsp;&nbsp;
      <Link to='/Todolist'>To-do list</Link>&nbsp;&nbsp;

    </div>
  )
}

export default Header
