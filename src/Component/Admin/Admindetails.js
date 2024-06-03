import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button, Grid, Avatar } from '@mui/material';
import Search from '../Search'; 
import AdminNavbar from './AdminNavbar';
import { AppBar, Toolbar } from "@material-ui/core";


const Admindetails = () => {
  const [admin, setAdmin] = useState([]);
  const [search, setSearch] = useState('');

//   const userId = sessionStorage.getItem('userId');

  useEffect(() => {
    axios.get(`http://localhost:8081/GetAllAdmin`).then((response) => {
      setAdmin(response.data);
    });
  }, []);

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
    
   
    <section>
      {/* <Search search={search} setSearch={setSearch} /> */}
      <Grid container spacing={2}>
        {admin.map((admin) => (
          <Grid item xs={4} sm={2} md={4} key={admin.adminid} >
            <Card   style={{ width: '350px', marginBottom: '40px', marginRight: '60px' ,marginLeft:"430px",marginTop:"40px"}}>
              <CardContent>
                <Avatar alt={admin.name} src="/path/to/avatar-image.jpg" />
                <Typography variant="h6">Admin ID: {admin.empid}</Typography><hr/>
                <Typography variant="h6">Admin Name: {admin.name}</Typography><hr/>
                <Typography variant="h6">Email: {admin.email}</Typography><hr/>
                {/* <Typography variant="h6">Password: {admin.password}</Typography><hr/> */}
                <Typography variant="h6">Location: {admin.location}</Typography><hr/>
                <Typography variant="h6">Phone No: {admin.phoneno}</Typography><hr/>
                <div className="actions">
                  {/* <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<FaEdit />}
                    component={Link}
                    to={`/updateadmin`}
                  >
                    Update
                  </Button> */}
                </div>
              </CardContent>
            </Card>
            <Button
              href="/dashboard"
                        type="submit"
                        className="btn btn-success btn-md"
                       style={{backgroundColor:"black",color:"white"}}                      >
                        Back
                      </Button>
          </Grid>
        ))}
      </Grid>
    </section>
    </>
  );
};

export default Admindetails;
