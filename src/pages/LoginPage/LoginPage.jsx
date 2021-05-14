import React from 'react';
import LoginForm from "../components/LoginForm/LoginForm.jsx";
import withHeader from "../HOC/withHeader";
import {PageContainer} from "./styled";


const LoginPage = () => {
    return (
        <PageContainer>
            <LoginForm />
        </PageContainer>
    );
};


export default (withHeader(LoginPage));
