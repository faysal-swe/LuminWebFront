import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from '../../assets/luman_logo.png';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'white', color: 'black', p: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
             <img src={logo} alt="Company Logo" width="180" height="50"/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Company</Typography>
            <Link href="#" color="inherit" underline="hover">About us</Link><br />
            <Link href="#" color="inherit" underline="hover">Our Advantage</Link><br />
            <Link href="#" color="inherit" underline="hover">Products</Link><br />
            <Link href="#" color="inherit" underline="hover">Sustainability</Link><br />
            <Link href="#" color="inherit" underline="hover">Contact</Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Follow us</Typography>
            <IconButton color="inherit"><FacebookIcon /></IconButton>
            <IconButton color="inherit"><TwitterIcon /></IconButton>
            <IconButton color="inherit"><LinkedInIcon /></IconButton>
            <IconButton color="inherit"><InstagramIcon /></IconButton>
          </Grid>
        </Grid>
        <Box sx={{ borderTop: 1, borderColor: 'grey.500', mt: 3, pt: 3 }}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography variant="body2">2024 All rights reserved - Luman Corporation</Typography>
            </Grid>
            <Grid item>
              <Link href="#" color="inherit" underline="hover">Terms & Conditions</Link> | 
              <Link href="#" color="inherit" underline="hover">Privacy</Link> | 
              <Link href="#" color="inherit" underline="hover">Security</Link> | 
              <Link href="#" color="inherit" underline="hover">Cookie Declaration</Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
