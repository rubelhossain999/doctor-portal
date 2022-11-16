import React from 'react';
import Button from '../../SimilerComponents/Button';
import Chair from '../../../assets/images/chair.png';
import LandingBg from '../../../assets/images/landing-bg.png';

const Hero = () => {
    return (
        <section className='text-accent pt-32 pb-32 px-14'
            style={{
                background: `url(${LandingBg})`,
                backgroundSize: 'cover'
            }}>
            <div className='lg:flex items-center lg:flex-row-reverse'>
                <img src={Chair} alt='banner' />
                <div className='mr-10'>
                    <h1 className='text-5xl font-bold'>Your New Smile Starts Here</h1>
                    <h4 className='py-10 text-base font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</h4>
                    <Button>GET STARTED</Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;