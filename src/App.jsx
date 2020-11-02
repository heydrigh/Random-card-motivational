import React, { useState, useEffect, useCallback } from "react";

import Globalstyle from "./styles/global";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardFront, CardContainer } from "./styles/styles";
import { Container, Row, Col, Button } from "react-bootstrap";
import phrases from "./assets/phrases";

function App() {
  let [phrase, setPhrase] = useState("");

  function pickPhrase() {
    const random = Math.floor(Math.random() * phrases.length);

    const randomPhrase = (random, phrases[random]);

    setPhrase(randomPhrase);
  }
  const handleClick = useCallback(() => {
    pickPhrase();
  }, []);

  useEffect(() => {
    handleClick();
  }, [handleClick]);

  return (
    <>
      <div className="App">
        <Globalstyle />
        <Container>
          <Row>
            <Col>
              <CardContainer>
                <CardFront>
                  <h2>You are awesome!</h2>
                  <p>{phrase}</p>
                  <Button variant="info" onClick={handleClick}>
                    Click to brighten your day.
                  </Button>
                </CardFront>
              </CardContainer>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
