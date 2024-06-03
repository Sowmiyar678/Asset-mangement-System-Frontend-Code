
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Allservice from "../Service/Allservice";
 
const ViewTicket = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState([])
 
  useEffect(() => {
    loadStudent();
  }, []);
 
  const loadStudent = async () => {
    await Allservice.ViewTicket(id).then((response) => {
      console.log(response.data);
      setTicket(response.data);
    });
  };
 
  return (
    <section className="shadow" style={{ backgroundColor: "whitesmoke" }}>
      {ticket.map((ticket) => (
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-3">
              
            </div>
 
            <div className="col-lg-9">
              <div className="card mb-4">
                <div className="card-body">
                  <hr />
 
                  
 
                
                  <div className="row">
                    <div className="col-sm-3">
                      <h5 className="mb-0">description</h5>
                    </div>
 
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{ticket.description}</p>
                    </div>
                  </div>
 
                  <hr />
 
                  <div className="row">
                    <div className="col-sm-3">
                      <h5 className="mb-0">project</h5>
                    </div>
 
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{ticket.project}</p>
                    </div>
                  </div>
 
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h5 className="mb-0">status</h5>
                    </div>
 
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{ticket.status}</p>
                    </div>
                  </div>
 
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h5 className="mb-0">priority</h5>
                    </div>
 
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{ticket.priority}</p>
                    </div>
                  </div>
                  <hr />
 
                  <div className="row">
                    <div className="col-sm-3">
                      <h5 className="mb-0">location</h5>
                    </div>
 
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{ticket.location}</p>
                    </div>
                  </div>
                  <hr />
 
				  <div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Admin Id
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{ticket.admin.adminid}
											
										</p>
									</div>
								</div>
								<hr/>
								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Employee Id
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{ticket.employee.empid}
											
										</p>
									</div>
								</div>
                 
 
                    <div className="col-sm-2">
                      <Link
                        to={"/studentview"}
                        type="submit"
                        className="btn btn-success btn-md"
                      >
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
      ))}
    </section>
  );
};
 
export default ViewTicket;
 