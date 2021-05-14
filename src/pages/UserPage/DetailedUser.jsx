import React, {useEffect, useState} from 'react';
import {fetchRequest} from "../../utils/api/fetch";
import {getIsAuth} from "../../utils/logger/logger";
import {cityChangeHandler, companyChangeHandler, emailChangeHandler, nameChangeHandler} from "./index";
import {DetailedStyledUser} from "./styled";
import {Button} from "../Button";
import {useHistory} from "react-router-dom";


const DetailedUser = () => {
    const [user, setUser] = useState({})
    const isDisabled = getIsAuth() == 'true'
    const history = useHistory()

    useEffect(() => {
        fetchRequest({
            url: history.location.pathname,
            method: 'GET',
            body: null
        })
            .then(r => r.json())
            .then(result => setUser(result))
    }, []);


    const submitHandler = (e) => {
        e.preventDefault()

        fetchRequest({
            url: "/users",
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
                        <Button type="submit" disabled={!isDisabled ? true
                                                                    : user.name.length === 0
                                                                    ? true
                                                                    : user.email.length === 0
                                                                    ? true
                                                                    : user.address.city.length === 0
                                                                    ? true
                                                                    : user.company.name.length === 0
                        } >Save</Button>
                    </form>
                </DetailedStyledUser>
                : <h2>Loading...</h2>
    );
};


export default DetailedUser;
