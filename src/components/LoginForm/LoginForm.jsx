import React, {useContext, useState} from 'react';
import "./LoginForm.css"
import {AuthContext} from "../../AuthContextProvider";
import { useHistory } from "react-router-dom";


const LoginForm = () => {
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');
    const {auth} = useContext(AuthContext);
    let history = useHistory();


    const clickHandler = (e) => {
        e.preventDefault()

        if (login.toString() === process.env.REACT_APP_USER_LOGIN && password.toString() === process.env.REACT_APP_USER_PASSWORD) {
            auth()
            history.push("/home")
        }
    }

    const loginChangeHandler = (e) => {
        setLogin(e.target.value)
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value)
    }


    return (
        <div className="login-form">
            <h1>Hello there</h1>
            <form>
                <input type="text" id="login" onChange={loginChangeHandler}/>
                <label htmlFor="login" />
                <input type="password" id="password" onChange={passwordChangeHandler}/>
                <label htmlFor="password"/>
                <div>
                    <button onClick={clickHandler}>Sign in</button>
                    <a href="https://google.com/" target="_blank" rel="noreferrer">Need help?</a>
                </div>
            </form>
        </div>
    );
};


export default LoginForm;
