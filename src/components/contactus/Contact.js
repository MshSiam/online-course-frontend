// This is Contact Us page's Components

import React from "react"
import { Form, ButtonGroup, Button, Col, Row, Container } from "react-bootstrap"
import ReactDom from "react-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhone,
  faMailBulk,
  faLocationArrow
} from "@fortawesome/free-solid-svg-icons"
import css from "./contact.css"

// icon names
const phone = <FontAwesomeIcon icon={faPhone} />
const mail = <FontAwesomeIcon icon={faMailBulk} />
const location = <FontAwesomeIcon icon={faLocationArrow} />

// contact us
const Contact = () => {
  return (
    <div className="my-4 ">
      <h2 className="mt-3 mb-2 fw-bold">
        <span className="color-dark">Contact</span>{" "}
        <span className="color-orrange">Us</span>
      </h2>
      <Container className="container">
        <Row xs={1} md={2} lg={3} className="Social-links mt-4 pt-4">
          <Col className="mb-4">
            <h4 className="ch4">{phone} : +88 01765871554</h4>
            <h5 className="ch5">{mail} : Siyamkenway@gmail.com</h5>
            <p className="cp">{location} Kalishema, Brahmanbaria, Bangladesh</p>
          </Col>
          <hr />

          {/* form section */}

          <Col>
            <Form>
              <h1>Send Us Feedback</h1>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="success" type="submit">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="form"></Row>
      </Container>
    </div>
  )
}

export default Contact
