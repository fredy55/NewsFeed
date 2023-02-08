import { Component } from "react";
import ContentStyle from "../assets/css/partials.module.css";
import { Container, Row } from 'react-bootstrap';
import News from "../components/news/News";

export default class NewsList extends Component {

    render() {
        return (
            <Container className={ContentStyle.newslist}>
                <Row>
                    <News />
                    <News />
                    <News />
                    <News />
                    <News />
                    <News />
                    <News />
                    <News />
                    <News />
                </Row>
            </Container>
        );
    }
}