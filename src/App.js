import "./assets/css/App.css"
import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Router from "./routers/Router";

const App = (props) => {
  return (
     <BrowserRouter>
         <Container className="App-Frame">
            <Header />
            <Container className="App-Contents">
              
              <Router />
            </Container>
            <Footer />
         </Container>
     </BrowserRouter>
 )
}

export default App;