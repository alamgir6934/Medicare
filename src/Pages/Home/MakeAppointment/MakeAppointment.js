import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='mt-32'>
            <div className="hero" style={{ 
            backgroundImage: `url("https://i.ibb.co/BTqtTRs/medical-equipment-realistic-protection-mask-test-surgical-mask-thermometer-3d-illustrations-1268-145.jpg")` 
          }}>
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/Q8VL69f/doctor-small.png" className="-mt-32 hidden lg:block rounded-lg" alt=''/>
                    <div>
                        <h4 className='text-lg font-bold text-orange-800'>Appointment</h4>
                        <h1 className="text-4xl font-bold text-orange-800">Make an appointment Today</h1>
                        <p className="py-6 font-bold text-orange-800">Dedicated 24X7 call center to set appointments with your preferred doctor. Queries regarding doctors’ appointment schedule, earliest available doctors and other appointment related information are provided through the appointment desk</p>
                       <PrimaryButton>Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;