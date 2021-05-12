import React, {useContext} from 'react';
import {AuthContext} from "../../AuthContextProvider";
import "./Header.css"
import {useHistory} from "react-router-dom";


const Header = () => {
    const {auth, isAuth} = useContext(AuthContext);
    let history = useHistory();

    const clickHandler = () => {
        if (isAuth) {
            auth()
            history.push("/")
        }
        else history.push("/")
    }

    return (
        <nav>
            {isAuth ? <button onClick={clickHandler}>Sign out</button> : <button onClick={clickHandler}>Sign in</button>}
        </nav>
    );
};


export default Header;
