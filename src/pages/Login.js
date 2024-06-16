import React, {Component} from 'react'
import LoginForm from "../components/LoginForm";
import {Col, Container, Row} from "react-bootstrap";
import entrance from "./images/entrance.png";
export default class Login extends Component{
    render(){
        return(
            <div >
                
                <Row>
                    <div className="col-md-6 mt-5 mb-5" >
            <img src={entrance} alt="" className="rounded float-right"
                 height={400} weight={400}/>
        </div>
                   <div className="col-md-6 mt-5 mb-5">
                     <LoginForm/>
                   </div>
                   </Row>
                       
                    
            
            
                

        
            </div>
        )
    }
}