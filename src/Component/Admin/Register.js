import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { Select, MenuItem } from '@mui/material';
import { navigate, useNavigate } from 'react-router-dom';
 
function Register() {
    const [location, setlocation] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
 
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const phoneno = formData.get('phoneno');
    const location = formData.get('location');
 
    let formValid = true;
 
   
    if (!name ||!email ||!password ||!phoneno ||!location) {
      alert('Please fill in all fields.');
      formValid = false;
    }
 
  
    if (!email ||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address.');
      formValid = false;
    } else {
      setEmailError('');
    }
 
    
    if (!password || password.length < 8) {
      setPasswordError('Please enter a password with at least 8 characters.');
      formValid = false;
    } else {
      setPasswordError('');
    }
 
    if (formValid) {
      const userData = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        phoneno: formData.get('phoneno'),
        location: formData.get('location'),
      };
 
      axios.post('http://localhost:8081/RegisterAdmin', userData)
     .then(response => {
          console.log('Registration successful:', response.data);
          alert("success")
          navigate("/loginadmin")
        })
     .catch(error => {
          alert("Registration failed. Please try again.");
        });
    }
  };
  const defaultTheme = createTheme();
 
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '30vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={4}
          sx={{
            // backgroundImage: 'url(https://c1.wallpaperflare.com/preview/1007/302/520/workshop-shed-work-wood.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={4} md={3} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 1,
             
              mx: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Admin Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              
              <TextField
  margin="normal"
  required
  fullWidth
  id="email"
  label="Email Address"
  name="email"
  autoComplete="email"
  error={emailError!== ''}
  helperText={emailError}
/>
<TextField
  margin="normal"
  required
  fullWidth
  name="password"
  label="Password"
  type="password"
  id="password"
  autoComplete="new-password"
  error={passwordError!== ''}
  helperText={passwordError}
/>
              <TextField
                margin="normal"
                required
                fullWidth
                name="phoneno"
                label="Phone Number"
                type="phoneno"
                id="phoneno"
                autoComplete="phoneno"
                autoFocus
              />
              
             
              <Select
                margin="normal"
                required
                fullWidth
                name="location"
                label="location"
                id="location"
                value={location}
                onChange={(event) => setlocation(event.target.value)}
                >
           
                
                <MenuItem value="chennai">chennai</MenuItem>
                <MenuItem value="virudhunagar">virudhunagar</MenuItem>
                </Select>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/loginadmin" variant="body2">
                    Already have an account? Sign In
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
 
export default Register;