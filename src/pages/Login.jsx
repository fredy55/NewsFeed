import { Component } from "react";
import ContentStyle from "../assets/css/partials.module.css";
import LoginForm from "../components/forms/LoginForm";
import { Container, Row, Col } from 'react-bootstrap';

export default class Login extends Component {
     state = {
        email: '',
        password: ''
     };

    onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('[INFO]', this.state);
     };

     onChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
     };

    render() {
        return (
            <Container className={ContentStyle.loginfrm}>
                <Row>
                    <Col md={12} xs={12}>
                        <h4 className="mb-4">Login Form</h4>
                        <LoginForm 
                            frmsubmit={this.onSubmitHandler} 
                            frmchange={this.onChangeHandler} 
                            curval={this.state}
                        />
                    </Col>
                </Row>
                
            </Container>
        );
    }
}

