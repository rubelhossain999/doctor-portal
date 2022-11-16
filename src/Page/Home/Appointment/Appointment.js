import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import Button from '../../SimilerComponents/Button';

const Appointment = () => {
    return (
        <div className='lg:flex items-center mt-44'>
            <div className='-mt-32 lg:flex hidden'>
                <img src={doctor} alt=''></img>
            </div>
            <div className='lg:pl-16 lg:w-2/4 p-5 text-white'>
                <h4 className='text-primary text-xl font-bold'>Appointment</h4>
                <h2 className='text-5xl font-bold mt-5'>Make an appointment Today</h2>
                <p className='mt-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                <div className='mt-10'>
                    <Button>GET STARTED</Button>
                </div>
            </div>
        </div>
    );
};

export default Appointment;