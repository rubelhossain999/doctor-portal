import React from 'react';
import quite from '../../../assets/images/quite.png';
import picture from '../../../assets/images/picture.png'
import TestimonialCart from './TestimonialCart';


const Testimonial = () => {
    const testimonialCart = [
        {
            "id": 1,
            'description': 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            'picture': picture,
            'name': 'Winson Herry',
            'address': 'California'
        },
        {
            "id": 2,
            'description': 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            'picture': picture,
            'name': 'Marco Tely',
            'address': 'NewYork'
        },
        {
            "id": 2,
            'description': 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            'picture': picture,
            'name': 'Hilo miy',
            'address': 'Usa, California'
        }
    ]
    return (
        <>
            <div className='mt-40 flex justify-between items-center p-10'>
                <div>
                    <h4 className='text-primary text-xl font-bold'>OUR SERVICES</h4>
                    <h2 className='font-normal text-accent text-4xl mt-1'>What Our Patients Says</h2>
                </div>
                <img src={quite} alt='img' />
            </div>
            <div className='grid lg:grid-cols-3 gap-5 mt-10 p-4'>
                {
                    testimonialCart?.map(testimonialCart => <TestimonialCart testimonialCart={testimonialCart} key={testimonialCart}></TestimonialCart>)
                }
            </div>
        </>
    );
};

export default Testimonial;