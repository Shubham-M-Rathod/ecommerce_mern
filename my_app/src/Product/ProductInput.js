import React from 'react'
import Form from 'react-bootstrap/Form'
import { useState } from 'react';
import './ProductInput.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const ProductInput = () => {

const [file, setFile] = useState();
function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
}
const handleSubmit = (event) =>
    {
      // event.preventDefault();
      // alert('submitted');
      event.preventDefault();
      fetch("http://localhost:5000/product/new",
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          Mail: document.getElementById("email").value,
          Password: document.getElementById("password").value
        })
      }
      )
    }

  return (
    <div className='product-input'>
        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label> Upload Product</Form.Label>
        <Form.Control type="file" onChange={handleChange}/>
      </Form.Group>
      <img src={file} id='img_upload'/>
      <Row>
        <Col>
      <Form.Group className="mb-3 w-50" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title" />
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3 w-50" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group>
      </Col>
      </Row>
      <Row>
      <Col>
      <Form.Group className="mb-3 w-50">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Enter Categ" />
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3 w-50">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Enter Price" />
      </Form.Group>
      </Col>
      </Row>
      <Button onClick={handleSubmit}>Publish<br/>Product</Button>
    </div>
  )
}

export default ProductInput