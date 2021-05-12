import React, {useEffect, useState} from 'react';
import {fetchRequest} from "../../services/api/fetch";
import "./DetailedUser.css"


const DetailedUser = () => {
    const [user, setUser] = useState({})

    useEffect(() => {
        fetchRequest(process.env.REACT_APP_API_URL + window.location.pathname)
            .then(r => r.json())
            .then(result => setUser(result))

    }, []);

    return (
        <div className="detailed-user-block">
            <form action="">
                <label htmlFor="user-name">Name</label>
                <input type="text" id="user-name" defaultValue={user?.name}/>
                <label htmlFor="user-email">Email</label>
                <input type="text" id="user-email" defaultValue={user?.email}/>
                <label htmlFor="user-city">City</label>
                <input type="text" id="user-city" defaultValue={user?.address?.city}/>
                <label htmlFor="user-city">Company</label>
                <input type="text" id="user-company" defaultValue={user?.company?.name}/>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};


export default DetailedUser;
