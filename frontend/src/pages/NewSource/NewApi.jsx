import { Component } from "react";
import ContentStyle from "../../assets/css/partials.module.css";
import { Container, Row} from 'react-bootstrap';
import News from "../../components/news/News";
import NewsLoader from "../../components/news/NewsLoader";
import axios from "axios";
import { NewApiUrl, NewApiKey } from "../../utils/ReqConsts";
import WordLimit from "../../utils/WordLimit";

export default class NewApi extends Component {
    state = {
        posts: null
    }
 
    componentDidMount(){
        if(!this.state.posts){
            axios.get(NewApiUrl, {
                params: {
                    apiKey: NewApiKey,
                    country: 'us'
                } 
            })
            .then((response) => {
                //console.log(response.data.articles);
                this.setState({ posts: response.data.articles });
            } )
            .catch((error) => console.log(error) );
        }
    }

    render() {
        let postDisplay = <>
            <NewsLoader />
            <NewsLoader />
            <NewsLoader />
        </>;

        if(this.state.posts){
            postDisplay = this.state.posts.slice(0, 4).map((post, index)=>{
                let newTitle = WordLimit(post.title, 20);
                return <News 
                title={newTitle} 
                body={''} 
                key={index} 
                link={post.url} />;
            });
        }
        

        return (
            <Container className={ContentStyle.newslist}>
                <h3 className={ContentStyle.newsheader}>
                    The News Hub
                </h3>
                <Row>
                   { postDisplay } 
                </Row>
            </Container>
        );
    }
}