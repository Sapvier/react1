import React, {useContext} from 'react';
import {Redirect, Route} from "react-router-dom"
import {AuthContext} from "../AuthContextProvider";

function PrivateRoute({ children, ...rest }) {
    const {isAuth} = useContext(AuthContext)

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuth ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;


