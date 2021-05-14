import React from 'react';
import UsersList from "../components/Users/UsersList";
import withHeader from "../HOC/withHeader";
import {PageContainer} from "./styled";


const HomePage = () => {
    return (
        <PageContainer>
            <UsersList />
        </PageContainer>
    );
};


export default (withHeader(HomePage));
