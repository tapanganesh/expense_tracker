import {useEffect} from 'react'
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

import Overview from "./Overview";
import Expenses from "./Expenses";
import Income from "./Income";
import Signup from "./SignUpPage";
import Login from "./Login";
import Home from "./Home";
import {clearLogin} from "../Slices/User"
import { Route, Routes, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileInvoiceDollar,
  faDonate,
  faDollarSign,
  faHome,
  faFileInvoice,
  faPiggyBank,
  faMoneyBillAlt,
  faSlidersH,
} from "@fortawesome/free-solid-svg-icons";
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {
  AiOutlineHome,
  AiOutlineUserAdd,
  AiOutlineLogin,
} from "react-icons/ai";

function NavBar() { 
    let {userObj,isError,isSuccess,isLoading}=useSelector((state) => state.user);
    let dispatch=useDispatch();
    let  navigate=useNavigate();
    let login = localStorage.getItem("login");
    let userLogout=()=>{
      localStorage.clear();
      dispatch(clearLogin());
      navigate("/login");
    }
    useEffect(()=>{
      if(login=="false"){
         navigate("/login");
      }
     
    },[login])
    
  return (
    <div>
      {/* {console.log(typeof(login))} */}
      {login === "true" ? (
        <>
          <Navbar bg="dark" variant="dark" expand={false} sticky="top">
            <Container fluid>
              <Navbar.Brand href="/" className="title">
                <FontAwesomeIcon
                  icon={faDonate}
                  className="me-2 text-success"
                />
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
                      <Link
                        to="/home"
                        className="text-decoration-none text-light fs-5 mb-3 "
                      >
                        <FontAwesomeIcon icon={faHome} className="me-2" />
                        Home
                      </Link>
                    </Nav>
                    <Nav>
                      <Link
                        to="/expenses"
                        className="text-decoration-none text-light fs-5 mb-3"
                      >
                        <FontAwesomeIcon
                          icon={faMoneyBillAlt}
                          className="me-2"
                        />
                        Expenses
                      </Link>
                    </Nav>
                    <Nav>
                      <Link
                        to="/incomes"
                        className="text-decoration-none text-light fs-5 mb-3 "
                      >
                        <FontAwesomeIcon icon={faPiggyBank} className="me-2" />
                        Income
                      </Link>
                    </Nav>
                    <button className="btn btn-success w-25 mt-3" onClick={userLogout}>Logout</button>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </>
      ) : (
        <>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand href="/" className="title">
                <FontAwesomeIcon
                  icon={faDonate}
                  className="me-2 text-success"
                />
                Expense Tracker
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto ">
                  <Container>
                    <Link
                      className="text-decoration-none text-light me-3"
                      to="/"
                    >
                      <AiOutlineHome />
                      Home
                    </Link>
                    <Link
                      className="text-decoration-none text-light me-3  "
                      to="/signUp"
                    >
                      <AiOutlineUserAdd />
                      Sign Up
                    </Link>
                    <Link
                      className="text-decoration-none text-light  "
                      to="/login"
                    >
                      <AiOutlineLogin />
                      Login
                    </Link>
                  </Container>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Overview />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/incomes" element={<Income />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default NavBar