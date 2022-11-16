import React from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';

const AppointmentHero = ({ selectedDate, setSelectedDate }) => {
    return (
        <div>
            <div className='lg:flex lg:flex-row-reverse items-center lg:pl-28 lg:pr-28 lg:pt-40 lg:pb-40 p-10'>
                <img src={chair} alt='hero' />
                <div className='lg:mr-28 text-accent bg-white shadow-gray-400 shadow rounded-lg'>
                    <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentHero;