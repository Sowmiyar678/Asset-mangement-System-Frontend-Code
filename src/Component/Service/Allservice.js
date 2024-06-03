import React, { Component } from 'react'
import axios from 'axios';
 

// const View=  "http://localhost:8081/GetAllIdTicket";
const Update= "http://localhost:8081/UpdateTicket";


const AutoId="http://localhost:2030/AutoPop";

const Findbyid= "http://localhost:8081/GetTicketById/";
class Allservice extends Component {
 
     


            UpdateList=(ticket)=>{
                console.log(ticket);
                return axios.put(Update,ticket);
            }
            ViewTicket=(id)=>{
                return axios.get(Findbyid+id);
            }
        }
        
        export default new Allservice();