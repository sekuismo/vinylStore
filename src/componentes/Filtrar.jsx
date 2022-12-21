import React, { Fragment } from 'react';
import { Container, Row, Col,Button,Alert } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const Filtrar = () => {
  const [discos, setDiscos] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3004/discos');
      const data = await response.json();
      setDiscos(data);
    }
    fetchData();
  }, []);

  function addToShoppingList(disco) {
    setShoppingList([...shoppingList, disco]);
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
  }
  
  function getShoppingList() {
    const shoppingListString = localStorage.getItem('shoppingList');
    return JSON.parse(shoppingListString);
  }
  function removeFromShoppingList(disco) {
    setShoppingList(shoppingList.filter(item => item !== disco));
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
  }
  function handleClick() {
    const shoppingList = getShoppingList();
    setShoppingList(shoppingList);
  }
  

  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
            <h1 className="display-2">Discos</h1>
          </Col>
        </Row>
        <Row>
          <Col>
          
          </Col>
          <Col>
            {discos.map(disco => (
              <div style={{ border: '1px solid black', padding: '10px' }} key={disco.nombreDisco}>
                <p>
                  {disco.nombreDisco} - {disco.interprete} - {disco.estilo}
                </p>
                <Button style={{margin:'10px'} }
                  variant="success"
                  onClick={() => addToShoppingList(disco)}
                >
                  Agregar 
                </Button  > 

    
              </div>
            ))}
          </Col>
          <Col>
            <h2>Lista de compra</h2>
            <br/>
            <Button onClick={handleClick}>Ver lista de compras</Button>
            {shoppingList.map(disco=> (
<div key={disco.nombreDisco} style={{
      border: '1px solid black',
      padding: '10px',
      backgroundColor: '#e9ecef',
      color: '#856404',
      borderRadius: '5px',
      margin:'10px'
    }}>
<p>
{disco.nombreDisco} - {disco.interprete} - {disco.estilo} - {disco.year}
</p>
<Button style={{margin:'10px'} } variant="danger" onClick={() => removeFromShoppingList(disco)}>
      Eliminar
    </Button>
    
</div>
))}
</Col>
</Row>
</Container>
</Fragment>
);
};

export default Filtrar




