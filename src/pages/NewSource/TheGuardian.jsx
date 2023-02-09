import { Component } from "react";
import ContentStyle from "../../assets/css/partials.module.css";
import { Container, Row} from 'react-bootstrap';
import News from "../../components/news/News";
import NewsLoader from "../../components/news/NewsLoader";
import axios from "axios";
import { TheGuardianUrl, TheGuardianKey } from "../../utils/ReqConsts";
import WordLimit from "../../utils/WordLimit";

export default class TheGuardian extends Component {
    state = {
        posts: null
    }
 
    componentDidMount(){
        if(!this.state.posts){
            axios.get(TheGuardianUrl, {
                params: {
                    'api-key': TheGuardianKey,
                    page: 1,
                    search: '',
                } 
            })
            .then((response) => {
                //console.log(response.data.response);
                this.setState({ posts: response.data.response });
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
            postDisplay = this.state.posts.results.slice(0, 4).map((post, index)=>{
                let newTitle = WordLimit(post.webTitle, 20);
                return <News 
                title={newTitle} 
                body={''} 
                key={index} 
                link={post.webUrl} />;
            });
        }
        

        return (
            <Container className={ContentStyle.newslist}>
                <h3 className={ContentStyle.newsheader}>
                    The Guardian News
                </h3>
                <Row>
                   { postDisplay } 
                </Row>
            </Container>
        );
    }
}