import React from 'react';
import UsersList from "../components/Users/UsersList";
import withHeader from "../HOC/withHeader";


const HomePage = () => {
    return (
        <div className="page">
            <UsersList />
        </div>
    );
};


export default (withHeader(HomePage));
