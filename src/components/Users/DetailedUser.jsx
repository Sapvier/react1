import React, {useEffect, useState} from 'react';
import {fetchRequest} from "../../services/api/fetch";
import {getIsAuth} from "../../services/logger/logger";
import {cityChangeHandler, companyChangeHandler, emailChangeHandler, nameChangeHandler} from "./index";
import {DetailedStyledUser} from "./styled";


const DetailedUser = () => {
    const [user, setUser] = useState({})
    const isDisabled = getIsAuth() == 'true'

    useEffect(() => {
        fetchRequest({
            url: window.location.pathname,
            method: 'GET',
            body: null
        })
            .then(r => r.json())
            .then(result => setUser(result))
    }, []);


    const submitHandler = (e) => {
        e.preventDefault()

        fetchRequest({
            url: window.location.pathname.slice(0, 6),
            method: "POST",
            body: JSON.stringify(user)
        })
            .then(r => null)
    }


    return (
        Object.keys(user).length !== 0 ?
                <DetailedStyledUser>
                    { getIsAuth()  ? <h1>User #{user?.id}</h1>
                                : <h1 className="disabled">User #{user?.id}</h1>}
                    <form action="" onSubmit={submitHandler}>
                        <label htmlFor="user-name">Name</label>
                        <input type="text"
                               id="user-name"
                               defaultValue={user?.name}
                               onChange={(e) => setUser(nameChangeHandler(e, user))}
                               disabled={!isDisabled}
                               placeholder="Name"/>
                        <label htmlFor="user-email">Email</label>
                        <input type="email"
                               id="user-email"
                               defaultValue={user?.email}
                               onChange={(e) => setUser(emailChangeHandler(e, user))}
                               disabled={!isDisabled}
                               placeholder="Email"/>
                        <label htmlFor="user-city">City</label>
                        <input type="text"
                               id="user-city"
                               defaultValue={user?.address?.city}
                               onChange={(e) => setUser(cityChangeHandler(e, user))}
                               disabled={!isDisabled}
                               placeholder="City"/>
                        <label htmlFor="user-company">Company</label>
                        <input type="text"
                               id="user-company"
                               defaultValue={user?.company?.name}
                               onChange={(e) => setUser(companyChangeHandler(e, user))}
                               disabled={!isDisabled}
                               placeholder="Company"/>
                        <button type="submit" disabled={!isDisabled}>Save</button>
                    </form>
                </DetailedStyledUser>
                : <h2>Loading...</h2>
    );
};


export default DetailedUser;
