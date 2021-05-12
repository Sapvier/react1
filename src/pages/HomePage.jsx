import React from 'react';
import Header from "../components/Header/Header";
import UsersList from "../components/Users/UsersList";


const HomePage = () => {
    return (
        <div className="page">
            <Header/>
            <UsersList />
        </div>
    );
};


export default HomePage;
