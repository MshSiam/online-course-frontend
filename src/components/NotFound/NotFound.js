import React from "react"
import { Container, Image, Button } from "react-bootstrap"
import "./NotFound.css"
import error404 from "../../images/000-404.png"

const NotFound = () => {
  const handleBack = () => {
    window.history.go(-1)
  }
  return (
    <Container className="my-5">
      <h1>404 Error</h1>
      <p>Page not Found. Make sure you've searched the right page.</p>
      <Image className="img-fluid" src={error404}></Image>
      <br />
      <Button onClick={handleBack} variant="info" className="mybtn my-2">
        Go Back
      </Button>{" "}
    </Container>
  )
}

export default NotFound
