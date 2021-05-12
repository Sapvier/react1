import React from 'react';
import LoginForm from "../components/LoginForm/LoginForm.jsx";
import Header from "../components/Header/Header";


const LoginPage = () => {
    return (
        <div className="page">
            <Header/>
            <LoginForm />
        </div>
    );
};


export default LoginPage;
