import React, { useEffect, useState } from 'react'
import axios from "axios";
import {FaEdit, FaEye, FaTrashAlt} from "react-icons/fa";
import { Link, Navigate } from 'react-router-dom';
import Search from '../Search';
import { useNavigate } from "react-router-dom";
import { Grid } from '@mui/material';

const AllDetails = () => {
   const[itteam,setITTeam]=useState([]);
   const[search,setSearch]=useState("");

   const [idList, setIdList] = useState([]);

   const navigate = useNavigate();
 
   useEffect(() => {
     axios.get("http://localhost:8081/GetAllITeam").then((response) => {
       console.log(response.data);
       setITTeam(response.data);

       
     });
   }, []);

  

  const handleDelete =  (itteamid)=>{
     console.log(itteamid);
     axios.delete(`http://localhost:8081/DeleteITTeam/${itteamid}`).then((response)=>{
       console.log(response.data);
       let stu = itteam.filter((itteam)=> {
         return itteam.itteamid!== itteamid;
       });
       setITTeam(stu);
     }).catch((error)=>{
       console.log(error);
     });
  }


   


  return (
    <section>
      {/* <Search search={search}
      setSearch={setSearch} */}
      {/* /> */}
      <Grid container spacing={2}>
        {itteam.map((itteam) => (
          <Grid item xs={8} sm={3} md={4} key={itteam.itteamid}>
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">{itteam.itteamid}</h5>
                <p className="card-text">{itteam.name}</p>
                <p className="card-text">{itteam.email}</p>
                <p className="card-text">{itteam.password}</p>
                <p className="card-text">{itteam.location}</p>
                <p className="card-text">{itteam.phoneno}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <Link to={`/updateticket/${itteam.itteamid}`} className="btn btn-warning" ><FaEdit/>update </Link>
                  <button className="btn btn-danger" onClick={() => handleDelete(itteam.itteamid)}><FaTrashAlt/>delete</button>
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </section>
  )
}

export default AllDetails