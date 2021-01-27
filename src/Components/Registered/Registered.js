import React, { Component } from 'react';
import './Registered.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import mexico_flag from '../../../src/Data/images/mexico_flag.png';

class Registered extends Component {
    constructor(props) {
        super(props);
        this.state = {
          ready: false
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ ready: true })
        }, 2000)
    }

    render() {
        if (this.state.ready) {
            return (<Redirect to="/" />)
        }
        return (
            <div className="Home">
                <div className="home-frame">
                    <header className="App-header">
                    <img src={mexico_flag} className="mexico_flag" alt="logo" />
                    <h1 class="title">
                        Muchas gracias, ¡Tu voto ha sido registrado!
                    </h1>
                    </header>
                </div>
            </div>
        )
    }
}

export default Registered