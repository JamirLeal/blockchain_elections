import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { Button } from '@material-ui/core';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import './Card.css'

import personaje from '../../Data/images/personaje.jpg'
import morena from '../../Data/images/logo-morena.png'
import { Redirect } from 'react-router-dom';


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
          alreadyVoted: false
        };
    }

    handleVote = () => {
        this.setState({ alreadyVoted: true })
    }

    vote = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div className='custom-ui'>
                    <h1>Has seleccionado a:</h1>
                    <h1>Candidato A</h1>
                    <h2>¿Estás seguro que deseas votar por él?</h2>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }} style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                            <img src={personaje} height="150px"/>
                        </Col>
                    </Row>
                  <Row>
                      <Col>
                        <Button className="continueButton" onClick={onClose} variant="contained" color="primary">No</Button>
                      </Col>
                      <Col>
                      <Button className="continueButton" variant="contained" color="primary"
                        onClick={() => {
                        onClose();
                        this.handleVote();
                        }}
                        >
                        Sí
                    </Button>
                      </Col>
                  </Row>
                </div>
              );
            }
          });
    }

    render() {
        if (this.state.alreadyVoted) {
            return (<Redirect to="/Registered"/>)
        }
        return (
            <div className='backGroundCard'>
                <Row>
                    <Col md={{ span:6, offset: 3 }} style={{textAlign:"center"}}>
                        <h3 style={{ marginTop: 0 }}>Estimado ciudadano:</h3>
                        <h3>Por favor marque el recuadro de su preferencia. </h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span:6, offset:3 }}>
                        <Row className="paddingTF">
                            <Col md={{ span:4, offset:2 }} style={{marginLeft:"140px"}}>
                                <Button className="pressButton" variant="contained" color="primary" onClick={this.vote} onClick={this.vote}></Button>
                            </Col>
                            <Col md={{ span:4, offset:1 }} style={{marginLeft:"0px"}}>
                                <Button className="pressButton" variant="contained" color="primary" onClick={this.vote}></Button>
                            </Col>
                        </Row>
                        <Row className="paddingT">
                            <Col md={{ span:4, offset:2 }} style={{marginLeft:"140px"}}>
                                <Button className="pressButton" variant="contained" color="primary" onClick={this.vote}></Button>
                            </Col>
                            <Col md={{ span:4, offset:1 }} style={{marginLeft:"0px"}}>
                                <Button className="pressButton" variant="contained" color="primary" onClick={this.vote}></Button>
                            </Col>
                        </Row>
                        <Row className="paddingT">
                            <Col md={{ span:4, offset:2 }} style={{marginLeft:"140px"}}>
                                <Button className="pressButton" variant="contained" color="primary" onClick={this.vote}></Button>
                            </Col>
                            <Col md={{ span:4, offset:1 }} style={{marginLeft:"0px"}}>
                                <Button className="pressButton" variant="contained" color="primary" onClick={this.vote}></Button>
                            </Col>
                        </Row>
                        <Row className="paddingT">
                            <Col md={{ span:4, offset:2 }} style={{marginLeft:"140px"}}>
                                <Button className="pressButton" variant="contained" color="primary" onClick={this.vote}></Button>
                            </Col>
                            <Col md={{ span:4, offset:1 }} style={{marginLeft:"0px"}}>
                                <Button className="pressButton" variant="contained" color="primary" onClick={this.vote}></Button>
                            </Col>
                        </Row>
                        <Row className="paddingT">
                            <Col md={{ span:4, offset:2 }} style={{marginLeft:"140px"}}>
                                <Button className="pressButton" variant="contained" color="primary" onClick={this.vote}></Button>
                            </Col>
                            <Col md={{ span:4, offset:1 }} style={{marginLeft:"0px"}}>
                                <Button className="pressButton" variant="contained" color="primary" onClick={this.vote}></Button>
                            </Col>
                        </Row>
                        <Row className="paddingT">
                            <Col md={{ span:4, offset:2 }} style={{marginLeft:"140px"}}>
                                <Button className="pressButton" variant="contained" color="primary" onClick={this.vote}></Button>
                            </Col>
                            <Col md={{ span:4, offset:1 }} style={{marginLeft:"0px"}}>
                                <Button className="pressButton" variant="contained" color="primary" onClick={this.vote}></Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Card