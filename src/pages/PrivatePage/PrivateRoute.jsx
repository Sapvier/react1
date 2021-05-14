import React from 'react';
import {Redirect, Route} from "react-router-dom"
import {getIsAuth} from "../utils/logger/logger";


function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                getIsAuth() ? (children)
                       : (<Redirect to={{
                            pathname: "/",
                            state: { from: location }
                        }}/>)
            }
        />
    );
}

export default PrivateRoute;


