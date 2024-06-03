import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { TextField } from "@mui/material";

function UpdateITTeamDetails() {

  const { itteamid } = useParams();
  console.log(itteamid);
  const [itteam, setITTeam] = useState({
    email: "",
    password:"",
    location:"",
    phoneno:""
   
  });
  const [idList, setIdList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8081/GetITTeamIds').then((response) => {
      console.log(response.data);
      setIdList(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itteam.email ||
      !itteam.password ||
      !itteam.location ||
      !itteam.phoneno) 

       {
      alert("Please fill in all fields");
      return;
    }

    const userData = {
     ...itteam,
     
    };
    const userId = sessionStorage.getItem('userId');
   
    axios
     .put(`http://localhost:8081/UpdateITTeam/${userId}`, userData)
     .then((result) => {
        console.log(result);
        alert("success");
        navigate('/getallasset');
      })
     .catch((err) => console.log(err));
  };
  
  const handleChange = (e) => {
    if (e.target.name === "itteamid") {
      setITTeam({...itteam, itteam: { itteamid: e.target.value } });
    } else {
      setITTeam({...itteam, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className="registration-container">
      <h1>update ITTeam Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="itteamid">
            ITTeam ID:
          </label>
          <select
            className="form-control col-sm-6"
            name="itteamid"
            itteamid="itteamid"
            value={itteam.itteamid}
            onChange={handleChange}
          >
            {idList.map((itteamid) => (
              <option key={itteamid}>{itteamid}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="email">email</label>
          <TextField
            itteamid="email"
            className="form-control"
            name="email"
            value={itteam.email}
            onChange={handleChange}
          >
          </TextField>
        </div>
        <div className="form-group">
          <label htmlFor="password">password</label>
          <TextField
            itteamid="password"
            className="form-control"
            name="password"
            value={itteam.password}
            onChange={handleChange}
          >
          </TextField>
        </div>
        <div className="form-group">
          <label htmlFor="phoneno">phoneno</label>
          <TextField
            itteamid="phoneno"
            className="form-control"
            name="phoneno"
            value={itteam.phoneno}
            onChange={handleChange}
          >
          </TextField>
        </div>
        <div className="form-group">
          <label htmlFor="location">location</label>
          <TextField
            itteamid="location"
            className="form-control"
            name="location"
            value={itteam.location}
            onChange={handleChange}
          >
          </TextField>
        </div>

        <input type="submit" value="Send" className="btn btn-primary" />
      </form>
    </div>
  );
}

export default UpdateITTeamDetails;