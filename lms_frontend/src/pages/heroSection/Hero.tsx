//import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import lmslogo from '../../assets/lmslogo1.png';


export const Hero = () => {
    return (
          <div className="hero-left">
            <div className='lnavbar-container'>
            
            </div>
            <img src={lmslogo} style={{height:"200px", marginBottom:'0px'}}/>
            <h1>Welcome to the Library Management System.</h1>
            <p> Our Library Management System provides you with an intuitive interface to handle all operations efficiently. Whether it's adding new books, viewing the catalog,
                 updating details, or removing outdated entries, 
                 we've got you covered</p>
            <div className='heroLoginbtn'>
              <Link to="/home"><button type="button">Get Started</button></Link>
            </div>
    </div>
  );
};