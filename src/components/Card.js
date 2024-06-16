import {Button} from "react-bootstrap";
import React from "react";

function Card(props){
    return <div className="row about m-2 rounded-4">
        <div className="col-md-6">
            <p className=" nav-link active"><h1
                className="text-uppercase font-weight-bold font-size 100px mb-5 m-5 ">{props.name}</h1></p>
            <div className="row">
                <div className="col-1">
                    <h3></h3>
                </div>
                <div className="col-10">
                    <p className="p"><em><strong>{props.name}</strong></em> {props.text}</p>
                    <Button href={props.link} variant="secondary">Перейти</Button>
                </div>
            </div>


        </div>

        <div className="col-md-6 mt-5 mb-5">
            <img src={props.photo} alt="" className="rounded float-right"
                 height={400} weight={400}/>
        </div>
    </div>
}

export default Card