import logo from "../../assets/img/logo.jpg";

const Logo = () => {
    return (
        <img  
            src={logo} 
            alt="App Logo" 
            width="50px"
            height="40px"
            className="d-inline-block align-top" 
        />
    );
}

export default Logo;