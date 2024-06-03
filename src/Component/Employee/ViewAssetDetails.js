import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid, Paper } from '@mui/material';
import { FaEye } from 'react-icons/fa';
import Search from '../Search';
import EmployeeNavbar from './EmployeeNavbar';
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { HiNewspaper } from "react-icons/hi2";
import { GiPapers } from "react-icons/gi";
import { Link } from "react-router-dom";



const ViewAssetDetails = () => {
  const [asset, setAsset] = useState([]);
  const [search, setSearch] = useState('');

  const sessionId = sessionStorage.getItem("userId");

  console.log(sessionId)

  const auth = window.sessionStorage.getItem("isLogged");

  const userId = sessionStorage.getItem('userId');

  useEffect(() => {
    axios.get(`http://localhost:8081/GetAssetById/${userId}`).then((response) => {
      setAsset(response.data);
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
        {asset.map((assetItem) => (
          <Grid item xs={12} sm={6} md={4} key={assetItem.assetid}>
            <Card>
              <CardContent>
                <Typography variant="h6">Asset ID: {assetItem.assetid}</Typography>
                <Typography>Asset Name: {assetItem.assetname}</Typography>
                <Typography>Product Type: {assetItem.producttype}</Typography>
                <Typography>Manufacturer Name: {assetItem.manufacturename}</Typography>
                <Typography>Expiry Date: {assetItem.expirydate}</Typography>
                <Typography style={{ color: 'green' }}><b>Status: {assetItem.status}</b></Typography>
                <Typography>Employee ID: {assetItem.employee.empid}</Typography>
                <FaEye /> {/* Add your view icon functionality here */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
    </>
  );
};

export default ViewAssetDetails;
