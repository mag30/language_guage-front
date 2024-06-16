import React, {Component} from 'react'
import RegistrationForm from "../components/RegistrationForm";
import {Col, Container, Row} from "react-bootstrap";

export default class Reg extends Component{
    render(){
        return(
            <div>
                <Container>
                    <Row>
                    <Col/>
                    <Col>
                        <RegistrationForm/>
                    </Col>
                    <Col/>
                    </Row>

                </Container>
            </div>
        )
    }
}