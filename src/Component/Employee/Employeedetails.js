import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button, Grid, Avatar } from '@mui/material';
import Search from '../Search'; // Make sure to import your Search component
import EmployeeNavbar from './EmployeeNavbar';
import { AppBar, Toolbar} from "@material-ui/core";


const Employeedetails = () => {
  const [employee, setEmployee] = useState([]);
  const [search, setSearch] = useState('');
  const sessionId = sessionStorage.getItem("userId");

  console.log(sessionId)

  const auth = window.sessionStorage.getItem("isLogged");
  const userId = sessionStorage.getItem('userId');

  useEffect(() => {
    axios.get(`http://localhost:8081/GetEmployeeById/${userId}`).then((response) => {
      setEmployee(response.data);
    });
  }, [userId]);

  return (

    <> 
   <AppBar position="static" style={{ backgroundColor: "#33475b" }}>
        {/* Set your desired background color above */}
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
        {employee.map((employee) => (
          <Grid item xs={4} sm={2} md={4} key={employee.empid}>
            <Card style={{ width: '350px', marginBottom: '40px', marginRight: '60px' ,marginLeft:"430px",marginTop:"40px"}}>
              <CardContent>
                <Avatar alt={employee.name} src="/path/to/avatar-image.jpg" /> {/* Add the avatar image */}
                <Typography variant="h6">Emp ID: {employee.empid}</Typography><hr/>
                <Typography variant="h6">Emp Name: {employee.name}</Typography><hr/>
                <Typography variant="h6">Email: {employee.email}</Typography><hr/>
                {/* <Typography variant="h6">Password: {employee.password}</Typography><hr/> */}
                <Typography variant="h6">Location: {employee.location}</Typography><hr/>
                <Typography variant="h6">Phone No: {employee.phoneno}</Typography><hr/>
                <div className="actions">
                  {/* <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<FaEdit />}
                    component={Link}
                    to={`/updateempdetails/${employee.empid}`}
                  >
                    Update
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
    </>
  );
};

export default Employeedetails;
