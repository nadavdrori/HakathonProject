import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from './cart2.png';
import './NavBar.css';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

const Navbar = () => {
    function setValue(newValue: any) {
        throw new Error('Function not implemented.');
    }

  return (
    
    <AppBar position="static">
      <Toolbar className='toolBar' >
      <Typography className='ty' variant="h6" style={{ flexGrow: 1 }}></Typography>
        <Button color="inherit" component={Link} to="PersonalDetails" >profile</Button>
        <Button color="inherit" component={Link} to="hit" >&nbsp;&nbsp;&nbsp;&nbsp;HIT THE<br></br>ROAD JACK!</Button>
        <Button color="inherit" component={Link} to="gift" ><div><img className='logo' src={logo} alt="logo"/></div>gift shop</Button>
        </Toolbar>
    </AppBar>
    
  );
}; 

export default Navbar;