import React, { useEffect, useState } from 'react'
import './Navbar.css'
import abubakar from './assets/abubakar.jpg'
import logo from './assets/logo.png'

const Navbar = () => {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false)
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])
  return (
    <nav className={`navbar ${show && 'navbar__black '}`}>
      <img className='navbar__logo' src={logo} alt='Netflix Logo' />
      <a
        href='https://github.com/mabubakar'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img className='navbar__avatar' src={abubakar} alt='Abubakar' />
      </a>
    </nav>
  )
}

export default Navbar
