import React from 'react';
import "./User.css"
import {useHistory} from "react-router-dom";


const User = ({user}) => {
    let history = useHistory();

    const clickHandler = () => {
        history.push(`/users/${user.id}`)
    }

    return (
        <div className="user-block" onClick={clickHandler}>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.address.city}</p>
            <p>{user.company.name}</p>
        </div>
    );
};


export default User;
