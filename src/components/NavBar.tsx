/** @format */
import space from "../images/space-logo.png";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => (
  <Navbar className="nav" expand="lg">
    <Navbar.Brand href="#home">
      <img
        src={space}
        alt="space logo"
        style={{ width: "105px", height: "80px" }}
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link className="nav-link mr-3" to="/">
          Home
        </Link>
        <Link className="nav-link mr-3" to="/articles">
          Articles
        </Link>
        <Link className="nav-link mr-3" to="/details">
          Details
        </Link>
        <Link className="nav-link mr-3" to="*">
          Contact
        </Link>
        <Link className="nav-link mr-3" to="*">
          More Info
        </Link>
      </Nav>
      <div className="mr-3 d-flex">
        <Link className="nav-link" to="*">
          <i className="bi bi-search  text-white icons"></i>{" "}
        </Link>
        <Link className="nav-link" to="*">
          <i className="bi bi-bell-fill text-white icons"></i>
        </Link>
      </div>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
