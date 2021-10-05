// This is footer components

import React from "react"
import { Container } from "react-bootstrap"

const Footer = () => {
  return (
    <Container
      fluid
      style={{ backgroundColor: "#002147", height: "100px" }}
      className="d-flex justify-content-center align-items-center py-4">
      <p className="text-white">©Copyrights-Reserved by || 15 Minute School</p>
      <br />
    </Container>
  )
}

export default Footer
