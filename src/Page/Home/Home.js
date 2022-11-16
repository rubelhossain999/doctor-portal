import React from 'react';
import AboutSection from './AboutSection/AboutSection';
import Appointment from './Appointment/Appointment';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import Terms from './Terms/Terms';
import AppointmentBg from '../../assets/images/appointment-bg.png';
import Testimonial from './Testimonial/Testimonial';
import ContactUs from './ContactUs/ContactUs';

const Home = () => {
    return (
        <div>
            <div className='max-w-[1440px] mx-auto'>
                <Hero></Hero>
                <AboutSection></AboutSection>
                <Services></Services>
                <Terms></Terms>
            </div>
            <div style={{
                background: `url(${AppointmentBg})`,
                backgroundSize: 'cover'
            }}>
                <div className='max-w-[1440px] mx-auto'>
                    <Appointment></Appointment>
                </div>
            </div>
            <div className='max-w-[1440px] mx-auto'>
                <Testimonial></Testimonial>
            </div>
            <div style={{
                background: `url(${AppointmentBg})`,
                backgroundSize: 'cover'
            }}>
                <div className='max-w-[1440px] mx-auto'>
                    <ContactUs></ContactUs>
                </div>
            </div>
        </div>
    );
};

export default Home;