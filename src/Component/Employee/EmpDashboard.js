import { AppBar, Toolbar }  from '@mui/material';
import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
// import "./Homecss"
import { Link } from 'react-router-dom'


function EmpDashboard() {

    const sessionId = sessionStorage.getItem("userId");

    console.log(sessionId)

    const auth = window.sessionStorage.getItem("isLogged");

    return (
<>
      <AppBar position='static'>
      <div id="sidebar" style={{marginRight:"1px",color:"blue"}}>
         <Toolbar>
           {/* <Typography variant="h6"></Typography> */}
         </Toolbar></div>
       </AppBar>

        <div className="h" style={{ backgroundColor: 'grey', color: 'white', backgroundImage: 'url("https://ezo.io/wp-content/uploads/2023/09/Banner.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <div className="grid-container">
            <header className="header">
              <div className="menu-icon">
                <BsJustify />
              </div>
              <div className="header-left">{/* Add any other header content */}</div>
              <div className="header-right" style={{ color: 'black' }}>
                <b>Welcome to Employee Panel!</b>
                <br/>
                <Link className='btn btn-outline-info border-0 text-dark rounded-pill' onClick={()=>{window.sessionStorage.removeItem("isLogged");window.location.href='/';}}><b style={{color:"white"}}>Logout</b></Link>
              </div>
            </header>
    
            <aside id="sidebar">
              <div className="sidebar-title">
                <div className="sidebar-brand">
                  <BsGrid1X2Fill className="icon" />
                  Dashboard
                </div>
                <span className="icon close_icon">X</span>
              </div>
    
              <ul className="sidebar-list">
                <li className="sidebar-list-item">
                  <a href={`/employeedetails/${sessionId}`}>Profile</a>
                </li>
                <li className="sidebar-list-item">
                  <a href={`/addticket/${sessionId}`}>Raise Ticket</a>
                </li>
                <li className="sidebar-list-item">
                  <a href={`/EmpTicket/${sessionId}`}>Ticket Status</a>
                </li>
                <li className="sidebar-list-item">
                  <a href={`/empviewasset/${sessionId}`}>Asset Details</a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        </>
      );
    }
    
    export default EmpDashboard;
    
    