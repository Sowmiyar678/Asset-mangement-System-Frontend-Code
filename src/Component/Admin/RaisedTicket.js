import React, { useEffect, useState } from 'react'
import axios from "axios";
import {FaEdit, FaEye, FaTrashAlt} from "react-icons/fa";
import { Link, Navigate } from 'react-router-dom';
import Search from '../Search';
import { useNavigate } from "react-router-dom";
import AdminNavbar from './AdminNavbar';
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";


const RaisedTicket = () => {
   const[ticket,setticket]=useState([]);
   const[search,setSearch]=useState("");

   const [idList, setIdList] = useState([]);
  //  const sessionId = sessionStorage.getItem("adminId");

  //  console.log(sessionId)

   const navigate = useNavigate();
 
   useEffect(() => {
     axios.get("http://localhost:8081/GetAllTicket").then((response) => {
       console.log(response.data);
       setticket(response.data);

       
     });
   }, []);

  

  const handleDelete =  (id)=>{
     console.log(id);
     axios.delete(`http://localhost:8081/Deleteticket/${id}`).then((response)=>{
       console.log(response.data);
       let stu = ticket.filter((ticket)=> {
         return ticket.id!== id;
       });
       setticket(stu);
     }).catch((error)=>{
       console.log(error);
     });
  }


   


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
    <section>
      {/* <Search search={search}
      setSearch={setSearch}
      /> */}
      <table className="table table-striped  table-hover shadow" >
        <thead>        
		
        
            <tr className="text-center" style={{paddingBottom:"40px"}}>

             <th>ticket Id</th>
             <th>description </th>
             <th>project</th>
             <th>status</th>
             <th>priority</th>
             <th>Employee Id</th>
             
             {/* <th>itteam Id</th> */}
             <th colSpan="3">Action</th>

            </tr>
        </thead>
        <tbody className="text-center">
           
            {ticket
           .map((ticket)=>(
            <tr key={ticket.id}>
                
                   <td>{ticket.id}</td>
                
             
              <td>{ticket.description}</td>
              <td>{ticket.project}</td>
              <td>{ticket.status}</td>
              <td>{ticket.priority}</td>
              <td >{ticket.employee.empid}</td>
              
              <td className="mx-2">
              {/* <Link  to={`/viewticket/${ticket.id}`} className="btn btn-info" ><FaEye/> View</Link>  </td>
                <td className="mx-2"> */}
                 <Link  to={`/assignTicket/${ticket.id}`} className="btn btn-info" ><FaEdit/>Assign </Link>  </td>
                <td className="mx-2"> 

               
              
                
                 </td>
                
           </tr> 
            ))}
           


        </tbody>
        
        </table> 
    </section>
    </>
  )
}

export default RaisedTicket