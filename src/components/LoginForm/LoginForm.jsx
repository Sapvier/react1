import React, {useEffect, useState} from 'react';
import "./LoginForm.css";
import {useHistory} from "react-router-dom";
import {logger} from "../../services/logger/logger";
import {loginChangeHandler, passwordChangeHandler} from "./index";


const LoginForm = () => {
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');
    let history = useHistory();

    useEffect(() => {
        logger()
    }, []);

    const clickHandler = (e) => {
        e.preventDefault()

        if (login.toString() === process.env.REACT_APP_USER_LOGIN && password.toString() === process.env.REACT_APP_USER_PASSWORD) {
            logger(true)
            history.push("/home")
        }
        else e.target.parentElement.previousElementSibling.innerHTML = 'Wrong username or password'

    }

    return (
        <div className="login-form">
            <h1>Hello there</h1>
            <form>
                <label htmlFor="login">Username</label>
                <input type="text" id="login" onChange={(e) => setLogin(loginChangeHandler(e))}/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={(e) => setPassword(passwordChangeHandler(e))}/>
                <span />
                <div>
                    <button onClick={clickHandler}>Sign in</button>
                    <a href="https://google.com/" target="_blank" rel="noreferrer">Need help?</a>
                </div>
            </form>
        </div>
    );
};


export default LoginForm;
