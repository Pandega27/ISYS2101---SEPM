import React, {useState} from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Navbar.css'

import Balance from '../Balance/Balance'

import logo from '../assets/logo.png'


export const Navbar = () => {

    const [menu,setMenu] = useState('homepage')

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        window.location.href = '/login'; 
    };

  return (
<div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt=""/>
        <h1> Welcome Back, Username! </h1>
      </div>

      <ul className='nav-menu'>
        <li> <Link to="/Homepage">Home</Link></li>
        <li> <Link to="/About"> About </Link>  </li>
        <li> <Link to="/Contact"> Contact </Link> </li>
      </ul>

      <div className='nav-signout'>
      <button onClick={handleLogout}>Logout</button>
      </div>
</div>
  )
}

export default Navbar

