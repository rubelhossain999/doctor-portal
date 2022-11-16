import React from 'react';
import Button from '../../SimilerComponents/Button';

const ContactUs = () => {
    return (
        <div className='mt-32 pb-32'>
            <div className='text-center  pt-20'>
                <h4 className='text-primary text-xl font-bold'>Contact Us</h4>
                <h2 className='font-normal text-white text-4xl mt-1'>Stay connected with us</h2>
            </div>
            <form className='lg:w-2/6 mx-auto p-10'>
                <fieldset>
                    <div className="col-span-full">
                        <input id="address" type="text" placeholder="Email Address" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="col-span-full pt-5">
                        <input id="address" type="text" placeholder="Subject" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="col-span-full pt-5">
                        <textarea id="address" type="text" placeholder="Subject" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className='text-center mt-5'>
                        <Button>Submit</Button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default ContactUs;