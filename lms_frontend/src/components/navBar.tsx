import React from 'react';
import lmslogo from '../assets/lmslogo1.png';
import './navBar.css';

type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <div className='navB'>
      <nav className='ord1'>
        <div className='logoN'>LMS</div>
        <ul>
          <li></li>  
          <li>Books</li>
          <li>Categories</li>      
          <li><PersonIcon style={{color: '#555', backgroundColor:'white', borderRadius:'100px' }} /></li>
          
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;