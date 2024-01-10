import React from 'react'
import { useState } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import Navbar from './Navbar';
// import Paper from '@mui/material/Paper';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../Hooks/AuthProvider';
import { setSessionToken } from '../localstorage/AuthService';

export default function Login() {

  const [email,setemail] = useState("");
  const [password, setpassword] = useState("");
  const { login} = useAuth();

  const navigate = useNavigate()

  const handlesubmit = async (e) => {
    
    e.preventDefault();

    axios.post('http://localhost:3000/auth/login', {email, password})
    .then(result => {
      console.log(result)
      if(result.data) {
        console.log(result)
        const token = result.data;
        console.log('Received token:', token); // Log the received token
        setSessionToken(token);
        login(token);
        navigate('/Home')
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <Container component="main" maxWidth="xs" sx = {{marginTop: 20}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            boxShadow : 2,
            borderRadius: 4,
            padding: 5  
          }}
        >
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handlesubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(e) => setemail(e.target.value)}
              InputProps={{ sx: { borderRadius: 35 } }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setpassword(e.target.value)}
              InputProps={{ sx: { borderRadius: 35 } }}
            />
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"New user Create and account"}
                </Link>
              </Grid>
            </Grid>
            <Button
                type="submit"
                variant="contained"
                >
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  )
}
