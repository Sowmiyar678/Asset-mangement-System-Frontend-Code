


import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

import { Link } from "react-router-dom";

function TicketStatusAssign() {


  const { id } = useParams();

  console.log(id);

  const [ticket, setTicket] = useState({
    status: "",
   itteam: {
      itteamid: ""
      
    }
  });
  const [idList, setIdList] = useState([]);
  const [idList1, setIdList1] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8081/GetITTeamIds").then((response) => {
      console.log(response.data);
      setIdList1(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ticket.status ||
      !ticket.itteam
      ) {
      alert("Please fill in all fields");
      return;
    }

    const userData = {
     ...ticket
    };
    const adminId = sessionStorage.getItem('adminId');
   
    axios
     .put(`http://localhost:8081/update/${id}`, userData)
     .then((result) => {
        console.log(result);
        alert("success");
        navigate("/raisedticket");
      })
     .catch((err) => console.log(err));
  };
  
  const handleChange = (e) => {
    if (e.target.name === "itteamid") {
      setTicket({...ticket, itteam: { itteamid: e.target.value } });
    } else {
      setTicket({...ticket, [e.target.name]: e.target.value });
    }
  };

  return (
<>
<AppBar position="static" style={{backgroundColor: "#33475b" }}>
      
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
    <div className="registration-container">
      <h1>Ticket Status</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="itteamid">
            IT Team ID:
          </label>
          <select
            className="form-control col-sm-6"
            name="itteamid"
            id="itteamid"
            value={ticket.itteam.itteamid}
            onChange={handleChange}
          >
            {idList1.map((itteamid) => (
              <option key={itteamid}>{itteamid}</option>
            ))}
          </select>
        </div>

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
            <option value="Open">Open</option>
            <option value="Assigned">Assigned</option>
          </select>
        </div>

        <input type="submit" value="Send" className="btn btn-primary"  onClick={() => {
                     
                    }}/>
      </form>
    </div>
    </>
  );
}

export default TicketStatusAssign;