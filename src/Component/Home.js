import React, { useState } from 'react';
import { Button, Container, Row, Col, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 
const Home = () => {
  const [showModal, setShowModal] = useState(false);
 
  const handleLoginClick = () => {
    setShowModal(true);
  };
 
  const handleUserTypeSelect = (userType) => {
    window.location.href="/loginadmin"
     };
 
     const handleLoading=(userType)=>{
        window.location.href="/loginitteam"
     }

     const handleLoadEmployee=(userType)=>{
      window.location.href="/loginemployee"
   }
 
  return (
    <div className="h" style={{ backgroundColor: 'grey', color: 'white', backgroundImage: 'url("https://ezo.io/wp-content/uploads/2023/09/Banner.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
         

    
   
      <div className="container-fluid"
      style={{backgroundColor:"black"}}
      >
        {/* <Link className="navbar-brand" to={"/"}
        style={{
        // color:"black",
        fontWeight:"bold",
        backgroundImage:"url(`https://t3.ftcdn.net/jpg/06/77/08/24/240_F_677082446_Z4bhpqzny4u3UZDuOIu329q5y6xwmM0q.jpg`)",
        paddingTop:"550px"
    }}
        >
         
        </Link> */}
        
        
      </div>
   
    <Container className="d-flex vh-100">
      <Row className="m-auto align-self-center">
        <Col className="text-center">
          <h1><b><i>Welcome to Asset Management System</i>  </b></h1>
          <p style={{color:"black"}}>Get started by loggin in your account.</p>
          <Link variant="primary" onClick={handleLoginClick} className="m-2"><Button>Login</Button></Link>
        </Col>
      </Row>
 
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Select User Type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button variant="secondary" onClick={() => handleUserTypeSelect('Admin')} className="m-2" style={{textDecoration:"none"}}>
           Admin
          </Button>
          <Button variant="secondary" onClick={() => handleLoading('Admin')} className="m-2">
         ITTeam 
         </Button>
          <Button variant="secondary" onClick={() => handleLoadEmployee('Employee')} className="m-2">
         Employee </Button>
       
        </Modal.Body>
      </Modal>
    </Container>
    
    </div>
  );
};
 
export default Home;