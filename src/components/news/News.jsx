import styles from "../../assets/css/partials.module.css";
import { Col, Card } from 'react-bootstrap';


const News = (props) => {
    return (
        <Col lg={3} md={3} sm={6} xs={12}>
            <Card className={styles.newsitem}>
                <Card.Body>
                    <Card.Title className={styles.newstitle}>{ props.title }</Card.Title>
                    <Card.Text>{props.body}</Card.Text>
                    <Card.Link href={props.link} className={styles.newsbtn}>
                        Read More
                    </Card.Link>
                </Card.Body>
            </Card>
        </Col>             
    );
}

export default News;