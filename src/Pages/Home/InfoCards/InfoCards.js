import React from 'react';
import clock from '../../../Assects/icons/clock-solid.svg'
import marker from '../../../Assects/icons/location-dot-solid.svg'
import phone from '../../../Assects/icons/phone-solid.svg'
import InfoCard from './InfoCard';



const InfoCards = () => {
const cardData=[
    {
        id:1,
        name:'Opening Hours',
        description:'Open 9.00 am to 5.00pm everyday',
        icon:clock,
        bgClass:' bg-gradient-to-r from-cyan-500 to-blue-500'
    },
    {
        id:2,
        name:'Our Location',
        description:'Dhaka,Bangladesh',
        icon:marker,
        bgClass:'bg-accent'
    },
    {
        id:3,
        name:'Contact Us',
        description:'Email:alamgir6934@gmail.com, phone:01401126175',
        icon:phone,
        bgClass:' bg-gradient-to-r from-cyan-500 to-blue-500'
    },
]


    return (
        <div className='grid gap-6 mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData?.map(card=><InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;