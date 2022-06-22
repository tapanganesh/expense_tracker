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
import Income from "./components/Income";
import Signup from "./components/SignUpPage";
import Footer from "./components/Footer";
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
import Header from './components/NavBar'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="bg-dark text-white position-fixed bottom-0 w-100">
        <Footer/>
      </div>
    </div>
  );
}
export default App;
