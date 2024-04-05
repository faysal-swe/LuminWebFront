import React, { useState } from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const Header = () => {
    const [clicked, setClicked] = useState(false);
    const items = [
     {
       key: 'home',
       label: 'Home',
       to: '/',
     },
     {
       key: 'about',
       label: 'About',
       to: '/about',
     },
     {
       key: 'product',
       label: 'Product',
       to: '/about',
     },
     /*{
       key: 'requisitionIssue',
       icon: <ShoppingCartOutlined />,
       label: 'Requisition(issue)',
       to: '/requisionIssue',
     },
     {
       key: 'issuedRequisition',
       icon: <ShoppingCartOutlined />,
       label: 'Issued Requisition',
       to: '/issuedRequisition',
     },
     {
       key: 'addInventory',
       icon: <ShoppingCartOutlined />,
       label: 'Add Inventory',
       to: '/addInventory',
     },
     {
       key: 'currentStock',
       icon: <ShoppingCartOutlined />,
       label: 'Current Stock',
       to: '/currentStock',
     },
     {
       key: 'stockAdjust',
       icon: <ShoppingCartOutlined />,
       label: 'Stock Adjust',
       to: '/stockAdjust',
     },
     {
       key: 'suppliers',
       icon: <BlockOutlined />,
       label: 'Suppliers',
       to: '/allSuppliers',
     },
     {
       key: 'products',
       icon: <VerticalAlignBottomOutlined />,
       label: 'Products',
       to: '/allProducts',
     },
     {
       key: 'reports',
       icon: <FileOutlined />,
       label: 'Reports',
       to: '/reports',
     },
     {
       key: 'employee',
       icon: <TeamOutlined />,
       label: 'Employee',
       to: '/allEmployees',
     },
     {
       key: 'userManagement',
       icon: <UserOutlined />,
       label: 'User Management',
       to: '/userManagement',
     },
     {
       key: 'settings',
       icon: <SettingOutlined />,
       label: 'Settings',
       to: '/settings',
     },
     {
       key: 'profile',
       icon: <UserOutlined />,
       label: 'Profile',
       to: '/profile',
     },
     {
       key: 'customer',
       icon: <TableOutlined />,
       label: 'Customer',
       to: '/customer',
     },
     {
       key: 'login',
       icon: <LoginOutlined />,
       label: 'Login',
       to: '/login',
     },
     {
       key: 'register',
       icon: <LogoutOutlined />,
       label: 'Register',
       to: '/register',
     },*/
   ];
    return (
         <div
            className={
              clicked
              ? `${styles.nav} ${styles.responsive}`
              : `${styles.nav} ${styles.desktop__nav}`
            }
          >
         <ul>
            <Link to='/' className={styles.list}>
                  <li>Home</li>
            </Link>
            <Link to='/about' className={styles.list}>   
                 <li>About</li>
            </Link>
            <Link to='/products' className={styles.list}>
                 <li>Products</li>
            </Link>
            <Link to='/contact' className={styles.list}>
                 <li>Contact Us</li>
            </Link>
            <a className={styles.icon} onClick={() => setClicked(!clicked)}> 
                  <i className='fa fa-bars'></i>
            </a>
        </ul>
      </div>
     );
 };
export default Header;