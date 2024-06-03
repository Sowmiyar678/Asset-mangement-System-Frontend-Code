import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { HiNewspaper } from "react-icons/hi2";
import { GiPapers } from "react-icons/gi";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  // const [sessionId] = useState(sessionStorage.getItem("userId"));

  // const auth = window.sessionStorage.getItem("isLogged");

  const appBarStyle = {
    backgroundImage: 'url("https://media.istockphoto.com/id/1159030397/vector/vector-of-a-child-a-boy-looking-at-the-stairs-leading-to-the-door-of-modern-digital-world.jpg?s=612x612&w=0&k=20&c=cPMvHwuxLy3rWZaHzhiXY_TFZXkl0KGp-wHGFA8vak4=")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };


  return (
    <div   style={{backgroundColor:"black"}}> 
    <>
     
     
   


   
         <div className="container-fluid"
         style={{backgroundColor:"black"}}
         > <AppBar position="static" style={{ backgroundColor: "#33475b", marginLeft:"-10px"}}>
      
        <Toolbar style={{ backgroundColor: "#33475b" }}>
          <Button color="inherit" href="/admindetails" >
            <Button> <b style={{color:"white"}}> Profile </b></Button>
          </Button>
          <Typography variant="h6" style={{ flexGrow: 1, color: "white" }}>
            Welcome to Admin Panel!
          </Typography>
          <Button color="inherit" href="/empprofile">
          <b style={{color:"white"}}> Employee details </b>
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
      <div  style={{marginLeft:"-8px"}}>
        <img src="https://ezo.io/wp-content/uploads/2023/09/Banner.jpg " alt="Image 1" width={1380} height={605} />

        </div>
      </div>
     
    </>
    </div>
  );
};

export default AdminNavbar;
