import React, { useState, useEffect } from "react";
import axios from "axios";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import EmployeeNavbar from "./EmployeeNavbar";
import "../Admin/Register.css";
const sessionId = sessionStorage.getItem("userId");

console.log(sessionId)

const auth = window.sessionStorage.getItem("isLogged");

const userId = sessionStorage.getItem("userId");

function AddTicket() {
  const [ticket, setTicket] = useState({
    description: "",
    project: "",
    priority: "",
    status: "New",
    location: "",
    employee: {
      empid: "",
    },
    admin: {
      adminid: "1",
    },
  });

  const [idList, setIdList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8081/GetEmployeeIds").then((response) => {
      setIdList(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ticket.description ||!ticket.project ||!ticket.priority ||!ticket.location) {
      alert("Please fill in all fields");
      return;
    }

    const userData = {
     ...ticket,
      employee: {
        empid: userId,
      },
    };

    axios
      .post("http://localhost:8081/CreateTicket", userData)
      .then((result) => {
        console.log(result);
        alert("Success");
        navigate(`/EmpTicket/${userId}`);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    if (e.target.name === "empid") {
      setTicket({ ...ticket, employee: { empid: e.target.value } });
    } else {
      setTicket({ ...ticket, [e.target.name]: e.target.value });
    }
  };

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
      <div className="registration-container">
        <Card>
          <CardContent>
            <h1>Raise Ticket</h1>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Select Request</InputLabel>
                    <Select
                      id="new"
                      name="incident"
                      value={ticket.incident}
                      onChange={handleChange}
                    >
                       <MenuItem value="General issue">General issue</MenuItem>
                      <MenuItem value="Hardware Requirement">
                        Hardware Requirement
                      </MenuItem>
                      <MenuItem value="Software Requirement">
                        Software Requirement
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
  <FormControl fullWidth>
    <InputLabel>Project</InputLabel>
    <Select
      id="project"
      name="project"
      value={ticket.project}
      onChange={handleChange}
    >
      <MenuItem value="">Select</MenuItem>
      <MenuItem value="FRESHERBATCH1">FRESHERBATCH1</MenuItem>
      <MenuItem value="FRESHERBATCH2">FRESHERBATCH2</MenuItem>
      <MenuItem value="FRESHERBATCH3">FRESHERBATCH3</MenuItem>
    </Select>
  </FormControl>
</Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Priority</InputLabel>
                    <Select
                      id="priority"
                      name="priority"
                      value={ticket.priority}
                      onChange={handleChange}
                    >
                      <MenuItem value="">Select</MenuItem>
                      <MenuItem value="Low">Low</MenuItem>
                      <MenuItem value="Medium">Medium</MenuItem>
                      <MenuItem value="High">High</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                  <TextField
                    label="Employee ID"
                    fullWidth
                    name="empid"
                    value={ticket.employee.empid}
                    onChange={handleChange}
                  />
                </Grid> */}
                 <Grid item xs={12} sm={6}>
  <FormControl fullWidth>
    <InputLabel>Description</InputLabel>
    <Select
      id="description"
      name="description"
      value={ticket.description}
      onChange={handleChange}
    >
      <MenuItem value="">Select</MenuItem>
      <MenuItem value="Exchange Asset">Exchange Asset</MenuItem>
<MenuItem value="Need to replace the battery">Need to replace the battery</MenuItem>
<MenuItem value="Need to repair the keyboard">Need to repair the keyboard</MenuItem>
<MenuItem value="Need to replace the screen">Need to replace the screen</MenuItem>
<MenuItem value="Need to install a new software">Need to install a new software</MenuItem>
<MenuItem value="Need to configure the network settings">Need to configure the network settings</MenuItem>
<MenuItem value="Need to replace the hard drive">Need to replace the hard drive</MenuItem>
<MenuItem value="Need to repair the motherboard">Need to repair the motherboard</MenuItem>
    </Select>
  </FormControl>
</Grid>
<Grid item xs={12} sm={6}>
  <FormControl fullWidth>
    <InputLabel>Location</InputLabel>
    <Select
      id="location"
      name="location"
      value={ticket.location}
      onChange={handleChange}
    >
      <MenuItem value="">Select</MenuItem>
      <MenuItem value="Chennai">chennai</MenuItem>
      <MenuItem value="Virudhunagar">Virudhunagar</MenuItem>
    </Select>
  </FormControl>
</Grid>
              </Grid>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
} 

export default AddTicket;
