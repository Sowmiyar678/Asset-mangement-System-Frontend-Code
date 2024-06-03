import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AdminNavbar from "../Admin/AdminNavbar";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

import { Link } from "react-router-dom";

function UpdateAsset() {


  const { assetid } = useParams();

  console.log(assetid);
  const { empid } = useParams();
  console.log(empid);
  const [asset, setAsset] = useState({
    status: "",
   employee: {
      empid: ""
    }
  });
  const [idList, setIdList] = useState([]);
  const [idList1, setIdList1] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8081/GetEmployeeIds').then((response) => {
      console.log(response.data);
      setIdList1(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!asset.status ||
      !asset.employee.empid
      ) {
      alert("Please fill in all fields");
      return;
    }

    const userData = {
     ...asset,
     
    };
    const adminId = sessionStorage.getItem('adminId');
   
    axios
     .put(`http://localhost:8081/updateAsset/${assetid}`, userData)
     .then((result) => {
        console.log(result);
        alert("success");
        navigate('/getallasset');
      })
     .catch((err) => console.log(err));
  };
  
  const handleChange = (e) => {
    if (e.target.name === "empid") {
      setAsset({...asset, employee: { empid: e.target.value } });
    } else {
      setAsset({...asset, [e.target.name]: e.target.value });
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
    <div className="registration-container">
      <h1>Asset Status</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="empid">
            Employee ID:
          </label>
          <select
            className="form-control col-sm-6"
            name="empid"
            assetid="empid"
            value={asset.employee.empid}
            onChange={handleChange}
          >
            {idList1.map((empid) => (
              <option key={empid}>{empid}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            assetid="status"
            className="form-control"
            name="status"
            value={asset.status}
            onChange={handleChange}
          >
            <option value="">Select status</option>
            <option value="Active">Active</option>
            <option value="InActive">InActive</option>
          </select>
        </div>

        <input type="submit" value="Send" className="btn btn-primary" />
        
     
      </form>
      <Button
              href="/getallasset"
                        type="submit"
                        className="btn btn-success btn-md"
                       style={{backgroundColor:"black",color:"white"}}                      >
                        Back
                      </Button>
    </div>

    </>
  );
}

export default UpdateAsset;