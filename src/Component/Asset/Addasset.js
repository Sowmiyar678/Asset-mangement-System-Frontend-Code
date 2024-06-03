import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, TextField, Button, Select, MenuItem, AppBar, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../Admin/AdminNavbar';
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
} from "@mui/material";
function AddAsset() {
  const [asset, setAsset] = useState({
    assetname: '',
    producttype: '',
    manufacturename: '',
    expirydate: '',
    status: '',
    employee: {
      empid: '', 
    },
  });
  const [idList, setIdList] = useState([]); 

  const navigate = useNavigate();

  useEffect(() => {
    
    axios.get('http://localhost:8081/GetEmployeeIds').then((response) => {
      setIdList(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!asset.assetname || !asset.producttype || !asset.manufacturename || !asset.expirydate || !asset.status) {
      alert('Please fill in all fields');
      return;
    }
    const userData = {
      ...asset,
      isAdmin: null,
    };
    axios
      .post('http://localhost:8081/CreateAsset', userData)
      .then((result) => {
        console.log(result);
        alert('Success');
        navigate('/getallasset');
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    if (e.target.name === 'empid') {
        setAsset({ ...asset, employee: { empid: e.target.value } });
    } else {
      setAsset({ ...asset, [e.target.name]: e.target.value });
    }
  };

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
           <Typography variant="h5"><b>ADD ASSET</b></Typography>
         </Toolbar></div>
       </AppBar> */}
      <div className="registration-container">
        <h1>Add Asset</h1>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={13} >
              
              <Select
                label="Employee ID"
                name="empid"
                value={asset.employee.empid}
                onChange={handleChange}
                style={{ width: '300px' }}
              > 
                <MenuItem value="">Select an employee ID</MenuItem>
                {idList.map((id) => (
                  <MenuItem key={id} value={id}>
                    {id}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
  <FormControl fullWidth>
    <InputLabel>Asset Name</InputLabel>
    <Select
      id="assetname"
      name="assetname"
      value={asset.assetname}
      onChange={handleChange}
    >
      <MenuItem value="">Select</MenuItem>
      <MenuItem value="LEN1209">LEN1209</MenuItem>
      <MenuItem value="HP4532">HP4532</MenuItem>
      <MenuItem value="DE7898">DE7898</MenuItem>
      <MenuItem value="ACR3132">ACR3132</MenuItem>
    </Select>
  </FormControl>
</Grid>
            <Grid item xs={12} sm={6}>
  <FormControl fullWidth>
    <InputLabel>producttype</InputLabel>
    <Select
      id="producttype"
      name="producttype"
      value={asset.producttype}
      onChange={handleChange}
    >
      <MenuItem value="">Select</MenuItem>
      <MenuItem value="Workstation">Workstation</MenuItem>
    </Select>
  </FormControl>
</Grid>
<Grid item xs={12} sm={6}>
  <FormControl fullWidth>
    <InputLabel>manufacturename</InputLabel>
    <Select
      id="manufacturename"
      name="manufacturename"
      value={asset.manufacturename}
      onChange={handleChange}
    >
      <MenuItem value="">Select</MenuItem>
      <MenuItem value="Dell">Dell</MenuItem>
      <MenuItem value="HP">HP</MenuItem>
      <MenuItem value="Acer">Acer</MenuItem>
      <MenuItem value="Lenovo">Lenovo</MenuItem>
    </Select>
  </FormControl>
</Grid>
            <Grid item xs={6}>
              <TextField
                label="Expiry Date"
                name="expirydate"
                value={asset.expirydate}
                onChange={handleChange}
                type="date" 
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
  <FormControl fullWidth>
    <InputLabel>status</InputLabel>
    <Select
      id="status"
      name="status"
      value={asset.status}
      onChange={handleChange}
    >
      <MenuItem value="">Select</MenuItem>
      <MenuItem value="Active">Active</MenuItem>
      <MenuItem value="InActive">InActive</MenuItem>
    </Select>
  </FormControl>
</Grid>
            <Grid item xs={12} sm={6}>
  <FormControl fullWidth>
    <InputLabel>Project</InputLabel>
    <Select
      id="project"
      name="project"
      value={asset.project}
      onChange={handleChange}
    >
      <MenuItem value="">Select</MenuItem>
      <MenuItem value="FRESHERBATCH1">FRESHERBATCH1</MenuItem>
      <MenuItem value="FRESHERBATCH2">FRESHERBATCH2</MenuItem>
      <MenuItem value="FRESHERBATCH3">FRESHERBATCH3</MenuItem>
    </Select>
  </FormControl>
</Grid>
            <Grid item xs={6}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Add Asset
              </Button>
              <Button
              href="/getallasset"
                        type="submit"
                        className="btn btn-success btn-md"
                       style={{backgroundColor:"black"}}                      >
                        Back
                      </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
}

export default AddAsset;
