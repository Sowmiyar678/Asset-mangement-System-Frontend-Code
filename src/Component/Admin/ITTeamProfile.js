import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';
import AdminNavbar from './AdminNavbar';
import {Button } from "@material-ui/core";
import { AppBar, Toolbar } from "@material-ui/core";
import { HiNewspaper } from "react-icons/hi2";
import { GiPapers } from "react-icons/gi";
import { Link } from "react-router-dom";


const ITTeamProfile = () => {
  const [itteam, setITTeam] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/GetAllITeam').then((response) => {
      setITTeam(response.data);
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
        <Button color="inherit" href="/empprofile">
          Employee details
        </Button>
        <Button color="inherit" href="/itteamprofile">
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
       
        <a href=  {`/registeritteam`} style={{textDecoration:"none",color:"white",backgroundColor:"#33475b",px:"9"}}>
          Add ITTeam</a>
        </Button>
      <div className="d-flex flex-wrap">
        {itteam.map((itteam) => (
          <Card key={itteam.itteamid} variant="outlined" style={{ width: '350px', marginBottom: '20px', marginRight: '30px' }}>
            <div className="row g-0">
              <div>
                <img src={itteam.image} />
              </div>
              <div >
                <CardContent>
                  <Typography variant="h5">IT Team ID: {itteam.itteamid}</Typography>
                  <Typography>Name: {itteam.name}</Typography>
                  <Typography>Email: {itteam.email}</Typography>
                  <Typography>Location: {itteam.location}</Typography>
                  <Typography>Phone No: {itteam.phoneno}</Typography>
                  {/* Add your update button or other actions here */}
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
      {/* <Button style={{backgroundColor:"#33475b", color:"white",textDecoration:"none"}}>
       
       <a href={`/dashboard`} style={{textDecoration:"none",color:"white",backgroundColor:"#33475b"}}>Back</a>
        </Button> */}
    </>
  );
};

export default ITTeamProfile;
