import React from 'react';
import tream from '../../../assets/images/tream.png'
import Button from '../../SimilerComponents/Button';

const Terms = () => {
    return (
        <div className='lg:p-20 p-5 mt-10 lg:flex items-center'>
            <div>
                <img src={tream} alt=''></img>
            </div>
            <div className='lg:pl-20 lg:w-2/4'>
                <h2 className='text-5xl font-bold text-accent'>Exceptional Dental Care, on Your Terms</h2>
                <p className='text-accent mt-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div className='mt-10'>
                    <Button>GET STARTED</Button>
                </div>
            </div>
        </div>
    );
};

export default Terms;