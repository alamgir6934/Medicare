import React from 'react';


const AppointmentOption = ({ appointmentOption,setTreatment }) => {
    const { name, slots } = appointmentOption
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-primary font-bold text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'try another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces':'space'} available</p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length===0}
                        onClick={()=>setTreatment(appointmentOption)}
                        htmlFor="booking-modal"
                        className="btn btn-secondary"
                    >Book Appointment</label>
                    
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;