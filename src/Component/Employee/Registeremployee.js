import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import {
  Grid,
  Paper,
  Typography,
  Avatar,
  CssBaseline,
  TextField,
  Button,
  Box,
  AppBar,
  Toolbar,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../Admin/AdminNavbar';

function Registeremployee() {
  const [nameError, setNameError] = useState('');
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

    // Check if all fields have been filled in
    if (!name ||!email ||!password ||!phoneno ||!location) {
      alert('Please fill in all fields.');
      formValid = false;
    }

    // Validate name
    if (!/^[a-zA-Z-' ']+$/.test(name)) {
      setNameError('Please enter a valid name.');
      formValid = false;
    } else {
      setNameError('');
    }

    if (formValid) {
      const userData = {
        name,
        email,
        password,
        phoneno,
        location,
      };

      axios
       .post('http://localhost:8081/RegisterEmployee', userData)
       .then((response) => {
          console.log('Registration successful:', response.data);
          const adminId = response.data.adminId;
          sessionStorage.setItem('adminId', adminId);
          alert('Success');
          navigate(`/empprofile`);
        })
       .catch((error) => {
          alert('Registration failed. Please try again.');
        });
    }
  };

  const defaultTheme = createTheme();

  return (
    
    <>
   <AppBar position="static" style={{ backgroundColor: "#33475b" }}>
      
      <Toolbar style={{ backgroundColor: "#33475b" }}>
        <Button color="inherit" href="/admindetails" >
          <Button> <b style={{color:"white"}}> Profile </b></Button>
        </Button>
        <Typography variant="h6" style={{ flexGrow: 1, color: "white" }}>
          Welcome to Admin Panel!
        </Typography>
        <Button color="inherit" href={`/empprofile`}>
          Employee details
        </Button>
        <Button color="inherit" href={`/itteamprofile`}>
          ITTeam details
        </Button>
        <Button color="inherit" href="/raisedticket">
          Raised Ticket
        </Button>
        <Button color="inherit" href="/getallasset">
          Asset details
        </Button>

        <Link
          className="btn btn-outline-info border-0 text-dark rounded-pill"
          name="Logout"
          onClick={() => {
            window.sessionStorage.removeItem("isLogged");
            window.location.href = "/";
          }}
        >
          <b style={{ color: "white" }}>Logout</b>
        </Link>

        
      </Toolbar>
     
    </AppBar>
      {/* <AppBar position='static'>
      <div id="sidebar" style={{marginRight:"1px",color:"WHITE"}}>
         <Toolbar>
           <Typography variant="h5"><b>REGISTER EMPLOYEE</b></Typography>
         </Toolbar></div>
       </AppBar> */}
       
       
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: '20vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={2}
            md={3}
            sx={{
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light'
                 ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 1,
                py:3,
                mx: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* <Typography component="h1" variant="h5">
                Register
              </Typography> */}
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  label="Name"
                  fullWidth
                  name="name"
                  required
                  autoFocus
                  error={!!nameError}
                  helperText={nameError}
                />
                <TextField
                  margin="normal"
                  label="Email"
                  fullWidth
                  name="email"
                  required
                />
                <TextField
                 margin="normal"
                  label="Password"
                  fullWidth
                  name="password"
                  type="password"
                  required
                />
                <TextField
                 margin="normal"
                  label="Phone Number"
                  fullWidth
                  name="phoneno"
                  required
                />
                <TextField label="Location"  margin="normal" fullWidth name="location" required />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Register
                </Button>
                <Link
                        to={"/empprofile"}
                        type="submit"
                        className="btn btn-success btn-md"
                      >
                        Back
                      </Link>
              </Box>
            </Box>
          </Grid>
          
        </Grid>
       
        </ThemeProvider>

       
                      

    </>

  );
}

export default Registeremployee;