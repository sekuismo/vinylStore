import React, { Fragment } from 'react'


import { Container,Row,Col ,Image} from 'react-bootstrap'

export const Main = () => {
  return (
    <Fragment>
    <Container>
  <Row justify="center">
    <Col>
    <h1 className='display-1 justify-content-center'>
        Vynil Store 💽
      </h1>
    </Col>
  <Col>

  <h4><p className='mt-2 mb-4' >
    "¡Bienvenidos a Vinyl Store! Somos una tienda en línea dedicada a la compra y venta de discos de música en formato físico. Ofrecemos una amplia selección de discos difíciles de conseguir y diferentes opciones de pago. Hacemos envíos a través de Starken, Correos de Chile y Chilexpress. ¡Esperamos poder ayudarte a encontrar los discos que buscas!"
            </p>
            </h4>
  </Col>  

  </Row>

  <Row>
    <Col>
    <h3 className='text-danger'>
                Nosotros
                
            </h3>
            </Col>
            <hr></hr>
            <Col sm={5}> 
            <h4>Somos una empresa líder en la venta de vinilos, y nuestro objetivo es que puedas disfrutar al máximo de tu música y conectarte con ella de una manera auténtica. Nos esforzamos por ofrecerte la mejor selección de vinilos de alta calidad y por brindarte una experiencia de compra inigualable. Siéntete libre de vibrar junto a tu música con nosotros. </h4>
            <h4><p className='mt-4 mb-4'>
            </p></h4>
            </Col>
  </Row>
  <Row>
    <Col >
    
    
        </Col>
  </Row>
    </Container>
    

            


    </Fragment>
  )
}

export default Main