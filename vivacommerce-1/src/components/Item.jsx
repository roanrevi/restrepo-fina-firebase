import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



const Item=({id, nombre, cargo, fecha}) =>{
    return (
        <div key={id} className="contenedor-item">
            <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="https://www.adom.com.co/wp-content/uploads/2022/11/Medica-por-que-confiar-en-ADOM-600x620.jpg" />
            <Card.Body>
                <Card.Title className='card-nombre' >NOMBRE:<br/>
                {nombre}</Card.Title>
                <Button variant="primary" className='boton-card'>
                    <Link to={`/item/${id}`}>DETALLES</Link> 
                </Button>
            </Card.Body>
            </Card>
        </div>
    );
}

export default Item;