import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit } from "react-icons/fa"; 
import { AppBar, Toolbar, Typography } from "@mui/material";
import {Button } from "@material-ui/core";
import Search from "../Search";
import ITTeamNavbar from "./ITTeamNavbar";
import { Link } from 'react-router-dom';

const TicketDetails = () => {
  const [ticket, setTicket] = useState([]);
  const [search, setSearch] = useState("");
  const userId = sessionStorage.getItem("userId");

  const sessionId = sessionStorage.getItem("userId");

  console.log(sessionId)

  const auth = window.sessionStorage.getItem("isLogged");

  // const [currentPage, setCurrentPage] = useState("itteamdetails");



  
  useEffect(() => {
    axios.get(`http://localhost:8081/getITTeamByid/${userId}`).then((response) => {
      setTicket(response.data);
    });
  }, [userId]);

  const handleUpdate = (id) => {
    axios
      .put(`http://localhost:8081/updatestatus/${id}`, { status: "Resolved" })
      .then((result) => {
        console.log(result);
        alert("Ticket resolved successfully");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateReject = (id) => {
    axios
      .put(`http://localhost:8081/updatestatus/${id}`, { status: "Rejected" })
      .then((result) => {
        console.log(result);
        alert("Ticket rejected successfully");
        const updatedTickets = ticket.map((t) =>
          t.id === id ? { ...t, status: "Rejected" } : t
        );
        setTicket(updatedTickets);
      })
      .catch((err) => console.log(err));
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
      
      <section>
        {/* <Search search={search} setSearch={setSearch} /> */}
        <table className="table table-striped table-hover shadow">
          <thead>
            <tr className="text-center">
              <th>ticket Id</th>
              <th>description</th>
              <th>project</th>
              <th>status</th>
              <th>priority</th>
              <th>Employee Id</th>
              <th>ITTeam Id</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {ticket.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.description}</td>
                <td>{ticket.project}</td>
                <td>{ticket.status}</td>
                <td>{ticket.priority}</td>
                <td>{ticket.employee.empid}</td>
                <td>{ticket.itteam.itteamid}</td>
                <td className="mx-2">
                  {/* <Button
                    className="btn btn-success"
                    onClick={() => handleUpdate(ticket.id)}
                  >
                    <FaEdit/> Resolve
                  </Button> */}
                  {ticket.status!== "Resolved" && (
                          <Button
                            color="default"
                            onClick={() => handleUpdate(ticket.id)}
                          >
                             Resolved
                          </Button>
                        )}

                         
                  {/* <Button
                    className="btn btn-info"
                    onClick={() => handleUpdateReject(ticket.id)}
                  >
                    <FaEdit /> Reject
                  </Button> */}
                  {/* <td className="mx-2"> */}
              
                 <Link  to={`/ticketstatus/${ticket.id}`}
                  className="btn btn-info" ><FaEdit/>
                  Reject</Link> 
                   {/* </td> */}
               
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </section>

      <div>
      {/* {currentPage === "itteamdetails" && <TicketDetails />}  */}
      </div>
    </>
  );
};

export default TicketDetails;
