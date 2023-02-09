import { Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsList from "../pages/NewsList";
import Dashboard from "../pages/Dashboard";

const Router = (props) => {
    const loginPath = props.login? <Dashboard /> : <Login /> ;
    const registerPath = props.login? <Dashboard /> : <Register />;

    return (
      

      <Routes>
         <Route path="/" element={<NewsList />} />
         <Route path="/dashboard" element={loginPath} />
         <Route path="/login" element={loginPath} />
         <Route path="/register" element={registerPath} />
      </Routes>
    );
}

export default Router;