import { BEBaseUrl } from "../utils/ReqConsts";
import ContentStyle from "../assets/css/partials.module.css";
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import Search from "../components/dataquery/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import LoginData from "../utils/LoginData";
import NyTimes from "../pages/NewSource/NyTimes"
import NewApi from "../pages/NewSource/NewApi";
import TheGuardian from "../pages/NewSource/TheGuardian";

const Dashboard = (props) => {
     const [ response, setResponse ] = useState(null);
     const [ account, setAccount ] = useState(LoginData);

     useEffect(()=>{
        let axiosInstance = axios.create({ 
            headers: { 
              Authorization: `Bearer ${account.token}`
            }
          });
      
          //axiosInstance.get(`${BEBaseUrl}/users/news-options/${account.user.id}`)
          axiosInstance.get(`${BEBaseUrl}/sources`)
              .then((resp) => {
                  console.info('[RESPONSE INFO]', resp.data.data);
                  setResponse(resp.data.data)
              } )
              .catch((error) => {
                  console.error('[ERROR]', error)
              });
     }, [account.token, account.user.id]);
     
     //console.log(response);
     let options = '';
     let userViews = '';

     if(response){
        options = response.map((resp) => {
            return <Form.Check
                key={resp.id}
                inline
                label={resp.name}
                name={resp.name}
                type="checkbox"
                id="inline-checkbox-1"
            />;
        });

        userViews = response.map((view) => {
            if(view.name === 'News API') return <NewApi key={view.id} />;

            if(view.name === 'The Guardian') return <TheGuardian key={view.id} />;
            
            if(view.name === 'New York Times') return <NyTimes key={view.id} />;
             
            return '';
        });
     }

     
     return (
        <Container className={ContentStyle.dashboard}>
            
            <Card>
                <Card.Header>
                    <h4 className="mb-1">Dashboard</h4>
                </Card.Header>
                <Card.Body>
                    <span style={{marginRight:'12px', fontSize: '18px'}}>
                        User Preference:
                    </span>

                    {options}
                </Card.Body>
            </Card>
            <hr />
            <Search />
            <Row>
                <Col md={12} xs={12}>
                    {userViews}
                </Col>
            </Row>
            
        </Container>
    );
}

export default Dashboard;