import { useState } from "react";
import ContentStyle from "../assets/css/partials.module.css";
import RegisterForm from "../components/forms/RegisterForm";
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { BEBaseUrl } from "../utils/ReqConsts";
import axios from "axios";

const Register = () => {
    const [ fname, setFname ] = useState('');
    const [ lname, setLname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ response, setResponse ] = useState('');

    let frmData = {fname,lname,email,password}

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('[INFO]', frmData);

        axios.post(`${BEBaseUrl}/users`, frmData )
        .then((response) => {
            console.info('[INFO]', response.status);
            setResponse('Registration successful');
        } )
        .catch((error) => {
            console.error('[ERROR]', error.code)
            setResponse('Invalid request');
        });
        
        if(response === 'Registration successful'){
           setTimeout(()=>{
             return window.location.replace('/login');
           }, 5000);
        }
     };

     const onChangeHandler = (e) => {
        //console.log(e.target.name);

        switch(e.target.name){
          case 'fname':
            setFname(e.target.value);
            break;
          case 'lname':
            setLname(e.target.value);
            break;
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
                    <h4 className="mb-4">Registration Form</h4>
                    {resp}
                    <RegisterForm 
                        frmsubmit={onSubmitHandler} 
                        frmchange={onChangeHandler} 
                        curval={frmData}
                    />
                </Col>
            </Row>
        </Container>
    );
   
}

export default Register;

