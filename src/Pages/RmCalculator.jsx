import React from 'react'
import  Rm  from '../components/Rm/Rm'
import { Col, Row } from 'react-bootstrap'

export const RmCalculator = () => {
  return (
    <>
      <section className="container">

      <Row>
        <Col></Col>
        <Col lg={8}   >
        <h2 className="mb-4 text-center mt-5" >
          Calculadora RM
        </h2>
        <div className="col-lg-12 col-12">
          <p className="me-4" >
            El calculo se fundamenta en el conteo de repeticiones que se
            pueden hacer al levantar un peso hasta que se llegue al fallo. <strong className="text-warning">Si
            no se superan las 12 repeticiones</strong>, esta estimación es bastante
            precisa y útil. La formula utilizada es la de Brzycki
          </p>
        </div>
       <Rm/>
        </Col>
        <Col></Col>
      </Row>
      <div className="additional-calculator">
          <h3>También puedes utilizar nuestra <a href="/CalculadoraRm">Calculadora de RM</a></h3>
        </div>



      </section>


    </>
  )
}

