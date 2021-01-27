import React, { Component } from 'react';
import './Home.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import mexico_flag from '../../../src/Data/images/mexico_flag.png';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="home-frame">
                    <header className="App-header">
                    <img src={mexico_flag} className="mexico_flag" alt="logo" />
                    <h1 class="title">
                        ¡Bienvenido a las elecciones 2021!
                    </h1>
                    <Link to="/Voting" style={{ textDecoration: "none" }}>
                        <Button className="continueButton" variant="contained" color="primary">
                            Haz clic aquí para continuar
                        </Button>
                    </Link>
                    </header>
                </div>
            </div>
        )
    }
}

export default Home