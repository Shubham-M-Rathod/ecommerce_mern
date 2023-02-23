import React from "react";
import ProductItem from "./ProductItem";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from'react-bootstrap/Col';

function ProductList() {
const [data, setData] = React.useState([]);
React.useEffect(() => {
  fetch("http://localhost:5000/product/all")
  .then(response => response.json())
  .then(res => setData(res.product)
  ,err=> console.log(err))
})

  return (
    <Container>
      <Row md={3}>
      {data.map(item => (
        <Col>
        <ProductItem key={item.title} item={item} />
        </Col>
      ))}
    </Row>
    </Container>
  );
}

export default ProductList;