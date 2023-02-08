import HeadStyle from "../assets/css/partials.module.css";
import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from "../components/navigationbar/Logo";
import { NavOuter, NavUser } from "../components/navigationbar/NavRight";
import { Link } from "react-router-dom";

const Header = (props) => {
    const nav = false ? <NavUser /> : <NavOuter />;
    return (
      <Navbar className={HeadStyle.head} bg="primary" variant="light" sticky="top">
        <Container>
          <Navbar.Brand href="#">
             <Logo />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className={HeadStyle.link}>Home</Link>
          </Nav>
          
           {nav}
        </Container>
      </Navbar>
    );
}

export default Header;