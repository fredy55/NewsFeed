import { Component } from "react";
import ContentStyle from "../assets/css/partials.module.css";
import LoginForm from "../components/forms/LoginForm";
import { Container, Row, Col } from 'react-bootstrap';

export default class Login extends Component {


    render() {
        return (
            <Container className={ContentStyle.loginfrm}>
                <Row>
                    <Col md={12} xs={12}>
                        <h4 className="mb-4">Login Form</h4>
                        <LoginForm />
                    </Col>
                </Row>
                
            </Container>
        );
    }
}

