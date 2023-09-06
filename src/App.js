import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [cashier, setCountCashier] = useState(0);

  const totalMotor = 200;
  const [masuk, parkirMasuk] = useState(totalMotor);
  const [biaya, totalBayar] = useState(0);

  return (
    <Container>
      <Row className="justify-content-md-center">
        {["primary"].map((variant) => (
          <Alert key={variant} variant={variant}>
            Hook Pertama Soal No 2 - Teller
          </Alert>
        ))}
        <Col xs lg="2">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://d2pas86kykpvmq.cloudfront.net/images/humans-3.0/ava-1.png"
            />
            <Card.Body>
              <Card.Title className="">Kasir Yudi | Teller 1</Card.Title>
              <Card.Text>Antrian ke : {count}</Card.Text>
              <Button variant="primary" onClick={() => setCount(count + 1)}>
                Pelanggan Masuk
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md="auto"> TELLER </Col>
        <Col xs lg="2">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://d2pas86kykpvmq.cloudfront.net/images/humans-3.0/ava-3.png"
            />
            <Card.Body>
              <Card.Title className="">Kasir Ranti | Teller 1</Card.Title>
              <Card.Text>Antrian ke : {cashier}</Card.Text>
              <Button
                variant="primary"
                onClick={() => setCountCashier(cashier + 1)}
              >
                Pelanggan Masuk
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        {["primary"].map((variant) => (
          <Alert key={variant} variant={variant}>
            Hook Pertama Soal No 2 - Parkir Motor
          </Alert>
        ))}
        <Col xs lg="2">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://asset.kompas.com/crops/i7ZJZsw_OpoG7Zd-QFP5IRvwIcw=/0x0:675x450/1200x800/data/photo/2019/11/28/5ddebb961c980.jpg"
            />
            <Card.Body>
              <Card.Title className="">Pintu Masuk</Card.Title>
              <Card.Text>Total Parkiran Tersedia : {masuk}</Card.Text>
              <Button variant="primary" onClick={() => parkirMasuk(masuk - 1)}>
                Motor Masuk
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md="auto"> PAKIR </Col>
        <Col xs lg="2">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://asset.kompas.com/crops/7CFlfiOuTaw5yQmH2jEnTLzWyB4=/0x0:675x450/1200x800/data/photo/2019/11/28/5ddebf604f4be.jpg"
            />
            <Card.Body>
              <Card.Title className="">Pakir Keluar</Card.Title>
              <Card.Text>Motor Keluar - keuntungan {biaya} </Card.Text>
              <Button variant="primary" onClick={() => parkirMasuk(masuk + 1)}>
                Motor Keluar
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
