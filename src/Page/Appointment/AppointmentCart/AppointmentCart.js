import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOptions from '../AppointmentOptions/AppointmentOptions';

const AppointmentCart = ({ selectedDate }) => {
    const [appointmentOption, setAppointmentOption] = useState();

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => {
                setAppointmentOption(data);
            })
    }, []);

    return (
        <div>
            <p className='text-primary text-center font-bold text-xl'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-10 mb-11'>
                {
                    appointmentOption?.map(appointmentOption => <AppointmentOptions appointmentOption={appointmentOption} key={appointmentOption._id}></AppointmentOptions>)
                }
            </div>
        </div>
    );
};

export default AppointmentCart;