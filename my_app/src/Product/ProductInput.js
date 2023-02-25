import React from 'react'
import Form from 'react-bootstrap/Form'
import { useState } from 'react';
import './ProductInput.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';

const ProductInput = () => {

const [file, setFile] = useState();
function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
}
const nav = useNavigate();
const handleSubmit = (event) =>
    {
      // event.preventDefault();
      // alert('submitted');
      event.preventDefault();
      console.log(document.getElementById('formFile').value)
      const formData = new FormData();
      formData.append('title', document.getElementById('formTitle').value);
      formData.append('name', document.getElementById('formName').value);
      formData.append('price', document.getElementById('formPrice').value);
      formData.append('categ', document.getElementById('formCateg').value);
      formData.append('image', document.getElementById('formFile').files[0]);
      
      fetch("http://localhost:5000/product/new",
      {
        method: 'POST',
        body : formData,
      }
      )
      .then(alert("Product added successfully !"),
      err=>console.log(err)
      )
      nav('/');
    }

  return (
    <div className='product-input'>
        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label> Upload Product</Form.Label>
        <Form.Control type="file" accept=".jpg,.jpeg,.png" onChange={handleChange}/>
      </Form.Group>
      <img src={file} id='img_upload' alt='Loading...'/>
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
      <Form.Group className="mb-3 w-50" controlId='formCateg'>
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Enter Categ" />
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3 w-50" controlId='formPrice'>
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