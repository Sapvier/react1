import React from 'react';
import {Redirect, Route} from "react-router-dom"
import {isAuth} from "../services/logger/logger";


function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuth() ? (children)
                       : (<Redirect to={{
                            pathname: "/",
                            state: { from: location }
                        }}/>)
            }
        />
    );
}

export default PrivateRoute;


