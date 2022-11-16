import React from 'react';
import clock from '../../../assets/icons/clock.png'
import location from '../../../assets/icons/location.png'
import phone from '../../../assets/icons/phone.png'
import AboutCart from './AboutCart';

const AboutSection = () => {

    const aboutsectiondata = [
        {
            'id': 1,
            'image': clock,
            'title': 'Opening Hours',
            'description': 'Lorem Ipsum is simply dummy text of the pri',
            'bGClass': 'bg-gradient-to-r from-secondary to-primary'
        },
        {
            'id': 2,
            'image': location,
            'title': 'Visit our location',
            'description': 'Brooklyn, NY 10036, United States',
            'bGClass': 'bg-accent'
        },
        {
            'id': 3,
            'image': phone,
            'title': 'Contact us now',
            'description': '+000 123 456789',
            'bGClass': 'bg-gradient-to-r from-secondary to-primary'
        }
    ]


    return (
        <div className='grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-3 lg:gap-10 md:gap-5 gap-3 p-5 mt-6'>
            {
                aboutsectiondata?.map(aboutCart => <AboutCart aboutCart={aboutCart} key={aboutCart.id}></AboutCart>)
            }
        </div>
    );
};

export default AboutSection;