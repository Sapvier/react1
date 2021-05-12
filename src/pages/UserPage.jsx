import React from 'react';
import DetailedUser from "../components/Users/DetailedUser";
import Header from "../components/Header/Header";


const UserPage = () => {
    return (
        <div className="page">
            <Header/>
            <DetailedUser />
        </div>
    );
};


export default UserPage;
