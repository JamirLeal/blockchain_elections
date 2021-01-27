import React, { Component } from 'react';
import './Home.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap'
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
                    <Row style={{ justifyContent: 'flex-end', paddingBottom: '10px' }}>
                        <Col md={{ size: 4, offset: 8 }}>
                            <Link to="/Estadisticas" style={{ textDecoration: "none" }}>
                                <Button className="continueButton" variant="contained" color="primary" style={{ justifyContent: "end" }}>
                                    Haz clic aquí para ver estadísticas
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Home