import React, {useState} from "react";
import { Link } from '@material-ui/core';

import Axios from "axios";

const Login = ({ navigation, history }) => {
    
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    
    const register = () => {
        Axios.post("http://localhost:3001/register", {
            username: usernameReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response);
            history.replace('/login');
        });
    };

    return (
        <div className="registration">
            <h1>Registration</h1>
            <label>Username</label>
            <input 
                type="text" 
                onChange={(e) => {
                    setUsernameReg(e.target.value);
                }}
            />
            <label>Password</label>
            <input 
                type="text" 
                onChange={(e) => {
                    setPasswordReg(e.target.value);
                }}
            />
            <button onClick={register}> Register </button>
            <div><Link onClick={() => history.replace('/login') }>Already has Account</Link></div>
        </div>
    )
};

export default Login;
