import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './UserItem.css'

function UserItem(props) {
  return (
      
        <Col>
          <Card className="product" as={Link} to={"/places/"+props.name}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>
                {props.placeCount}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
  )
  }
export default UserItem;