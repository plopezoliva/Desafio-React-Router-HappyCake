import React from 'react'
import { Container} from 'react-bootstrap'
import Formulario from '../components/Formulario'


const Contact = () => {
  return (
    <Container className="col-md-6 m-auto">
        <h1 className='pt-5 text-center'>Cuentanos, ¿en qué te podemos ayudar?</h1>
        <Formulario/>
  </Container>
  )
}

export default Contact