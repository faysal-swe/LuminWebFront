import React from 'react';
import styles from './header.module.css';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../../assets/luman_logo.png';
const Header = () => {
  const navItems = [

    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Product', path: '/products' },
    { title: 'Services', path: '/services' },
    { title: 'Contact Us', path: '/contact' },
  ];

  return (
    <AppBar position="static" style={{ backgroundColor: 'white' }}>
      <Toolbar >
      <img src={logo} alt="Company Logo" width="85" height="30"/>
      <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
      {navItems.map((item) => (
        <Button
          key={item.title}
          color="inherit"
          component={Link}
          to={item.path}
          style={{ margin: '0 10px', color:'black'}}
          className={styles.button_hover}

        >
          {item.title}
        </Button>
      ))}
    </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
