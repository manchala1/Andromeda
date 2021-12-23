import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./navigation.css";
import andromeda from "../assets/andromeda.png";

const Navigation = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/home">
            <img src={andromeda} alt="andromeda" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="UNSECURED LOAN" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/personalloan">
                  PERSONAL LOAN
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  BUSINESS LOAN
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="SECURED LOAN" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/homeloan">HOME LOAN</NavDropdown.Item>
                <NavDropdown.Item href="/loanagainstproperty">
                  LOAN AGAINST PROPERTY
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/becomeapartner">BECOME A PARTNER</Nav.Link>
              <NavDropdown title="BLOG" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/projects">
                  HOW TO BECOME A LOAN AGENT
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button className="btn btn-info text-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navigation;
