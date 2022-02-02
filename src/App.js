import logo from './logo.svg';
import './App.css';
import {Navbar,Container,Offcanvas,Button,Nav,Form,FormControl,NavDropdown} from 'react-bootstrap'
import Overview from './components/Overview'
import Expenses from './components/Expenses'
import {Route,Routes,Link}  from 'react-router-dom'
function App() {
  
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand={false} fixed="top">
        <Container fluid>
          <Navbar.Brand href="/" className="mx-auto ">EXPENSE TRACKER</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar"  />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav>
                  <Link to="/"> Home</Link>
                </Nav>
                <Nav>
                  <Link to="/expenses">Link</Link>{" "}
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
