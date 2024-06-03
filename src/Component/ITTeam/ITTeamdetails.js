import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Avatar,
} from '@mui/material';
import Search from '../Search'; // Make sure to import your Search component
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import ITTeamNavbar from './ITTeamNavbar';
import { AppBar, Toolbar} from "@material-ui/core";

const ITTeamdetails = () => {
  const [itteam, setItteam] = useState([]);
  const [search, setSearch] = useState('');
  const userId = sessionStorage.getItem('userId');

  const sessionId = sessionStorage.getItem("userId");

  console.log(sessionId)

  const auth = window.sessionStorage.getItem("isLogged");

  useEffect(() => {
    axios.get(`http://localhost:8081/GetITTeamById/${userId}`).then((response) => {
      setItteam(response.data);
    });
  }, [userId]);

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "#33475b" }}>
      
        <Toolbar>
          <Button color="inherit" href={`/itteamdetails/${sessionId}`}>
            Profile
          </Button>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Welcome to ITTeam Panel!
          </Typography>
          <Button color="inherit" href={`/ticketdetails/${sessionId}`}>
            Ticket details
          </Button>
          {/* <Button color="inherit" href={`/itteamprofile`}>
            ITTeam details
          </Button>
          <Button color="inherit" href="/raisedticket">
            Raised Ticket
          </Button>
          <Button color="inherit" href="/getallasset">
            Asset details
          </Button> */}

          <Link
            className="btn btn-outline-info border-0 text-dark rounded-pill"
            onClick={() => {
              window.sessionStorage.removeItem("isLogged");
              window.location.href = "/";
            }}
          >
            <b style={{ color: "white" }}>Logout</b>
          </Link>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {/* <Search search={search} setSearch={setSearch} /> */}
        </Grid>
        {itteam.map((itteam) => (
          <Grid item xs={12} sm={6} md={4} key={itteam.itteamid}>
            <Card variant="outlined">
              <CardContent>
                <Avatar alt={itteam.name} src="/path/to/avatar-image.jpg" />
                <Typography variant="h6">ITTeam ID: {itteam.itteamid}</Typography>
                <Typography variant="h6">Name: {itteam.name}</Typography>
                <Typography variant="h6">Email: {itteam.email}</Typography>
                <Typography variant="h6">Location: {itteam.location}</Typography>
                <Typography variant="h6">Phone No: {itteam.phoneno}</Typography>
                {/* <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<FaEdit />}
                  component={Link}
                  to={`/updateitteam/${itteam.itteamid}`}
                >
                  Update
                </Button> */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ITTeamdetails;
