import HeadStyle from "../../assets/css/partials.module.css";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

export const NavUser = (props) => {

    return (
        <Nav className="">
            <Link href="/" className={HeadStyle.link}>Hi John</Link>
        </Nav>
    );
}


export const NavOuter = (props) => {

    return (
        <Nav className="">
           <Link to="/register" className={HeadStyle.link}>Register</Link>
           <Link to="/login" className={HeadStyle.link}>Login</Link>
        </Nav>
    );
}
