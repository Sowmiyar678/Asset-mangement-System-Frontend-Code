import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { TextField } from "@mui/material";

function UpdateAdmin() {

  const { adminid } = useParams();
  console.log(adminid);
  const [admin, setAdmin] = useState({
    email: "",
    password:"",
    location:"",
    phoneno:""
   
  });
  const [idList, setIdList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8081/GetAdminIds').then((response) => {
      console.log(response.data);
      setIdList(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!admin.email ||
      !admin.password ||
      !admin.location ||
      !admin.phoneno) 

       {
      alert("Please fill in all fields");
      return;
    }

    const userData = {
     ...admin,
     
    };
    // const userId = sessionStorage.getItem('userId');
   
    axios
     .put(`http://localhost:8081/UpdateAdmin`, userData)
     .then((result) => {
        console.log(result);
        alert("success");
        navigate('/getallasset');
      })
     .catch((err) => console.log(err));
  };
  
  const handleChange = (e) => {
    if (e.target.name === "adminid") {
      setAdmin({...admin, admin: { adminid: e.target.value } });
    } else {
      setAdmin({...admin, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className="registration-container">
      <h1>update Admin Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="adminid">
            Admin ID:
          </label>
          <select
            className="form-control col-sm-6"
            name="adminid"
            adminid="adminid"
            value={admin.adminid}
            onChange={handleChange}
          >
            {idList.map((adminid) => (
              <option key={adminid}>{adminid}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="email">email</label>
          <TextField
            adminid="email"
            className="form-control"
            name="email"
            value={admin.email}
            onChange={handleChange}
          >
          </TextField>
        </div>
        <div className="form-group">
          <label htmlFor="password">password</label>
          <TextField
            adminid="password"
            className="form-control"
            name="password"
            value={admin.password}
            onChange={handleChange}
          >
          </TextField>
        </div>
        <div className="form-group">
          <label htmlFor="phoneno">phoneno</label>
          <TextField
            adminid="phoneno"
            className="form-control"
            name="phoneno"
            value={admin.phoneno}
            onChange={handleChange}
          >
          </TextField>
        </div>
        <div className="form-group">
          <label htmlFor="location">location</label>
          <TextField
            adminid="location"
            className="form-control"
            name="location"
            value={admin.location}
            onChange={handleChange}
          >
          </TextField>
        </div>

        <input type="submit" value="Send" className="btn btn-primary" />
      </form>
    </div>
  );
}

export default UpdateAdmin;