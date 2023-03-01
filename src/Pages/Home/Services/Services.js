import React from 'react';
import fluoride from '../../../Assects/services/dental-implants-surgery-concept-pen-tool-created-clipping-path-included-jpeg-easy-composite.jpg'
import cavity from '../../../Assects/services/dentist-with-smile.jpg'
import whitening from '../../../Assects/services/white-teeth.jpg'
import Service from './Service';


const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Help prevent tooth decay, slow it down, or stop it from getting worse.',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Treatment',
            description: 'Help prevent tooth decay, slow it down, or stop it from getting worse.',
            img: cavity
        },
        {
            id: 3,
            name: 'Whitening Treatment',
            description: 'Help prevent tooth decay, slow it down, or stop it from getting worse.',
            img: whitening
        },

    ]


    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our Services</h3>
                <h2 className='text-3xl font-bold'>Services we provided</h2>

            </div>
            <div className='grid gap-6 mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;