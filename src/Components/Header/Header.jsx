import React from 'react'
import Logo from '../../../assets/logo.svg'
import './Header.css'



const Header = () => {
  return (
    <div className='header'>

        <img className='logo'src={Logo} alt=''/>

        <ul className='header-menu'>
            <li>Inicio</li>
            <li>Programas</li>
            <li>Nosotros</li>
            <li>Planes</li>
            <li>Testimonios</li>
        </ul>

    </div>
  )
}

export default Header