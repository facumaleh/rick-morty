import { useState, useEffect } from "react";

import React from "react";
import{Button,Modal,OverlayTrigger, Image,Tooltip} from 'react-bootstrap';

export default function CharacterCard(props) {
  const { img, name, origin,status,gender} = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="card">
      <img className="photo" src={img} alt={name} />
      <h2>{name}</h2>
      <p>
        <b>Origen:</b> {origin}
        <br/>
        <b>Status:</b> {status}
        <br/>
        <b>Genero:</b> {gender}
        <br/>
              <Button variant="primary" onClick={handleShow}>
        		  	Mas info
      					</Button>
                <Modal show={show} onHide={handleClose} animation={false}>
        				<Modal.Header closeButton>
         			 	<Modal.Title>{name} </Modal.Title>
        				</Modal.Header>
                <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">Facundo Maleh</Tooltip>} >
    {({ ref, ...triggerHandler }) => (
      <Button
        variant="light"
        {...triggerHandler}
        className="d-inline-flex align-items-center"
      >
        <Image
          ref={ref}
          roundedCircle
          src=""
        />
        <span className="ml-1">¿Quien hizo el trabajo?</span>
      </Button>
    )}
  </OverlayTrigger>,


       			 		<Modal.Body> 
									<img style={{ marginLeft:"20%"}}src={img}/>
                  <br/>
                  <br/>
                  <p> Hello, my name is {name}, I'm from {origin}, my status is {status} and my gender is {gender}   </p>
                
                  <Button style={{ marginLeft:"40%"}} variant="danger" onClick={handleClose} > Back</Button>                          
							</Modal.Body>
      					</Modal>

        
      </p>
    </div>
  );
}
