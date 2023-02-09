const isLogin = localStorage.getItem('account') !== null;
const LoginData = isLogin 
          ? JSON.parse(localStorage.getItem('account')).data 
          : null;

export default LoginData;