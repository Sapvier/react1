import React, {useEffect, useState} from 'react';
import {fetchRequest} from "../../utils/api/fetch";
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

    const unsorted = {
        id: false,
        name: false,
        city: false,
        company: false
    }

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
        if(sorted[param]) {
            setUsers(users.reverse())
            setSorted({...unsorted})
        }
        else {
            setUsers(sortArray(param, users))
            setSorted({
                ...unsorted,
                [param]: true
            })
        }
    }

    return (
        users.length > 0 ? <UserListWrapper>
                                <div>
                                    <p onClick={() => clickHandler('id')} ># {sorted.id ? `⇧` : `⇩`}</p>
                                    <p onClick={() => clickHandler('name')} >Name {sorted.name ? `⇧` : `⇩`}</p>
                                    <p onClick={() => clickHandler('city')}>City {sorted.city ? `⇧` : `⇩`}</p>
                                    <p onClick={() => clickHandler('company')}>Company {sorted.company ? `⇧` : `⇩`}</p>
                                </div>
                                {users.map(item => <User key={item.id} user={item}/>)}
                           </UserListWrapper>
                        : <h2>Loading ...</h2>
    );
};

export default UsersList;


