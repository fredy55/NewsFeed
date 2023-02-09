import HeadStyle from "../../assets/css/partials.module.css";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

export const NavUser = (props) => {

    return (
        <Nav className="">
            <Link style={{marginTop: '8px'}} to="/dashboard" className={HeadStyle.link}>
                <span style={{ paddingRight: '20px'}}>Dashboard</span>|
            </Link>
            <Nav.Link className={HeadStyle.link}>Hi! {props.name}</Nav.Link>
            <Nav.Link onClick={props.logout} className={HeadStyle.link}>
                Logout
            </Nav.Link>
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
