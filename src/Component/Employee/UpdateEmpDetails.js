import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { TextField } from "@mui/material";

function UpdateEmpDetails() {

  const { empid } = useParams();
  console.log(empid);
  const [employee, setEmployee] = useState({
    email: "",
    password:"",
    location:"",
    phoneno:""
   
  });
  const [idList, setIdList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8081/GetEmployeeIds').then((response) => {
      console.log(response.data);
      setIdList(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!employee.email ||
      !employee.password ||
      !employee.location ||
      !employee.phoneno) 

       {
      alert("Please fill in all fields");
      return;
    }

    const userData = {
     ...employee,
     
    };
    const userId = sessionStorage.getItem('userId');
   
    axios
     .put(`http://localhost:8081/UpdateEmployee/${userId}`, userData)
     .then((result) => {
        console.log(result);
        alert("success");
        navigate('/getallasset');
      })
     .catch((err) => console.log(err));
  };
  
  const handleChange = (e) => {
    if (e.target.name === "empid") {
      setEmployee({...employee, employee: { empid: e.target.value } });
    } else {
      setEmployee({...employee, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className="registration-container">
      <h1>update Employee Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="empid">
            Employee ID:
          </label>
          <select
            className="form-control col-sm-6"
            name="empid"
            empid="empid"
            value={employee.empid}
            onChange={handleChange}
          >
            {idList.map((empid) => (
              <option key={empid}>{empid}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="email">email</label>
          <TextField
            empid="email"
            className="form-control"
            name="email"
            value={employee.email}
            onChange={handleChange}
          >
          </TextField>
        </div>
        <div className="form-group">
          <label htmlFor="password">password</label>
          <TextField
            empid="password"
            className="form-control"
            name="password"
            value={employee.password}
            onChange={handleChange}
          >
          </TextField>
        </div>
        <div className="form-group">
          <label htmlFor="phoneno">phoneno</label>
          <TextField
            empid="phoneno"
            className="form-control"
            name="phoneno"
            value={employee.phoneno}
            onChange={handleChange}
          >
          </TextField>
        </div>
        <div className="form-group">
          <label htmlFor="location">location</label>
          <TextField
            empid="location"
            className="form-control"
            name="location"
            value={employee.location}
            onChange={handleChange}
          >
          </TextField>
        </div>

        <input type="submit" value="Send" className="btn btn-primary" />
      </form>
    </div>
  );
}

export default UpdateEmpDetails;