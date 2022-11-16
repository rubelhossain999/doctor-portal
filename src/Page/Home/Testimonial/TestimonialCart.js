import React from 'react';

const TestimonialCart = ({ testimonialCart }) => {
    const {description, name, picture, address} = testimonialCart;
    return (
        <div className='text-accent shadow-lg p-5 rounded'>
            <div>
                <p>{description}</p>
            </div>
            <div className='flex items-center mt-5'>
                <div>
                    <img src={picture} alt='img' />
                </div>
                <div className='ml-5'>
                    <h4 className='font-semibold'>{name}</h4>
                    <p>{address}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCart;