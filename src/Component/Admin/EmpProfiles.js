import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';
import AdminNavbar from './AdminNavbar';
import { AppBar, Toolbar } from "@material-ui/core";
import {Button } from "@material-ui/core";

import { Link } from "react-router-dom";

const EmpProfiles = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/GetAllEmployee').then((response) => {
      setEmployee(response.data);
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
      <Button style={{backgroundColor:"#33475b", color:"white",textDecoration:"none"}}>
       
       {/* <Link  to={`/itteamdetails/:itteam`} className="btn btn-info" >Back </Link>  */}
        <a href=  {`/registeremployee`} style={{textDecoration:"none",color:"white",backgroundColor:"#33475b",px:"9"}}>
          Add Employee</a>
        </Button>
      <div className="d-flex flex-wrap">
        {employee.map((emp) => (
          <Card key={emp.empid} variant="outlined" style={{ width: '350px', marginBottom: '20px',marginRight:'20px' }}>
            <div className="row g-0">
              <div >
                <img src={emp.image} className="img-fluid rounded-start" />
              </div>
              <div>
                <CardContent>
                  <Typography variant='h5'>Employee ID: {emp.empid}</Typography>
                  <Typography>Name: {emp.name}</Typography>
                  <Typography>Email: {emp.email}</Typography>
                  <Typography>Location: {emp.location}</Typography>
                  <Typography>Phone No: {emp.phoneno}</Typography>
                  {/* Add your update button or other actions here */}
                </CardContent>
              </div>
            </div>
          </Card>
          
        ))}
        {/* <div>
        <img src="https://ezo.io/wp-content/uploads/2023/09/Banner.jpg " alt="Image 1" width={1396} height={605} />

        </div> */}
      </div>
      {/* <Button style={{backgroundColor:"#33475b", color:"white",textDecoration:"none"}}>
       
       <a href={`/dashboard`} style={{textDecoration:"none",color:"white",backgroundColor:"#33475b"}}>Back</a>
        </Button> */}
    </>
  );
};

export default EmpProfiles;
