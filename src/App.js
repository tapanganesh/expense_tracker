import logo from "./logo.svg";
import "./App.css";
import {
  Navbar,
  Container,
  Offcanvas,
  Button,
  Nav,
  Form,
  FormControl,
  NavDropdown,
} from "react-bootstrap";
import Overview from "./components/Overview";
import Expenses from "./components/Expenses";
import { Route, Routes, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoiceDollar,faDonate,faDollarSign,faHome} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand={false} sticky="top">
        <Container fluid>
          <Navbar.Brand href="/" className="title">
            <FontAwesomeIcon icon={faDonate} className="me-2 text-success" />
            Expense Tracker
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            keyboard="true"
            scroll="true"
          >
            <Offcanvas.Header
              closeButton
              closeVariant="white"
              className="SideBar text-light offtitle"
            >
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <FontAwesomeIcon
                  icon={faDonate}
                  className="me-2 text-success"
                />
                Expense Tracker
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="SideBar">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav>
                  <Link to="/" className="text-decoration-none text-light ">
                    <FontAwesomeIcon icon={faHome} className="me-2" />
                    Home
                  </Link>
                </Nav>
                <Nav>
                  <Link
                    to="/expenses"
                    className="text-decoration-none text-light "
                  >
                    Link
                  </Link>
                </Nav>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/expenses" element={<Expenses />} />
      </Routes>
    </div>
  );
}

export default App;
