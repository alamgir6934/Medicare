import React from 'react';

const InfoCard = ({card}) => {
    const {name, description, icon, bgClass}=card
    return (
        <div className={`card md:card-side p-6 shadow-xl ${bgClass}`}>
            <img className='h-12 w-12' src={icon} alt="" />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;