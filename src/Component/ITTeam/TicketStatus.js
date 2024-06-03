import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import ITTeamNavbar from "./ITTeamNavbar";
import { AppBar, Toolbar, Typography, } from "@material-ui/core";
import { FaEdit } from "react-icons/fa"; 
import { Link } from "react-router-dom";

function TicketStatus() {
  const userId = sessionStorage.getItem("userId");
  const { id } = useParams();

  const sessionId = sessionStorage.getItem("userId");

  console.log(sessionId)

  const auth = window.sessionStorage.getItem("isLogged");

  const [ticket, setTicket] = useState({
    status: "",
    
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ticket.status || !ticket.itteam) {
      alert("Please fill in all fields");
      return;
    }
    
  };

  const handleUpdateReject = (id) => {
    axios
      .put(`http://localhost:8081/updatestatus/${id}`, {
        status: ticket.status,
        rejectionReason: ticket.rejectionReason, // Pass rejection reason
      })
      .then((result) => {
        console.log(result);
        alert("Ticket rejected successfully");
        navigate(`/ticketdetails/${userId}`);
        
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    if (e.target.name === "itteamid") {
      setTicket({ ...ticket, itteam: { itteamid: e.target.value } });
    } else {
      setTicket({ ...ticket, [e.target.name]: e.target.value });
    }
  };

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
      <div className="registration-container">
        <h1>Ticket Status</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              className="form-control"
              name="status"
              value={ticket.status}
              onChange={handleChange}
            >
              <option value="">Select status</option>
              <option value="Rejected-ILack of response:user does 
              not respond to requests for additional information">Rejected-ILack of response:user does 
              not respond to requests for additional information</option>
              
              <option value="Rejected-
              Irrelevant tickets:The ticket is not 
              related to the asset management system">Rejected-
              Irrelevant tickets:The ticket is not 
              related to the asset management system
              
              </option>
              <option value="Rejected-
              Duplicate tickets:The user submits multiple tickets for the same issue.
">
                
                
                Rejected-
              Duplicate tickets:The user submits multiple tickets for the same issue.

              </option>
              
             
            </select>
          </div>

          {/* Rejection Reason */}
          {/* <div className="form-group">
            <label htmlFor="rejectionReason">Rejection Reason</label>
            <textarea
              id="rejectionReason"
              className="form-control"
              name="rejectionReason"
              value={ticket.rejectionReason}
              onChange={handleChange}
              rows={3}
            />
          </div> */}

          <Button
            className="btn btn-info"
            onClick={() => handleUpdateReject(id)} 
          >
            Reject
          </Button>
          {/* {ticket.status!== "Rejected" && (
                          <Button
                            color="default"
                            onClick={() =>handleUpdateReject(id)}
                          > Reject
                            <FaEdit />
                          </Button>
                        )} */}
        </form>
      </div>
    </>
  );
}

export default TicketStatus;
