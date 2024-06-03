import { AppBar, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Stack } from 'react-bootstrap';
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
// import "./Homecss"
import { Link } from 'react-router-dom'
import TicketDetails from './TicketDetails';
import ITTeamdetails from './ITTeamdetails';

function Dashboarditteam() {
    

    const sessionId = sessionStorage.getItem("userId");

    console.log(sessionId)

    const auth = window.sessionStorage.getItem("isLogged");

  

  return (
    <>
     <AppBar position='static'>
     <div id="sidebar" style={{marginRight:"1px",color:"blue"}}>
        <Toolbar>
          {/* <Typography variant="h6"></Typography> */}<b>Welcome to ITTeam Panel !</b> <br/>
          <Link className='btn btn-outline-info border-0 text-dark rounded-pill' onClick={()=>{window.sessionStorage.removeItem("isLogged");window.location.href='/';}}><b style={{color:"white"}}>Logout</b></Link>
       
        <li className='sidebar-list-item'>
                <a href={`/itteamdetails/${sessionId}`}>
                   Profile
                </a>
            </li>
            <li  className='sidebar-list-item'>
          
                <a href={`/ticketdetails/${sessionId}`}>
               Tickets
                </a>
            </li>
           
       

        </Toolbar>
        </div>
      </AppBar>

    <div className="h" style={{ backgroundColor: 'white', color: 'white', backgroundImage: 'url("https://ezo.io/wp-content/uploads/2023/09/Banner.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      
</div>

</>
    
  )
}

export default Dashboarditteam