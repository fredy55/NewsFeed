import { Form, Button } from 'react-bootstrap';


const RegisterForm = (props) => {
    return (
        <Form onSubmit={props.frmsubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">First Name</Form.Label>
                <Form.Control 
                 type="text" 
                 name='fname'
                 value={props.curval.fname} 
                 onChange={props.frmchange}
                 placeholder="First Name" 
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Last Name</Form.Label>
                <Form.Control 
                    type="text" 
                    name='lname'
                    value={props.curval.lname} 
                    onChange={props.frmchange}
                    placeholder="Last Name" 
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Email</Form.Label>
                <Form.Control
                    type="email" 
                    name='email' 
                    value={props.curval.email} 
                    onChange={props.frmchange}
                    placeholder="Enter valid email" 
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="mb-1">Password</Form.Label>
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

export default RegisterForm;