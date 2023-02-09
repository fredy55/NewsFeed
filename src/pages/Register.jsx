import { Component } from "react";
import ContentStyle from "../assets/css/partials.module.css";
import RegisterForm from "../components/forms/RegisterForm";
import { Container, Row, Col } from 'react-bootstrap';

export default class Register extends Component {
    state = {
        fname: '',
        lname: '',
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
                        <h4 className="mb-4">Registration Form</h4>
                        <RegisterForm 
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

