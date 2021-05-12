import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import UserPage from "./pages/UserPage.jsx";
import AuthContextProvider from "./AuthContextProvider";
import PrivateRoute from "./common/PrivateRoute";


const App = () => {

    return (
        <AuthContextProvider>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={LoginPage} exact/>
                        <PrivateRoute path="/home">
                            <HomePage/>
                        </PrivateRoute>
                        <Route path="/:id" component={UserPage}/>
                    </Switch>
                </div>
            </ BrowserRouter>
        </AuthContextProvider>
    );
};


export default App;
