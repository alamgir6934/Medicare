import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500">{children}</button>
    );
};

export default PrimaryButton;