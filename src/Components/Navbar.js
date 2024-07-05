import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
const Navbar = () => {
  return (
      <AppBar position="static">
        <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Navbar
          </Typography>
        </Toolbar>
        </Container>
      </AppBar>
  )
}

export default Navbar


//I have generated the Boilerplate for this component with just one command and 
//that is "rafce" "r" for react, "af" for arrow function ()=>, "c" for component and lastly
// "e" for export