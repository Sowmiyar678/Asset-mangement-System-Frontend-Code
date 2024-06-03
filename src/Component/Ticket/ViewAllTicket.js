import React, { useEffect, useState } from 'react'
import axios from "axios";
import {FaEdit, FaEye, FaTrashAlt} from "react-icons/fa";
import { Link, Navigate } from 'react-router-dom';
import Search from '../Search';
import { useNavigate } from "react-router-dom";

const ViewAllTicket = () => {
   const[ticket,setticket]=useState([]);
   const[search,setSearch]=useState("");

   const [idList, setIdList] = useState([]);

const userId = sessionStorage.getItem("userId")

   const navigate = useNavigate();
 
   useEffect(() => {
    const getticket=async()=>{
      try{
        const response=
     axios.get(`http://localhost:8081/getEmployeeByid/${userId}`
   );
       console.log(response.data);
       setticket(response.data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
       
     } ; getticket();
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
    <section>
      <Search search={search}
      setSearch={setSearch}
      />
      <table className="table table-striped  table-hover shadow">
        <thead>        
		
        <Link
								className="btn btn-primary mx-2"
								to={"/addticket"}>
								Add ticket Details
							</Link>
            <tr className="text-center">

             <th>ticket Id</th>
             <th>description </th>
             <th>project</th>
             <th>status</th>
             <th>priority</th>
             <th>Employee Id</th>
             {/* <th>ITTeam Id</th>
             <th>Admin Id</th> */}
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
              {/* <td >{ticket.itteam.itteamid}</td>
              <td >{ticket.admin.adminid}</td> */}
              
              <td className="mx-2">
              <Link  to={`/viewticket/${ticket.id}`} className="btn btn-info" ><FaEye/> View</Link>  </td>
                <td className="mx-2">
                <Link  to={`/updateticket/${ticket.id}`} className="btn btn-warning" ><FaEdit/>Edit </Link>  </td>
                <td className="mx-2">


                <button className="btn btn-danger" 
                onClick={()=>{
                  console.log(ticket.id)

                  handleDelete(ticket.id)}}> <FaTrashAlt/> close </button> 
                
                 </td>
                
           </tr> 
            ))}
           


        </tbody>
        
        </table> 
    </section>
  )
}

export default ViewAllTicket