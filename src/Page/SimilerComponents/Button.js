import React from 'react';

const Button = ({ children }) => {
    return (
        <button className='btn border-none rounded-xl text-sm font-bold uppercase text-white shadow-lg bg-gradient-to-r from-secondary to-primary'>{children}</button>
    );
};

export default Button;