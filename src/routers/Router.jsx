import { Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsList from "../pages/NewsList";

const Router = () => {
    return (
      <Routes>
         <Route path="/" element={<NewsList />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
      </Routes>
    );
}

export default Router;