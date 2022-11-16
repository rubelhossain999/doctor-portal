import React, { useState } from 'react';
import AppointmentHero from './AppointmentHero/AppointmentHero';
import LandingBG from '../../assets/images/landing-bg.png';
import AppointmentCart from './AppointmentCart/AppointmentCart';

const Appointment = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <div style={{
                background: `url(${LandingBG})`,
                backgroundSize: 'cover'
            }}>
                <div className='max-w-[1440px] mx-auto'>
                    <AppointmentHero
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                    ></AppointmentHero>
                </div>
            </div>
            <div className='max-w-[1440px] mx-auto mt-10'>
                <AppointmentCart
                    selectedDate={selectedDate}
                ></AppointmentCart>
            </div>
        </div>
    );
};

export default Appointment;