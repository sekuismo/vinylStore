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
    if (disco.stock > 0) {
      // Decrementar el stock del disco
      disco.stock--;
  
      // Realizar la petición HTTP PUT para actualizar el stock del disco
      fetch(`http://localhost:3004/discos/${disco.id}`, {
        method: 'PUT',
        body: JSON.stringify(disco),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(response => {
        if (response.ok) {
          // Agregar el disco al carrito de compras y actualizar el estado y localStorage
          const updatedShoppingList = [...shoppingList, disco];
          setShoppingList(updatedShoppingList);
          localStorage.setItem('shoppingList', JSON.stringify(updatedShoppingList));
        }
      });
    } else {
      // Mostrar mensaje de error indicando que no hay suficiente stock disponible
      alert("No hay suficiente stock disponible para este disco");
    }
  }
  
  
  function removeFromShoppingList(disco) {
    // Incrementar el stock del disco
    disco.stock++;
  
    // Realizar la petición HTTP PUT para actualizar el stock del disco
    fetch(`http://localhost:3004/discos/${disco.id}`, {
      method: 'PUT',
      body: JSON.stringify(disco),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => {
      if (response.ok) {
        // Eliminar el disco del carrito de compras y actualizar el estado y localStorage
        const updatedShoppingList = shoppingList.filter(item => item !== disco);
        setShoppingList(updatedShoppingList);
        localStorage.setItem('shoppingList', JSON.stringify(updatedShoppingList));
      }
    });
  }
  
  
  
  function getShoppingList() {
    const shoppingListString = localStorage.getItem('shoppingList');
    return JSON.parse(shoppingListString);
  }
  function handleClick() {
    const shoppingList = getShoppingList();
    setShoppingList(shoppingList);
  }
  function handleSubmit(event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const nombreDisco = formData.get('nombreDisco');
    const interprete = formData.get('interprete');
    let precio= formData.get('precio');
    precio = parseFloat(precio)
    let year = formData.get('year');
    year =parseInt(year)
    const estilo = formData.get('estilo');
    let stock = formData.get('stock')
    stock = parseInt(stock)

    const nuevoDisco = {
      id: Date.now(), // Asignar un valor único como id
      nombreDisco,
      interprete,
      estilo,
      precio,
      year,
      stock
    };
    
    fetch('http://localhost:3004/discos', {
      method: 'POST',
      body: JSON.stringify(nuevoDisco),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setDiscos([...discos, data]);
        // Agrega el nuevo disco al carrito de compras
        setShoppingList([...shoppingList, data]);
        // Almacena la lista de compras en localStorage
        localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
      });
  }

  
  
  
  

  return (
    
    <Fragment>
      <Container>
        <Row style={{margin:'20px'}}>
          <Col >
            <h1 className="display-2 ">Agrega discos</h1>
          </Col>
        </Row>
        <Row>

          <Col sm={4}>
            {discos.map(disco => (
              <div style={{ border: '1px solid black', padding: '10px' }} key={disco.id}>
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
          <Col sm={4}>
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
<Col sm={4}>
    <h2 className='display-3'>Solicitar disco</h2>
    <br />
    <p>Encarga un disco que no tengamos en nuestra lista</p>
    <br />

    <form onSubmit={handleSubmit} style={{margin:'20px'}}>
  <div className="form-group">
    <label>
      Nombre del disco:
      <input type="text" className="form-control" name="nombreDisco" />
    </label>
  </div>
  <div className="form-group">
    <label>
      Interprete:
      <input type="text" className="form-control" name="interprete" />
    </label>
  </div>
  <div className="form-group">
    <label>
      Precio:
      <input type="number" className="form-control" name="precio" />
    </label>
  </div>
  <div className="form-group">
    <label>
      Año:
      <input type="number" className="form-control" name="year" />
    </label>
  </div>
  <div className="form-group">
    <label>
      Estilo:
      <input type="text" className="form-control" name="estilo" />
    </label>
  </div>
  <div className="form-group">
    <label>
      Stock:
      <input type="number" className="form-control" name="stock" />
    </label>
  </div>
  <button type="submit" className="btn btn-primary">
    Doble click para solicitar
  </button>
</form>



</Col>
</Row>
</Container>
</Fragment>
);
};

export default Filtrar




