import { Component } from "react";
import ContentStyle from "../assets/css/partials.module.css";
import RegisterForm from "../components/forms/RegisterForm";
import { Container, Row, Col } from 'react-bootstrap';

export default class Register extends Component {


    render() {
        return (
            <Container className={ContentStyle.loginfrm}>
                <Row>
                    <Col md={12} xs={12}>
                        <h4 className="mb-4">Registration Form</h4>
                        <RegisterForm />
                    </Col>
                </Row>
            </Container>
        );
    }
}

