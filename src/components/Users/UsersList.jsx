import React, {useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import User from "./User";
import "./UsersList.css"
import {fetchRequest} from "../../services/api/fetch";


const UsersList = () => {
    const[users, setUsers] = useState([])

    useEffect(() => {
        fetchRequest({
            url: '/users',
            method: 'GET',
            body: null
        })
            .then(r => r.json())
            .then(result => setUsers(result))
    }, []);


    return (
        <div className="users-wrapper">
            {users.length > 0 ? <div className="users-wrapper-columns">
                <p>#</p>
                <p>Name</p>
                <p>City</p>
                <p>Company</p>
            </div>
            : <h2>Loading ...</h2>
            }
            {users.map(item => <User key={uuidv4()} user={item}/>)}
        </div>
    );
}

export default UsersList;


