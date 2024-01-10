import React from 'react'
import {AppBar, Typography, Toolbar, Box , Button} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useAuth } from '../Hooks/AuthProvider';

export default function Navbar() {

    const { isLoggedIn, logout } = useAuth();
    console.log('Is logged in:', isLoggedIn());

    return (
    <>
    <AppBar postion = 'static' sx = {{paddingLeft: 35, paddingRight: 35, boxShadow: 'none'}} >
        <Toolbar>
            <Typography variant='h5' sx = {{flexGrow:1}}>ShopKart.</Typography>
            <Box  >
            <Link to = "/Home" style={{color:'white'}}><Button color = 'inherit'>Product</Button></Link>
                {
                    isLoggedIn() ? (
                        <Link to = "/" style={{color:'white'}}><Button color = 'inherit' onClick={logout}>Logout</Button></Link>
                    ) : (
                        <Link to = "/login" style={{color:'white'}}><Button color = 'inherit'>Login</Button></Link>
                    )
                }
                <Link to = "/cart"><Button><ShoppingCartIcon color = 'secondary' fontSize='medium'/></Button></Link>
            </Box>
        </Toolbar>
    </AppBar> 
    </>
  )
}

