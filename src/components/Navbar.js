import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navigation'>
      <ul>
        <li>
          <Link to='/test'>Nav Item 1</Link>
        </li>
        <li>
          <Link to='#'>Nav Item 2</Link>
        </li>
        <li>
          <Link to='#'>Nav Item 3</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar