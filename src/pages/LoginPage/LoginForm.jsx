import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {setIsAuth} from "../../utils/logger/logger";
import {Login} from "./styled";
import {Button} from "../Button";


const LoginForm = () => {
    const[credentials, setCredentials] = useState({
        username: '',
        password: ''
    })
    const [error, setError] = useState(false)
    let history = useHistory();

    useEffect(() => {
        setIsAuth()
    }, []);

    const clickHandler = (e) => {
        e.preventDefault()

        if (credentials.username.toString() === process.env.REACT_APP_USER_LOGIN && credentials.password.toString() === process.env.REACT_APP_USER_PASSWORD) {
            setIsAuth(true)
            history.push("/home")
        }
        else setError(true)
    }

    const changeHandler = (e) => {
        setError(false)
        setCredentials({...credentials, [e.target.id]: e.target.value})
    }

    return (
        <Login>
            <h1>Hello there</h1>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={(e) => changeHandler(e)}/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={(e) => changeHandler(e)}/>
                <span>{error ? 'Wrong credentials' : ''}</span>
                <div>
                    <Button onClick={clickHandler} align={`flex-start`}>Sign in</Button>
                    <a href="https://google.com/" target="_blank" rel="noreferrer">Need help?</a>
                </div>
            </form>
        </Login>
    );
};


export default LoginForm;
