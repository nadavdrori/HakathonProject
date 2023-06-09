import React from 'react';
import logo from './Tuti.jpg';
import "./PersonalDetails.css";
import Navbar from './NavBar';


const PersonalDetails = () => {
    return(
        <div className='div'>
        <div className ="nofar"></div>
        <p className="headline">Welcome Nofar!</p>
        <img src={logo} alt="Logo" className="rounded-image" />
        <p className='Tscore'>Total coins: 100</p>
        <p className='Ascore'>Available coins: 50</p>
        </div>
        
    )
}
export default PersonalDetails;