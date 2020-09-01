import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='global-header'>
      <div className='global-header-content'>
        <h1>Logo</h1>

        <Navbar />
      </div>
      
    </header>
  )
}

export default Header