import React from 'react';
import Header from "../components/Header/Header";


const withHeader = (WrappedComponent) => props => {
    return (
        <>
            <Header />
            <WrappedComponent {...props}/>
        </>
    )
};

export default withHeader;