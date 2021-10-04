import React from "react"
import { ButtonGroup, Button, Card, CardGroup, Col } from "react-bootstrap"
import "./Service.css"

const Service = (props) => {
  const { img, name, price } = props.service
  return (
    <CardGroup>
      <Card>
        <Card.Img className="img" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <p className="price">Price : ${price}</p>
          <Button variant="info">Enroll</Button>
        </Card.Body>
      </Card>
    </CardGroup>
  )
}

export default Service
