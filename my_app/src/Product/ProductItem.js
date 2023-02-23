import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import './Product.css'
  //title, image, categ, prev, name, price
const ProductItem = (props) => {
    return (
      <Link to={`/products/${props.item.name}`} style={{ textDecoration: 'none' }}>
        <Card>
          <Card.Header><h4>{props.item.categ}</h4></Card.Header>
          <Card.Img variant="top" src={props.item.image}/>
          <Card.Body>
            <Card.Title>{props.item.name}</Card.Title>
            <Card.Text>
              {props.item.title}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="text-muted">{props.item.price}</div>
          </Card.Footer>
        </Card>
        </Link>
    );
}

export default ProductItem