import { Form, Button } from 'react-bootstrap';


const RegisterForm = (props) => {
    return (
        <Form onSubmit={() => { return false; }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Last Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Email</Form.Label>
                <Form.Control type="email" placeholder="Enter valide email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="mb-1">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default RegisterForm;