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
  const [message, setMesssage] = useState();
  const [number, setString] = useState();
  const numberRef = useRef();

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      return handleNumberConverter();
    }
  }

  function handleNumberConverter() {
    let number = numberRef.current.value;
    const resultDiv = document.getElementById("convertedToString");
    const fractionalsLength =
      number.slice(number.indexOf("."), number.length).length - 1;

    if (
      (number.length !== 1 && number[0] === "0" && number[1] !== ".") ||
      number[0] === "." ||
      (number[0] === "-" && (number[1] === "0") & (number[2] !== "."))
    ) {
      resultDiv.style.background = "red";
      return (
        (numberRef.current.value = null),
        setString(
          "Please watch this example for proper decimal number input: 0.123 or -0.123"
        ),
        setMesssage(`Cannot convert ${number}!`)
      );
    }

    if (number === "" || number > 999999999999 || number < -999999999999) {
      resultDiv.style.background = "red";
      return (
        (numberRef.current.value = null),
        setString(
          "Please type a number from minus one trillion to one trillion with maximum of five fractional characters!"
        ),
        setMesssage(`Cannot convert ${number}!`)
      );
    }

    if (fractionalsLength > 5) {
      resultDiv.style.background = "red";
      return (
        (numberRef.current.value = null),
        setString("Please use maximum of five fractional characters!"),
        setMesssage(`Cannot convert ${number}!`)
      );
    }

    if (number.includes(".")) {
      for (let index = number.length; index > number.indexOf("."); index--) {
        if (number[index] === "0" && number[number.length - 1] === "0")
          number = number.slice(0, index);
      }
      if (number[number.length - 1] === ".")
        number = number.slice(0, number.length - 1);
    }

    setString((newString) => {
      resultDiv.style.background = "green";
      return (newString = convertToString(number));
    });
    setMesssage(`${number} as a string is:`);

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
                placeholder="Enter your number here and press `Enter` or `Convert Number`"
                onKeyDown={handleKeyDown}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-3">
          <Col>
            <Badge bg="info">Info</Badge>{" "}
            <Form.Text id="hint">
              Only works on numbers from minus one trillion to one trillion with
              maximum of five fractional characters.
            </Form.Text>
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
          <Col>
            <div id="popIfClicked"> {message} </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <div id="convertedToString"> {number} </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default App;
