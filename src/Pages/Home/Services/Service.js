import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Service = ({service}) => {

    const{name,description,img}=service;

    
    return (
        <div className="card bg-base-100 shadow-xl text-blue-500 hover:scale-[1.02] focus:scale-[1.02] active:scale-100 ripple={false}
        fullWidth={true}">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <PrimaryButton>Details</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Service;