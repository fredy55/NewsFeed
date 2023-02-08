import { Col, Card } from 'react-bootstrap';


const News = (props) => {
    return (
        <Col md={3} xs={12}>
            <Card style={{ margin: '3px 3px' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                </Card.Body>
            </Card>
        </Col>             
    );
}

export default News;