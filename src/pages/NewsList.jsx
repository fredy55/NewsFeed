import { Component } from "react";
import ContentStyle from "../assets/css/partials.module.css";
import { Container, Row } from 'react-bootstrap';
import News from "../components/news/News";
import axios from "axios";
import { HttpExReq } from "../utils/HttpReq";

export default class NewsList extends Component {
    state = {
        posts: null,
        baseUrl: 'https://content.guardianapis.com/search',
        param: {
            'api-key': 'test',
            page: 1,
            search: '',
        }
        
    }

    
    componentDidMount(){
        let response = HttpExReq.getReq(this.state.baseUrl, this.state.param);
        this.setState({ posts: response.data.response});
        
    }

    render() {
        let postDisplay = <Col lg={3} md={3} sm={6} xs={12}>
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
    </Col>;
        if(this.state.posts){
            postDisplay = this.state.posts.results.map((post)=>{
                return <News 
                title={post.webTitle} 
                body={''} 
                link={post.webUrl} />;
            });
        }
        

        return (
            <Container className={ContentStyle.newslist}>
                <Row>
                   { postDisplay } 
                    
                </Row>
            </Container>
        );
    }
}