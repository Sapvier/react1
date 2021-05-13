import React, {useEffect, useState} from 'react';
import {fetchRequest} from "../../services/api/fetch";
import {sortArray} from "./index";
import {UserListWrapper} from "./styled";
import User from "./User";


const UsersList = () => {
    const[users, setUsers] = useState([])
    const[sorted, setSorted] = useState({
        id: true,
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
        users.length > 0 ? <UserListWrapper>
                                <div>
                                    <p onClick={() => clickHandler('id')} >#</p>
                                    <p onClick={() => clickHandler('name')} >Name</p>
                                    <p onClick={() => clickHandler('city')}>City</p>
                                    <p onClick={() => clickHandler('company')}>Company</p>
                                </div>
                                {users.map(item => <User key={item.id} user={item}/>)}
                           </UserListWrapper>
                        : <h2>Loading ...</h2>
    );
};

export default UsersList;


