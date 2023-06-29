import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className='mainNav'>
        <ul>
            <li>
                <Link to='/'>Back</Link>
            </li>
            <li>
                <Link to='/budgetcalculator'>Budget calculator</Link>
            </li>
            <li>
                <Link to="/passwordgenerator">Password Generator</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar