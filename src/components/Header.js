import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='global-header'>
      <div className='global-header-content'>
        <Link to='/'>
          <h1>Logo</h1>
        </Link>
        
        <Navbar />
      </div>
      
    </header>
  )
}

export default Header