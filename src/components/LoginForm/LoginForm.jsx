import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {setIsAuth} from "../../services/logger/logger";
import {loginChangeHandler, passwordChangeHandler} from "./index";
import {Login} from "./styled";
import {Button} from "../../common/Button";


const LoginForm = () => {
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');
    let history = useHistory();

    useEffect(() => {
        setIsAuth()
    }, []);

    const clickHandler = (e) => {
        e.preventDefault()

        if (login.toString() === process.env.REACT_APP_USER_LOGIN && password.toString() === process.env.REACT_APP_USER_PASSWORD) {
            setIsAuth(true)
            history.push("/home")
        }
        else e.target.parentElement.previousElementSibling.innerHTML = 'Wrong credentials'

    }

    return (
        <Login>
            <h1>Hello there</h1>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={(e) => setLogin(loginChangeHandler(e))}/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={(e) => setPassword(passwordChangeHandler(e))}/>
                <span />
                <div>
                    <Button onClick={clickHandler} align={`flex-start`}>Sign in</Button>
                    <a href="https://google.com/" target="_blank" rel="noreferrer">Need help?</a>
                </div>
            </form>
        </Login>
    );
};


export default LoginForm;
