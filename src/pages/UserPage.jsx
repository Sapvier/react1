import React from 'react';
import DetailedUser from "../components/Users/DetailedUser";
import withHeader from "../HOC/withHeader";


const UserPage = () => {
    return (
        <div className="page">
            <DetailedUser />
        </div>
    );
};


export default (withHeader(UserPage));
