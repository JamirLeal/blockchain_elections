import React, { Component } from 'react';
import QrReader from "react-qr-reader";
import Loader from 'react-loader-spinner';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import './Voting.css'

class Voting extends Component {
    constructor(props) {
        super(props);
        this.state = {
          delay: 300,
          result: "No result",
          goOut: false
        };
        this.handleScan = this.handleScan.bind(this);
        this.setGoOut = this.setGoOut.bind(this);
    }

    handleScan(data) {
        if (data) {
          this.setState({
            result: data,
          });
        }
    }
    
    handleError(err) {
        console.error(err);
    }

    setGoOut() {
        if (this.state.goOut === false) {
            setTimeout(() => this.setState({ goOut: true }), 3000) 
        }
    }

    render() {
        if (this.state.goOut === true) {
            return (
                <Redirect to="/Card" />
            )
        }
        if (this.state.result === "No result") {
            return (
                <div className='backGround'>
                    <Row style={{ paddingTop: "200px", width: "100%" }}>
                        <Col md={{span:6, offset: 3}} style={{ display: "inline-grid", justifyItems: "center" }}>
                            <Row>
                                <h1 className='textHeader '>
                                    Por favor ingresa:
                                </h1>
                            </Row>
                            <Row>
                                <h1 className='textHeader '>
                                    Codigo QR del INE en la cámara
                                </h1>
                            </Row>
                            <Row>
                                <QrReader
                                delay={this.state.delay}
                                onError={this.handleError}
                                onScan={this.handleScan}
                                style={{ width: "300px" }}
                                />
                            </Row>
                            <Row>
                                <h3>{this.state.result}</h3>
                            </Row>
                        </Col>
                    </Row>
                </div>
            )
        } else {
            this.setGoOut()
            return (
                <div className='backGround'>
                    <Row style={{ paddingTop: "200px", width: "100%" }}>
                        <Col md={{span:6, offset: 3}} style={{ display: "inline-grid", justifyItems: "center" }}>
                            <Row>
                                <h1 className='textHeader '>
                                    Por favor ingresa:
                                </h1>
                            </Row>
                            <Row>
                                <h1 className='textHeader '>
                                    Pulgar derecho y/o cara
                                </h1>
                            </Row>
                            <Row>
                                <QrReader
                                delay={this.state.delay}
                                onError={this.handleError}
                                onScan={this.handleScan}
                                style={{ width: "300px" }}
                                />
                            </Row>
                            <Row>
                                <Loader
                                type="Puff"
                                color="#00BFFF"
                                height={100}
                                width={100}
                                timeout={3000} //3 secs
                                />
                            </Row>
                        </Col>
                    </Row>
                </div>
            )
        }
    }
}

export default Voting