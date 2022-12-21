import copy from '../img/copy.png'
import Background from '../img/background.jpg'
import { Container, Row,Col,Image } from 'react-bootstrap'
import { Fragment } from 'react'
import '../footer.css'
export const Footers = () =>{



    return (
        <Fragment>             
            <div className='fondo'>
            
       
                <Container>
                    <Row >
                        <Col  style={{margin:'10px',padding:'20px'}}     >
                         <p> © Desarrollado por  Carolina Valderrama y Esteban Muñoz </p>
                        
                        </Col>
                        <Col  style={{margin:'10px',padding:'20px'}}  >
                            <p>Sección 2022/P Programación Front End (TI2031/D-B50-N3-P12-C1/D Santiago Centro B5 )</p>
                        </Col>
                        
                    </Row>


                </Container>
            </div>

            


   



</Fragment>
    )
}