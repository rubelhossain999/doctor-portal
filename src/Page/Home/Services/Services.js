import React from 'react';
import cavity from '../../../assets/icons/cavity.png'
import fluoride from '../../../assets/icons/fluoride.png'
import whitening from '../../../assets/icons/whitening.png'
import ServiceData from './ServiceData';

const Services = () => {
    const serviceData = [
        {
            "id" : 1,
            "icon" : cavity,
            "title": 'Fluoride Treatment',
            "description": 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
        {
            "id" : 2,
            "icon" : fluoride,
            "title": 'Fluoride Treatment',
            "description": 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
        {
            "id" : 3,
            "icon" : whitening,
            "title": 'Fluoride Treatment',
            "description": 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        }
    ]
    return (
        <div className='mt-32'>
            <div className='text-center'>
                <h4 className='text-primary text-xl font-bold'>OUR SERVICES</h4>
                <h2 className='font-normal text-accent text-4xl mt-1'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7 text-accent text-center'>
                {
                    serviceData?.map(serviceData => <ServiceData serviceData={serviceData} key={serviceData.id}></ServiceData>)
                }
            </div>
        </div>
    );
};

export default Services;