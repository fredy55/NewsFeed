import FootStyle from "../assets/css/partials.module.css"
import { Container, Row, Col } from 'react-bootstrap';


const Footer = (props) => {
    return (
        <Container className={FootStyle.foot}>
            <Row>
                <Col md={12} xs={12}>
                <p>
                    &copy; { new Date().getFullYear()} 
                    &nbsp;Demo News App &nbsp;|&nbsp;
                    All Rights Reserved.
                </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;