import React from 'react';
import LoginForm from "../components/LoginForm/LoginForm.jsx";
import withHeader from "../HOC/withHeader";


const LoginPage = () => {
    return (
        <div className="page">
            <LoginForm />
        </div>
    );
};


export default (withHeader(LoginPage));
