import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import './App.css';

import Register from "./Component/Admin/Register";
import Login from "./Component/Admin/Login";
import Home from "./Component/Home";
import Loginitteam from "./Component/ITTeam/Loginitteam";
import Registeremployee from "./Component/Employee/Registeremployee";
import Loginemployee from "./Component/Employee/Loginemployee";
import Registeritteam from "./Component/ITTeam/Registereitteam";
import { useState } from 'react'
import './App.css'
import Addasset from "./Component/Asset/Addasset";
import Assetdetails from "./Component/Asset/Assetdetails";
import EmpHeader from "./Component/Employee/EmpHeader";
import Addticket from "./Component/Employee/Addticket";
import ViewAllTicket from "./Component/Ticket/ViewAllTicket";
import ViewTicket from "./Component/Ticket/ViewTicket";
import RaisedTicket from "./Component/Admin/RaisedTicket";
import Employeedetails from "./Component/Employee/Employeedetails";
import EmpProfiles from "./Component/Admin/EmpProfiles";
import ITTeamProfile from "./Component/Admin/ITTeamProfile";
import AllDetails from "./Component/ITTeam/AllDetails";
import TicketDetails from "./Component/ITTeam/TicketDetails";
import TicketStatus from "./Component/ITTeam/TicketStatus";
import TicketStatusAssign from "./Component/Admin/TicketStatusAssign";
import EmpTicket from "./Component/Employee/EmpTicket";
import ViewAssetDetails from "./Component/Employee/ViewAssetDetails";
import EmpDashboard from "./Component/Employee/EmpDashboard";
import ITTeamdetails from "./Component/ITTeam/ITTeamdetails";
import UpdateAsset from "./Component/Asset/UpdateAsset";
import UpdateEmpDetails from "./Component/Employee/UpdateEmpDetails";
import UpdateITTeamDetails from "./Component/ITTeam/UpdateITTeamdetails";
import AdminNavbar from "./Component/Admin/AdminNavbar";
import Admindetails from "./Component/Admin/Admindetails";
import UpdateAdmin from "./Component/Admin/UpdateAdmin";
import ITTeamNavbar from "./Component/ITTeam/ITTeamNavbar";
import EmployeeNavbar from "./Component/Employee/EmployeeNavbar";



function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }



  return (

  <main className="contanier-fluid">



    <Router>
    {/* <Heading/> */}
       <Routes>
{/* admin details */}
        <Route exact path="/" element={<Home />}></Route>
         <Route exact path="/dashboard" element={<AdminNavbar/>}></Route>
        <Route exact path="/raisedticket" element={<RaisedTicket/>}></Route>
        <Route exact path="/empprofile" element={<EmpProfiles/>}></Route>
        <Route exact path="/itteamprofile" element={<ITTeamProfile/>}></Route>
        <Route exact path="/assignTicket/:id" element={<TicketStatusAssign/>}></Route>
        <Route exact path="/admindetails" element={<Admindetails/>}></Route>
        <Route exact path="/updateadmin" element={<UpdateAdmin/>}></Route>

         <Route exact path="/registeradmin" element={<Register/>}></Route>
         <Route exact path="/loginadmin" element={<Login/>}></Route>
{/* itteam details   */}
         <Route exact path="/registeritteam" element={<Registeritteam/>}></Route>
         <Route exact path="/loginitteam" element={<Loginitteam/>}></Route>
         {/* <Route exact path="/login" element={<Headeritteam OpenSidebar={OpenSidebar}/>}></Route> */}
         {/* <Route exact path="/itteamdashboard/:userId"  element={<Dashboarditteam  openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>}></Route> */}
         <Route exact path="/itteamdashboard/:userId"  element={<ITTeamNavbar/>}></Route>
        
         <Route exact path="/alliddetails/:userId" element={<AllDetails/>}></Route>
         <Route exact path="/ticketdetails/:userId" element={<TicketDetails/>}></Route>
         <Route exact path="/ticketstatus/:id" element={<TicketStatus/>}></Route>
         <Route exact path="/itteamdetails/:userId" element={<ITTeamdetails/>}></Route>
         <Route exact path="/updateitteamdetails/:userId" element={<UpdateITTeamDetails/>}></Route>



{/* //employeedetails */}
         <Route exact path="/registeremployee"  element={<Registeremployee/>}></Route>
         <Route exact path="/loginemployee" element={<Loginemployee/>}></Route>
         <Route exact path="/EmpTicket/:userId" element={<EmpTicket/>}></Route>
         <Route exact path="/empsidebar" element={<EmpHeader/>}></Route>
         {/* <Route exact path="/empdashboard/:userId" element={<Empsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>}></Route> */}
         {/* <Route exact path="/empdashboard/:userId" element={<EmpDashboard/>}></Route> */}
         <Route exact path="/empdashboard/:userId" element={<EmployeeNavbar/>}></Route>
         
         <Route exact path="/employeedetails/:userId" element={<Employeedetails/>}></Route>
         <Route exact path="/empviewasset/:userId" element={<ViewAssetDetails/>}></Route>
         <Route exact path="/updateempdetails/:userId" element={<UpdateEmpDetails/>}></Route>

         {/* <Route exact path="/adminhomepage" element={<AdminHomePage/>}></Route> */}
{/* //asset */}
         <Route exact path="/addasset" element={<Addasset/>}></Route>
         <Route exact path="/getallasset" element={<Assetdetails/>}></Route>
         <Route exact path="/updateasset/:assetid" element={<UpdateAsset/>}></Route>

 {/* <tickt details        */}


 <Route exact path="/addticket/:userId" element={<Addticket/>}></Route>
 <Route exact path="/viewticket/:id" element={<ViewTicket/>}></Route>
 <Route exact path="/viewallticket/:userId" element={<ViewAllTicket/>}></Route>



         
       </Routes>  



    </Router>

</main>


  );
}

export default App;
