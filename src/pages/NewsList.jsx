import { Component } from "react";
import ContentStyle from "../assets/css/partials.module.css";
import { Container, Row} from 'react-bootstrap';
import News from "../components/news/News";
import NewsLoader from "../components/news/NewsLoader";
import axios from "axios";
import { TheGuardianUrl, TheGuardianKey } from "../utils/ReqConsts"

export default class NewsList extends Component {
    state = {
        posts: null,
        param: {
            'api-key': TheGuardianKey,
            page: 1,
            search: '',
        }
        
    }
 
    componentDidMount(){
        axios.get(TheGuardianUrl, { params: this.state.param })
        .then((response) => {
            console.log(response.data.response);
            this.setState({ posts: response.data.response });
        } )
        .catch((error) => console.log(error) );
    }

    render() {
        let postDisplay = <>
            <NewsLoader />
            <NewsLoader />
            <NewsLoader />
        </>;

        if(this.state.posts){
            postDisplay = this.state.posts.results.map((post, index)=>{
                return <News 
                title={post.webTitle} 
                body={''} 
                key={index} 
                link={post.webUrl} />;
            });
        }
        

        return (
            <Container className={ContentStyle.newslist}>
                <h3>NY Times</h3>
                <Row>
                   { postDisplay } 
                </Row>
            </Container>
        );
    }
}