import React from 'react';
import { Link } from 'react-router-dom';
import FooterBG from '../assets/images/footer-bg.png'

const Footer = () => {
    return (
        <div className='border-t-2 border-primary'>
            <div className='max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:p-0 p-10 lg:pt-12 pb-10 justify-items-center' style={{
                background: `url(${FooterBG})`,
                backgroundSize: 'cover'
            }}>
                <div className='text-accent'>
                    <h2 className='font-bold text-lg text-accent'>SERVICES</h2>
                    <div className='mt-2'>
                        <Link to='/'>Emergency Checkup</Link><br />
                        <Link to='/'>Monthly Checkup</Link><br />
                        <Link to='/'>Weekly Checkup</Link><br />
                        <Link to='/'>Deep Checkup</Link><br />
                    </div>
                </div>
                <div className='text-accent'>
                    <h2 className='font-bold text-lg text-accent'>ORAL HEALTH</h2>
                    <div className='mt-2'>
                        <Link to='/'>Fluoride Treatment</Link><br />
                        <Link to='/'>Cavity Filling</Link><br />
                        <Link to='/'>Teath Whitening</Link><br />
                    </div>
                </div>
                <div className='text-accent'>
                    <h2 className='font-bold text-lg text-accent'>OUR ADDRESS</h2>
                    <div className='mt-2'>
                        <Link to='/'>New York - 101010 Hudson</Link><br />
                    </div>
                </div>
            </div>
            <footer className="footer footer-center p-4 text-accent mt-10">
                <div>
                    <p>Copyright 2022 - All right reserved by <a href='https://rubelhossain99.com/'>Rubel Hossain99</a></p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;