import React from 'react';
//import { Link } from 'react-router-dom'; // Ensure this is installed and configured
import './navBar.css';

type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <div className='navB'>
      <nav className='ord1'>
        <div className='logoN'>LMS</div>
        <ul>
          <li></li>  
          <li>Dashboard</li>
          <li>Books</li>
          <li>Members</li>      
          <li><button></button></li>
          
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;