import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const SpecialCare = () => {
    return (
        <div className='mt-8'>
            <div className='text-3xl font-bold text-center'>
                <h2>Our Special Care Unit</h2>
            </div>
            <div className="hero">

                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/VLXGtrr/9843.jpg" className="lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-xl font-bold">Exceptional Dental Care, On Your Terms</h1>
                        <p className="">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Details</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialCare;