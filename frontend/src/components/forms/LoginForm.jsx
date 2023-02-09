import { Form, Button } from 'react-bootstrap';


const LoginForm = (props) => {
    return (
        <Form onSubmit={props.frmsubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="email" 
                    name='email' 
                    value={props.curval.email} 
                    onChange={props.frmchange}
                    placeholder="Enter valid email" 
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    name='password'
                    value={props.curval.password} 
                    onChange={props.frmchange}
                    placeholder="Password" 
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default LoginForm;