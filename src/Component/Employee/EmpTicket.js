import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid, Paper } from '@mui/material';
import { FaEdit, FaEye } from 'react-icons/fa';
import Search from '../Search';
import { Link } from 'react-router-dom';
import { Button } from "@material-ui/core";
import EmployeeNavbar from './EmployeeNavbar';
import { AppBar, Toolbar} from "@material-ui/core";

const EmpTicket = () => {
  const [ticket, setTicket] = useState([]);
  const [search, setSearch] = useState('');


  const sessionId = sessionStorage.getItem("userId");

  console.log(sessionId)

  const auth = window.sessionStorage.getItem("isLogged");

  const userId = sessionStorage.getItem('userId');

  useEffect(() => {
    axios.get(`http://localhost:8081/getEmployeeByid/${userId}`).then((response) => {
      setTicket(response.data);
    });
  }, [userId]);


  return (
    <>
     <AppBar position="static" style={{ backgroundColor: "#33475b" }}>
       
        <Toolbar>
          <Button color="inherit" href={`/employeedetails/${sessionId}`}>
            Profile
          </Button>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Welcome to Employee Panel!
          </Typography>
          <Button color="inherit" href={`/addticket/${sessionId}`}>
            Raise Ticket
          </Button>
          <Button color="inherit" href={`/EmpTicket/${sessionId}`}>
          Ticket Status
          </Button>
          <Button color="inherit" href={`/empviewasset/${sessionId}`}>
          Asset Details
          </Button>
          

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
   
    <section>
      {/* <Search search={search} setSearch={setSearch} /> */}
      <Grid container spacing={2}>
        {ticket.map((ticketItem) => (
          <Grid item xs={12} sm={9} md={4} key={ticketItem.id}>
            <Card style={{ width: '350px', marginBottom: '40px' ,marginLeft:"50px",marginTop:"40px"}}>
              <CardContent>
                <Typography variant="h6">Ticket ID: {ticketItem.id}</Typography>
                <Typography>Description: {ticketItem.description}</Typography>
                <Typography>Project: {ticketItem.project}</Typography>
                <Typography>Status: {ticketItem.status}</Typography>
                <Typography>Priority: {ticketItem.priority}</Typography>
                <Typography>Employee ID: {ticketItem.employee.empid}</Typography>
                <FaEye /> 
              </CardContent>
            </Card>

            {/* <td className="mx-2">
                  <Button
                    className="btn btn-success">
                    
                  
                    <FaEdit /> SendMail
                  </Button>
                </td> */}
          </Grid>
        ))}
      </Grid>
     
    </section>
    </>
  );
};

export default EmpTicket;
