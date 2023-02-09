import { useState } from "react";
import axios from "axios";
import ContentStyle from "../assets/css/partials.module.css";
import LoginForm from "../components/forms/LoginForm";
import { BEBaseUrl } from "../utils/ReqConsts";
import { Container, Row, Col, Alert } from 'react-bootstrap';

const Login = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ response, setResponse ] = useState('');

    let frmData = { email, password }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('[FORM DATA]', frmData);
        
        axios.post(`${BEBaseUrl}/auth/login`, frmData )
        .then((resp) => {
            console.info('[RESPONSE INFO]', resp);
            localStorage.setItem('account', JSON.stringify({data: resp.data.data, headers: resp.headers }))
            window.location.replace('/dashboard');
        } )
        .catch((error) => {
            //console.error('[ERROR]', error.code)
            setResponse('Invalid login request');
        });
        
     };

    const onChangeHandler = (e) => {
        switch(e.target.name){
           case 'email':
              setEmail(e.target.value);
              break;
            case 'password':
              setPassword(e.target.value);
              break;
            default:
        }

        //console.log(frmData);
     };

     let resp = '';
    if(response){
        resp = <Alert variant="primary">
            { response }
        </Alert>;
    }

     return (
        <Container className={ContentStyle.loginfrm}>
            <Row>
                <Col md={12} xs={12}>
                    <h4 className="mb-4">Login Form</h4>
                    { resp }
                    <LoginForm 
                        frmsubmit={onSubmitHandler} 
                        frmchange={onChangeHandler} 
                        curval={frmData}
                    />
                </Col>
            </Row>
            
        </Container>
    );
}

export default Login;