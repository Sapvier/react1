import React from 'react';
import {useHistory} from "react-router-dom";
import {getIsAuth, setIsAuth} from "../../services/logger/logger";
import {Button} from "../../common/Button";
import {NavBar} from "./styled";


const Header = () => {
    let history = useHistory();

    const clickHandler = () => {
        if (getIsAuth()) {
            setIsAuth(false)
            history.push("/")
        } else history.push("/")
    }

    return (
        <NavBar>
            {getIsAuth() === 'true' ? <Button onClick={clickHandler}>Sign out</Button>
                : <Button onClick={clickHandler}>Sign in</Button>}
        </NavBar>
    );
};


export default Header;
