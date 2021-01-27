import React, { Component } from 'react';
import QrReader from "react-qr-reader";
import Loader from 'react-loader-spinner';
import { Redirect } from 'react-router-dom';

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
                <Redirect to="/" />
            )
        }
        if (this.state.result === "No result") {
            return (
                <div className='backGround'>
                    <div className='contentCenter'>
                        <div className='row'>
                            <h1 className='textHeader '>
                                Por favor ingresa:
                            </h1>
                        </div>
                        <div className='row'>
                            <h1 className='textHeader '>
                                Codigo QR del INE en la cámara
                            </h1>
                        </div>
                    </div>
    
                    <div className='row camRows'>
                        <div className='row'>
                        <QrReader
                            delay={this.state.delay}
                            onError={this.handleError}
                            onScan={this.handleScan}
                            style={{ width: "300px" }}
                        />
                        </div>
                        <div className='row'>
                            <h3>{this.state.result}</h3>
                        </div>
                    </div>
                </div>
            )
        } else {
            this.setGoOut()
            return (
                <div className='backGround'>
                    <div className='contentCenter'>
                        <div className='row'>
                            <h1 className='textHeader '>
                                Por favor ingresa:
                            </h1>
                        </div>
                        <div className='row'>
                            <h1 className='textHeader '>
                                Pulgar derecho y/o cara
                            </h1>
                        </div>
                    </div>
                    <div className='row camRows'>
                        <div className='row'>
                        <QrReader
                            delay={this.state.delay}
                            onError={this.handleError}
                            onScan={this.handleScan}
                            style={{ width: "300px" }}
                            resolution={720}
                        />
                        </div>
                        <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000} //3 secs
                        />
                    </div>
                </div>
            )
        }
    }
}

export default Voting