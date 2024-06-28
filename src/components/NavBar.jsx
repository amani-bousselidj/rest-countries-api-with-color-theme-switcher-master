// src/components/NavBar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import  IconButton from '@mui/material/IconButton';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '../ThemeContext';
import  Container  from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
export default function NavBar() {
  const { toggleTheme , mode } = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{p:"0" ,boxShadow: "-1px 1px 20px 0px rgb(0 0 0 / 3%)"}}>
        <Container>
        <Toolbar sx={{padding:"0 !important"}}>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1,fontWeight: "800",
    fontSize: "1rem" }}>
            Where in the world?
          </Typography>
          <Button color="inherit" onClick={toggleTheme} sx={{ padding:"0 !important" ,'&:hover': {
            backgroundColor:"inherit"
          },fontSize:'0.8rem',textTransform:'none' ,gap:"0.3rem"}}>
            {mode === 'dark' ? <DarkModeIcon /> : <DarkModeOutlinedIcon />}
            Dark Mode
          </Button>
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
