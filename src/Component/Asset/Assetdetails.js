import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Paper, Typography, Card, CardContent, Button, IconButton, Link } from '@mui/material';
import { FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa';
import Search from '../Search';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../Admin/AdminNavbar';
import AddAsset from './Addasset';
import { AppBar, Toolbar} from "@material-ui/core";

const Assetdetails = () => {
  const [asset, setAsset] = useState([]);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8081/GetAllAsset').then((response) => {
      setAsset(response.data);
    });
  }, []);
 
  // const handleUpdate=(assetid)=>{

  // axios
  //   .put('http://localhost:8081/UpdateAsset', userData)
  //   .then((result) => {
  //     console.log(result);
  //     alert('Success');
  //     navigate('/getallasset');
  //   })
  //   .catch((err) => console.log(err));



  const handleDelete = (assetid) => {
    console.log(assetid);
    axios
      .delete(`http://localhost:8081/DeleteAsset/${assetid}`)
      .then((response) => {
        console.log(response.data);
        const updatedAssets = asset.filter((assetItem) => assetItem.assetid !== assetid);
        setAsset(updatedAssets);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <>  <AppBar position="static" style={{ backgroundColor: "#33475b" }}>
      
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
      <Button style={{backgroundColor:"#33475b", color:"white",textDecoration:"none"}}>
       
       {/* <Link  to={`/itteamdetails/:itteam`} className="btn btn-info" >Back </Link>  */}
        <a href={`/addasset`} style={{textDecoration:"none",color:"white",backgroundColor:"#33475b",px:"9"}}>Add</a>
        </Button>
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
                <Typography>Status: {assetItem.status}</Typography>
                <Typography>Employee ID: {assetItem.employee.empid}</Typography>
          
                <td className="mx-2"> 
                 {/* <Link  to={`/itteamdetails/:itteam`} className="btn btn-info" >Back </Link>  */}
                  <a href={`/updateasset/${assetItem.assetid}`}><Button style={{color:"white", backgroundColor:"#33475b"}}> Edit </Button></a>
                  </td>
              
                {/* <IconButton component={Link} to={`/updateasset/${assetItem.assetid}`} color="warning">
                  <FaEdit /><button>Edit</button> */}
                 {/* </IconButton>  */}
                
                {/* <FaEdit/> */}
              </CardContent>
              
            </Card>
            
          </Grid>
          
        ))}
      </Grid>
      {/* <Button style={{backgroundColor:"#33475b", color:"white",textDecoration:"none"}}>
       
       <a href={`/dashboard`} style={{textDecoration:"none",color:"white",backgroundColor:"#33475b"}}>Back</a>
        </Button> */}
          
      
    </section>
    </>
  );
};

export default Assetdetails;
