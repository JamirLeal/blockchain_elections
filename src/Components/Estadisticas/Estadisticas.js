import React from 'react';
import {Bar} from 'react-chartjs-2';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap'

const state = {
  labels: ['PARTIDO A', 'PARTIDO B', 'PARTIDO C',
           'PARTIDO D', 'PARTIDO E', 'PARTIDO F', 'PARTIDO G'],
  datasets: [
    {
      label: 'Cantidad Votos',
      backgroundColor: ['rgba(215, 40, 40, 0.9)', 'rgba(28, 104, 225, 0.9)', 'rgba(245, 229, 27, 1)', 'rgb(173,38,36)', 'rgba(211, 84, 0, 1)', 'rgba(38, 166, 91, 1)', 'rgba(215, 40, 40, 0.9)'],
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [158245, 245939, 12410, 811244, 56423, 21412, 24453]
    }
  ]
}

export default class Estadisticas extends React.Component {
  render() {
    return (
      <div>
        <Row style={{ padding: '20px' }}>
            <Bar
            data={state}
            options={{
                title:{
                display:true,
                text:'Cantidades de votos en tiempo real',
                fontSize:20
                },
                legend:{
                display:true,
                position:'right'
                }
            }}
            />
        </Row>
        <Row style={{ justifyContent: 'flex-end', paddingBottom: '10px' }}>
            <Col md={{ size: 4, offset: 8 }}>
                <Link to='/' style={{ textDecoration: "none" }}>
                    <Button className="continueButton" variant="contained" color="primary" style={{ justifyContent: "end" }}>
                        Haz clic aquí para regresar
                    </Button>
                </Link>
            </Col>
        </Row>
      </div>
    );
  }
}