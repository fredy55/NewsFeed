import { Component } from "react";
import ContentStyle from "../../assets/css/partials.module.css";
import { Container, Row} from 'react-bootstrap';
import News from "../../components/news/News";
import NewsLoader from "../../components/news/NewsLoader";
import axios from "axios";
import { NyTimesUrl, NyTimesKey } from "../../utils/ReqConsts";
import WordLimit from "../../utils/WordLimit";

export default class NyTimes extends Component {
    state = {
        posts: null
    }
 
    componentDidMount(){
        if(!this.state.posts){
            axios.get(NyTimesUrl, {
                params: {
                    'api-key': NyTimesKey,
                    page: 1,
                    q: 'The New York Times',
                    sort: 'newest',
                    begin_date: '20230122',
                    end_date: '20230122',
                } 
            })
            .then((response) => {
                //console.log(response.data.response.docs);
                this.setState({ posts: response.data.response.docs });
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
                let newTitle = WordLimit(post.abstract, 20);
                return <News 
                title={newTitle} 
                body={''} 
                key={index} 
                link={post.web_url} />;
            });
        }
        

        return (
            <Container className={ContentStyle.newslist}>
                <h3 className={ContentStyle.newsheader}>
                    New York Times News
                </h3>
                <Row>
                   { postDisplay } 
                </Row>
            </Container>
        );
    }
}