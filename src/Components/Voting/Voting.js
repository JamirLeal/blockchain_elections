import React, { Component } from 'react';
import QrReader from "react-qr-reader";

import './Voting.css'

class Voting extends Component {
    constructor(props) {
        super(props);
        this.state = {
          delay: 300,
          result: "No result"
        };
        this.handleScan = this.handleScan.bind(this);
    }

    handleScan(data) {
        if (data) {
          this.setState({
            result: data
          });
        }
    }
    
    handleError(err) {
        console.error(err);
    }

    render() {
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
    }
}

export default Voting