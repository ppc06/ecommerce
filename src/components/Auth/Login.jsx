import React, {useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import Axios from "axios";
import { Link } from '@material-ui/core';
import { fetchCart, fetchProducts } from '../../store/actions';

const Login = ({history}) => {
  const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState(false);

    const login = () => {
        Axios.post("http://localhost:3001/login", {
            username: username,
            password: password,
        }).then((response) => {
            if(!response.data.auth) {
                setLoginStatus(false);
            } else {
                localStorage.setItem("token", response.data.token);
                setLoginStatus(true);
                setTimeout(
                    () => {dispatch(fetchProducts());
                dispatch(fetchCart());}, 1000);
                history.replace('/');
            }
            
        });
    };

    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn === true) {  
                setLoginStatus(response.data.user[0].username);
            }
        });
    }, []);

    return (
        <div className="login">
            <h1>Login</h1>
            <input 
                type="text" 
                placeholder="Username"
                onChange={(e) => {
                    setUsername(e.target.value);
                }}/>
            <input 
                type="password" 
                placeholder="Password"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}/>
            <button onClick={login}> Login </button>
            <div><Link onClick={() => history.replace('/register')}> Go to Signup</Link></div>
        </div>
    )
};

export default Login;
