import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ProductInput from './ProductInput'
import ProductDelete from './ProductDelete'
import Form from 'react-bootstrap/Form';

const Admin = () => {

  const [show, setShow] = useState(true);

  const handleClose = () =>
  {
    if(document.getElementById('form-pass').value === '12345671')
    setShow(false);
    else
    alert('Wrong Password');
  } 
  return (
    <>
    <div>
      <Modal show={show} >
        <Modal.Header>
          <Modal.Title> Admin Page </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="form-pass">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    <div>
        <ProductInput/>
        <hr/>
        <ProductDelete/>
    </div>
    </>
  )
}

export default Admin