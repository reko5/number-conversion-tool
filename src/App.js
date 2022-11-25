import React, { useState, useRef } from "react";
import { convertToString } from "./Converter";
import {
  Button,
  InputGroup,
  Container,
  Form,
  Row,
  Col,
  Badge,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [number, setString] = useState();
  const numberRef = useRef();

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      return handleNumberConverter();
    }
  };

  function handleNumberConverter() {
    const number = numberRef.current.value;
    if (number === "" || number > 999999999999)
      return setString("Please type a number from 0 to 999.999.999.999!");
    setString((newString) => {
      return (newString = convertToString(number));
    });
    numberRef.current.value = null;
  }

  return (
    <Container className="d-flex justify-content-md-center mt-5">
      <Card
        className="text-center"
        style={{ width: "1200px", height: "500px" }}
        bg="light"
        border="dark"
      >
        <Row className="mt-5">
          <h1>Number Converter</h1>
        </Row>
        <Row className="justify-content-md-center mt-5">
          <Col xs lg="6">
            <InputGroup size="lg">
              <Form.Control
                id="myInput"
                ref={numberRef}
                type="number"
                placeholder="Enter your number here"
                onKeyDown={handleKeyDown}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-3">
          <Col>
            <Badge bg="info">
              Hint: Only works with whole numbers from 0 to 999.999.999.999
            </Badge>{" "}
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-5">
          <Col>
            <Button
              id="myButton"
              onClick={handleNumberConverter}
              size="lg"
              className="btn btn-primary "
            >
              Convert Number{" "}
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <div>Your number as a string is:</div>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <div
              id="string"
              className="bg-success"
              placeholder="Enter your number here"
            >
              {number}
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default App;
