import React from 'react';

const AppointmentOptions = ({ appointmentOption, setTreatmentValue }) => {
    const { name, slots } = appointmentOption;
    return (
        <div className="card w-96 bg-base-100 mt-10 p-8 lg:p-0">
            <div className="card-body items-center text-center shadow-gray-400 shadow rounded-lg">
                <h2 className="card-title text-accent">{name}</h2>
                <p className='text-accent'>{slots?.length > 0 ? slots[0] : "Try Another Day"}</p>
                <p className='text-accent'>{slots?.length} {slots?.length > 1 ? "SPACES" : "SPACE"} AVAILABLE</p>
                <div className="card-actions">
                    <label 
                    htmlFor="my-modal-3" 
                    className="btn btn-primary"
                    onClick={() => setTreatmentValue(appointmentOption)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;