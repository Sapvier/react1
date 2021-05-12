import React from 'react';
import "./Header.css";
import {useHistory} from "react-router-dom";
import {isAuth, logger} from "../../services/logger/logger";


const Header = () => {
    let history = useHistory();

    const clickHandler = () => {
        if (isAuth() === ' true') {
            logger(false)
            history.push("/")
        } else history.push("/")
    }

    return (
        <nav>
            {isAuth() === ' true' ? <button onClick={clickHandler}>Sign out</button>
                : <button onClick={clickHandler}>Sign in</button>}
        </nav>
    );
};


export default Header;
