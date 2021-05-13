import React from 'react';
import {useHistory} from "react-router-dom";
import {StyledUser} from "./styled";


const User = ({user}) => {
    let history = useHistory();

    const clickHandler = () => {
        history.push(`/users/${user.id}`)
    }

    return (
        <StyledUser onClick={clickHandler}>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.address.city}</p>
            <p>{user.company.name}</p>
        </StyledUser>
    );
}


export default User;
