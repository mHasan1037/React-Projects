import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to='/'>Back</Link>
                <Link to='/budgetcalculator'>Budget calculator</Link>
                <Link to="/passwordgenerator">Password Generator</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar