import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { HiNewspaper } from "react-icons/hi2";
import { GiPapers } from "react-icons/gi";
import { Link } from "react-router-dom";

const ITTeamNavbar = () => {
  // const [sessionId] = useState(sessionStorage.getItem("userId"));

  const sessionId = sessionStorage.getItem("userId");

  console.log(sessionId)

  const auth = window.sessionStorage.getItem("isLogged");

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
      <div>
          <img src="https://ezo.io/wp-content/uploads/2023/09/Banner.jpg " alt="Image 1" width={1396} height={605} />
 
        </div>
    </>
  );
};

export default ITTeamNavbar;
