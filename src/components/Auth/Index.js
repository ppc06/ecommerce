import React, {useState} from 'react';
import {Link} from "@material-ui/core";
import {fetchCart, fetchProducts} from "../../store/actions";
import {useDispatch} from "react-redux";
import firebase from 'firebase'

const Auth = ({history}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [userEmailReg, setUserEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const dispatch = useDispatch();

    const onClick = (link) => history.replace(link);
    const onTabClick = (tab) => {
        let LoginForm = document.getElementById("LoginForm");
        let SignUpForm = document.getElementById("SignUpForm");
        let Indicator = document.getElementById("Indicator");

        switch (tab){
            case 'login':
                SignUpForm.style.transform = "translateX(300px)";
                LoginForm.style.transform = "translateX(300px)";
                Indicator.style.transform = "translateX(0px)";
                break;
            case 'register':
                SignUpForm.style.transform = "translateX(0px)";
                LoginForm.style.transform = "translateX(0px)";
                Indicator.style.transform = "translateX(100px)";
                break;
        }
    }


    const login = () => {
        // Axios.post("http://localhost:3001/login", {
        //     username: username,
        //     password: password,
        // }).then((response) => {
        //     if(!response.data.auth) {
        //     } else {
        //         localStorage.setItem("token", response.data.token);
        //         setTimeout(
        //             () => {dispatch(fetchProducts());
        //                 dispatch(fetchCart());}, 1000);
        //         history.replace('/products');
        //     }
        // });
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(res => {
                dispatch(fetchProducts());
                dispatch(fetchCart());
                localStorage.setItem("authUser", JSON.stringify(firebase.auth().currentUser));
                history.replace('/products');
            });
    };

    const register = (e) => {
        // Axios.post("http://localhost:3001/register", {
        //     email: userEmailReg,
        //     password: passwordReg,
        // }).then((response) => {
        //     console.log(response);
        //     onTabClick('login');
        // });
        firebase.auth()
            .createUserWithEmailAndPassword(userEmailReg, passwordReg)
            .then( user => {
                let cur_user = firebase.auth().currentUser;
                console.log('user', cur_user);
                onTabClick('login');
            })
    };

    return (
        <div>
            <p className="title">ACCOUNT</p>
            
            <div className="account">
                <div className="form-container">
                    <div className="form-btn">
                        <Link onClick={() => onTabClick('login')}><span>LOG IN</span></Link>
                        <Link onClick={() => onTabClick('register')}><span>SIGN UP</span></Link>
                        <hr id="Indicator"/>
                    </div>
        
                    <div id="LoginForm">
                        <input
                            type="email"
                            placeholder="Email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        <button className="btn short" onClick={login}>LOG IN</button>
                        <Link onClick={() => onClick('/')}><span>Forgot password?</span></Link>
                    </div>
        
                    <div id="SignUpForm">
                        {/*<input*/}
                        {/*    type="text"*/}
                        {/*    placeholder="Name"*/}
                        {/*    onChange={(e) => {*/}
                        {/*        setUsernameReg(e.target.value);*/}
                        {/*    }}*/}
                        {/*/>*/}
                        <input
                            type="email"
                            placeholder="Email"
                            onChange={(e) => {
                                setUserEmailReg(e.target.value);
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Password"
                            onChange={(e) => {
                                setPasswordReg(e.target.value);
                            }}
                        />
                        <button type="submit" className="btn short" onClick={register}>SIGN UP</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;