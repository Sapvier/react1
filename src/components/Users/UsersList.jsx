import React, {useEffect, useState} from 'react';
import User from "./User";
import "./UsersList.css"
import {fetchRequest} from "../../services/api/fetch";
import {sortArray} from "./index";


const UsersList = () => {
    const[users, setUsers] = useState([])
    const[sorted, setSorted] = useState({
        id: false,
        name: false,
        city: false,
        company: false
    })

    useEffect(() => {
        fetchRequest({
            url: '/users',
            method: 'GET',
            body: null
        })
            .then(r => r.json())
            .then(result => setUsers(result))

    }, []);

    const clickHandler = (param) => {
        sorted[param]   ? setUsers(users.reverse())
                        : setUsers(sortArray(param, users))

        setSorted({
            ...sorted,
            [param]: !sorted[param]})
    }


    return (
        <div className="users-wrapper">
            {users.length > 0 ? <div className="users-wrapper-columns">
                <p onClick={() => clickHandler('id')} >#</p>
                <p onClick={() => clickHandler('name')} >Name</p>
                <p onClick={() => clickHandler('city')}>City</p>
                <p onClick={() => clickHandler('company')}>Company</p>
            </div>
            : <h2>Loading ...</h2>
            }
            {users.map(item => <User key={item.id} user={item}/>)}
        </div>
    );
}

export default UsersList;


