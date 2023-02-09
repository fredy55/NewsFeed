import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../../assets/css/Contents.css";


const Search = (props) => {
    return (
      <Container>
        <Row>
            <Col sm={1} xs={1} md={5}></Col>
            <Col sm={4} xs={4} md={3}>
               <Form.Select className="filter" aria-label="Default select example">
                    <option value="">--- Select News Source ---</option>
                    <option value="1">The Guadian</option>
                    <option value="2">New York Times</option>
                    <option value="3">News Hub</option>
                </Form.Select>
            </Col>
            <Col sm={7} xs={7} md={4}>
            <Form className="d-flex search">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 search-box"
                    aria-label="Search"
                    />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Col>
        </Row>
      </Container>  
    );
}

export default Search;