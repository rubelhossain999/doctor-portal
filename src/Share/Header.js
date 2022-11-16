import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const menu = <React.Fragment>
        <li><NavLink className={({ Active }) => Active ? 'active' : undefined} to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/appointment'>Appointment</NavLink></li>
        <li><NavLink to='/reviews'>Reviews</NavLink></li>
        <li><NavLink to='/contact'>Contact Us</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
    </React.Fragment >
    return (
        <div className="navbar bg-white text-accent font-medium mx-auto max-w-[1440px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Doctors Portal</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menu}
                </ul>
            </div>
        </div>
    );
};

export default Header;