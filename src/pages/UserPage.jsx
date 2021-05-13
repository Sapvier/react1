import React from 'react';
import DetailedUser from "../components/Users/DetailedUser";
import withHeader from "../HOC/withHeader";
import {PageContainer} from "./styled";


const UserPage = () => {
    return (
        <PageContainer>
            <DetailedUser />
        </PageContainer>
    );
};


export default (withHeader(UserPage));
