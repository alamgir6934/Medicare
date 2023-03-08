import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
    
    let footer = <p>Please pick a day.</p>;
    if (selectedDate) {
        footer = <p>You have selected date: {format(selectedDate, 'PP')}.</p>;
    }
    return (
        <header className='my-6'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/dtPt8rh/impressed-young-female-doctor-wearing-medical-robe-stethoscope-sitting-desk-with-medical-tools-holdi.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='appointment pic' />
                    <div className='mr-6 shadow-xl'>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}

                        />
                        <div className='ml-6'>
                            {footer}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;