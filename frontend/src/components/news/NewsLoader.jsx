import styles from "../../assets/css/partials.module.css";
import { Col, Card, Placeholder} from 'react-bootstrap';


const NewsLoader = (props) => {
    return (
        <Col lg={4} md={4} sm={6} xs={12}>
        <Card className={styles.newsitem}>
            <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
                <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
        </Card>
    </Col>             
    );
}

export default NewsLoader;