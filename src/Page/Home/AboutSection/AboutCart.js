import React from 'react';

const AboutCart = ({ aboutCart }) => {
 const{description, bGClass, image, title} = aboutCart;
    return (
        <>
            <div className={`flex items-center text-white ${bGClass} p-5 rounded-lg`}>
                <div>
                    <img className='w-16' src={image} alt='imag' />
                </div>
                <div className='px-5'>
                    <h4 className='text-lg font-bold'>{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </>
    );
};

export default AboutCart;