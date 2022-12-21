import React, { Fragment } from 'react'
import { Container,Row,Col,Navbar,Nav,Image } from 'react-bootstrap'
import banner from '../img/banner.jpg'


//No es necesario importar reactRouterDom aquí, ya que este se encuentra importado en app.jsx 
const Header = () => {
  return (
    <Fragment> 
          <Container fluid>
      <Row>
      <Col >
        <Image src={banner} width="100%" height={200}  />
      </Col>
      </Row>
    </Container>


    

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/filtrar">Comprar</Nav.Link>
            <Nav.Link href="/listado">Nuestros vinilos</Nav.Link>
           
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Fragment>
  )
}

export default Header