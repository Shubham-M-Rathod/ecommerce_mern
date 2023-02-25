import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './ProductDelete.css'
import { useNavigate } from 'react-router-dom';

const ProductDelete = () => {
    const [data, setData] = React.useState([]);
React.useEffect(() => {
  fetch("http://localhost:5000/product/all")
  .then(response => response.json())
  .then(res => setData(res.product)
  ,err=> console.log(err))
})
const nav = useNavigate();
const handleDelete = (e) => 
{
    e.preventDefault();
    const del = document.getElementById('form-delete').value;
    fetch("http://localhost:5000/product/delete/"+del, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
  .then(alert("Product Deleted"))
  nav('/');
}
  return (
    <div className='product-delete'>
        <Form.Group controlId='form-delete'>
        <Form.Select aria-label="Default select example" >
      <option>Open this select menu</option>
      {data.map(product => <option key={product.name}>{product.name}</option>)}
    </Form.Select>
    <Button type="submit" onClick={handleDelete}>Delete</Button>
    </Form.Group>
    </div>
  )
}

export default ProductDelete