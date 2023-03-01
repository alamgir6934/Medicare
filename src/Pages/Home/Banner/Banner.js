import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero"style={{ 
            backgroundImage: `url("https://i.ibb.co/JyTQ0Jp/blur-hospital.jpg")` 
          }}>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/qmhSWt5/dental-cabinet-with-various-medical-equipment.jpg" className="lg:w-1/2 rounded-lg shadow-2xl" alt=''/>
    <div>
      <h1 className="text-5xl font-bold">MediCare</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <PrimaryButton>Getting Started</PrimaryButton>
    </div>
  </div>
</div>
    );
};

export default Banner;