import React from "react";
import { Card, Button, Form, Container, Row, Col } from "react-bootstrap";
import "../components/becomeapartner.css";
import Sbi from "../assets/sbi.png";
import Hdfchl from "../assets/hdfc-hl.png";
import Icici from "../assets/icici.png";
import Indiabulls from "../assets/indiabulls.png";
import Dhfl from "../assets/dhfl.png";
import Pnbhous from "../assets/pnb-hous.png";
import Kotak from "../assets/kotak.png";
import Axis from "../assets/axis.png";
import Hsbc from "../assets/hsbc.png";
import Lic from "../assets/lic-hous.png";

function becomeapartner() {
  return (
    <div>
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-6">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email*</Form.Label>
                <Form.Control type="email" placeholder="Your email" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name*</Form.Label>
                <Form.Control type="name" placeholder="Your name" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmailaddress">
                <Form.Label>Email Address*</Form.Label>
                <Form.Control
                  type="emailaddress"
                  placeholder="Your Email Address"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicmobilenumber">
                <Form.Label>Mobile Number*</Form.Label>
                <Form.Control
                  type="mobilenumber"
                  placeholder="Your Mobile Number"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formGridState">
                <Form.Label>Profession*</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>choose</option>
                  <option>Wealth advisor</option>
                  <option>salaried</option>
                  <option>Businessman</option>
                  <option>docter</option>
                  <option>chartered Accountant</option>
                  <option>insurance agent</option>
                  <option>Real estate agent</option>
                  <option>others</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicmobilenumber">
                <Form.Label>Business Name*</Form.Label>
                <Form.Control
                  type="mobilenumber"
                  placeholder="Your Mobile Number"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicmobilenumber">
                <Form.Label>City*</Form.Label>
                <Form.Control
                  type="mobilenumber"
                  placeholder="Your Mobile Number"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicmobilenumber">
                <Form.Label>
                  Have you worked with DSA/Banks or NBFC's before? *
                </Form.Label>
                <Form.Check
                  type="radio"
                  aria-label="radio 1"
                  name="dsa"
                  label="Yes"
                />
                <Form.Check
                  type="radio"
                  aria-label="radio 1"
                  name="dsa"
                  label="No"
                />
                <Form.Check
                  type="radio"
                  aria-label="radio 1"
                  name="dsa"
                  label="Maybe"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          <div class="col-lg-6">
            <Card border="info">
              <Card.Header as="h5">ABOUT ANDROMEDALOANS.COM</Card.Header>
              <Card.Body>
                <Card.Text>
                  Andromeda stands as an epitome for dedication, expertise and
                  the drive to provide our customers the service for which they
                  chose us over the rest. A company that has been enabling many
                  in fulfilling their dreams, Andromeda is an organization where
                  the difficult is made easy. Providing the best loans by
                  tailoring them to our customer’s needs, Andromeda has risen to
                  being the most preferred loan consultancy in the country.
                  Started as a Direct Sales Associate for Citibank in 1991,
                  under the leadership of Mr. V. Swaminathan, who built a team
                  of 25 seasoned managers with more than 20 years of total
                  experience, Andromeda has seen rapid growth in the 20 years of
                  its operations. This was possible, not only by the values and
                  qualities exhibited by Andromeda as an organization, but also
                  by the power and influence of a strong sponsor. Today, it is
                  the biggest financial distributor in India having partnered
                  with some of the biggest financial institutions in India.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
            <Card border="info">
              <Card.Header as="h5">ANDROMEDALOANS.COM ADVANTAGE:</Card.Header>
              <Card.Body>
                <Card.Text>
                  We are looking for salaried and business professionals like
                  Real Estate Agents, Chartered Accountants, Insurance Agents,
                  etc. who have prospects having financial requirements. Reach –
                  68+ cities in India. Network – 70+ Banks and NBFC’s.
                  Fulfillment – 16000 crores of loan disbursed. Core Products –
                  Secured and Unsecured Loans. Our USP – India’s Largest Loan
                  Distribution Company. Payout – Best in the Market. Please
                  contact us to know more about the payment terms & condition.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
            <Card border="info">
              <Card.Header as="h5">BANKS IN OUR NETWORK</Card.Header>
              <Card.Body>
                <Container>
                  <Row>
                    <Col xs={6} md={3}>
                      <img src={Sbi} alt="sbi" class="img" />
                    </Col>
                    <Col xs={6} md={3}>
                      <img src={Hdfchl} alt="hdfc-hl" class="img" />
                    </Col>
                    <Col xs={6} md={3}>
                      <img src={Icici} alt="Icici" class="img" />
                    </Col>
                    <Col xs={6} md={3}>
                      <img src={Indiabulls} alt="Indiabulls" class="img" />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} lg={3}>
                      <img src={Dhfl} alt="Dhfl" class="img" />
                    </Col>
                    <Col xs={6} lg={3}>
                      <img src={Pnbhous} alt="Pnbhous" class="img" />
                    </Col>
                    <Col xs={6} lg={3}>
                      <img src={Kotak} alt="Kotak" class="img" />
                    </Col>
                    <Col xs={6} lg={3}>
                      <img src={Axis} alt="Axis" class="img" />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} lg={3}>
                      <img src={Hsbc} alt="Hsbc" class="img" />
                    </Col>
                    <Col xs={6} lg={3}>
                      <img src={Lic} alt="Lic" class="img" />
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default becomeapartner;
