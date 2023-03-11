import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard(props) {
  const {price,title,images}=props.product;
  return (
    <Card className='col-md-3' style={{ height: '350px' }}>
    <Card.Img variant="top" src={images[0]}  alt={title} style={{ height: '200px' }} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
    </Card.Body>
    <Card.Footer className='card-footer'>
        <Card.Text>$ {price}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Footer>
  </Card>
  )
}

export default ProductCard