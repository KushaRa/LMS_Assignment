import React from 'react';
import { Link } from 'react-router-dom'; // Ensure this is installed and configured
import './navBar.css';

type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <div className='navB'>
      <nav className='ord1'>
        <div className='logoN'>LMS</div>
        <ul>
          <li></li>  
          <li><Link to="/home">Dashboard</Link></li>
          <li>Books</li>
          <li><Link to="/members">Members</Link></li>      
          <li><button><UserButton /></button></li>
          <li><button><UserButton /></button></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;