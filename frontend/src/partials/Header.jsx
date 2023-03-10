import HeadStyle from "../assets/css/partials.module.css";
import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from "../components/navigationbar/Logo";
import { NavOuter, NavUser } from "../components/navigationbar/NavRight";
import { Link } from "react-router-dom";
import axios from "axios";
import { BEBaseUrl } from "../utils/ReqConsts";
import LoginData from "../utils/LoginData";

const Header = (props) => {

  const account = LoginData;
  //console.log(account);
  
  const onLogout = () =>{
    
    let axiosInstance = axios.create({ 
      headers: { 
        Authorization: `Bearer ${account.token}`
      }
    });

    axiosInstance.post(`${BEBaseUrl}/auth/logout`)
        .then((resp) => {
            //console.info('[RESPONSE INFO]', resp);
            localStorage.clear()
            window.location.replace('/login');
        } )
        .catch((error) => {
            console.error('[ERROR]', error.code)
        });
  }

  const nav = account ? <NavUser name={account.user.ftname} logout={onLogout} /> : <NavOuter />;
  
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