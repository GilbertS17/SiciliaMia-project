import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';

export default function Card(props) {
    return (
        <Col lg={6}>
            <div className="card">
                <h1 className="card-api">{props.item.API}</h1>
                <p className="card-description"><span className="bold">Description:</span> {props.item.Description}</p>
                <div className="card-bottom">
                    <a href={props.item.Link} target="_blank" className="card-link"><FontAwesomeIcon icon={faLink}></FontAwesomeIcon></a>
                    <p className="card-category"><span className="bold">Category:</span> {props.item.Category}</p>
                </div>
            </div>
        </Col>
    )
}