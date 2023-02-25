import React from 'react'
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from'react-bootstrap/Row';
import Col from'react-bootstrap/Col';
import { UserContext } from '../Users/UserContextProvider';
import './ProductDetails.css';

function ProductDetails () {
  const {pname}=useParams();
  const [data, setData] = React.useState([]);

  const {items, setItems, cart, setCart} = React.useContext(UserContext);
  const handler = () => {
    setItems(items+1);
    setCart(cart.concat(
      {
      header:document.querySelector('.card-header').innerHTML,
      name:document.querySelector('.card-text').innerHTML,
      price:document.querySelector('.card-price').innerHTML,
      categ:document.querySelector('.card-title').innerHTML,
      sizes:document.querySelector('.card-size').value
    }));
  }

  React.useEffect(() => {
  fetch(`http://localhost:5000/product/${pname}`)
  .then(response => response.json())
  .then(res => setData(res.product)
  ,err=> console.log(err))
  }, [pname])

  return (
    <>
    {data.map(item=>
      (
    <Card className="text-center details-card">
    <Card.Img src={item.image} className="img_details"/>
      <Card.Header>{item.title}</Card.Header>
      <Card.Body>
        <Card.Title>{item.categ}</Card.Title>
        <Card.Text>
          {item.name}
        </Card.Text>

    <hr/> 
    <Row>
      <Col>
    <Form.Select aria-label="Default select example" className="w-75 card-size">
      <option>Sizes Available</option>
      {
        item.sizes.map(size => <option value={size}>{size}</option>)
      }
    </Form.Select>
    </Col>
    <Col>
    <Button variant="primary" className='card-price' onClick={handler}>Rs.{item.price}/- Only</Button>
    </Col>
    </Row>
      </Card.Body>
    </Card>
      ))}
    </>
  )
    }
export default ProductDetails