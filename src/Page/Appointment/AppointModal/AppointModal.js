import React from 'react';
import Button from '../../SimilerComponents/Button';

const AppointModal = () => {
    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal text-accent">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Cavity Protection</h3>
                    <form>
                        <input type='text' name='date' placeholder='April 30, 2022' className='bg-slate-200 w-full p-2 rounded-md mt-2 mb-2 text-accent outline-none' />
                        <input type='text' name='date' placeholder='10:05 am - 11:30 am' className='bg-slate-200 w-full p-2 rounded-md mt-2 mb-2 text-accent outline-none' />
                        <input type='text' name='date' placeholder='Full Name' className='bg-slate-200 w-full p-2 rounded-md mt-2 mb-2 text-accent outline-none' />
                        <input type='text' name='date' placeholder='Phone Number' className='bg-slate-200 w-full p-2 rounded-md mt-2 mb-2 text-accent outline-none' />
                        <input type='text' name='date' placeholder='Email' className='bg-slate-200 w-full p-2 rounded-md mt-2 mb-2 text-accent outline-none' />
                    </form>
                    <div className='flex btn bg-primary border-none hover:bg-accent text-white font-semibold text-lg justify-center w-full'>Submit</div>
                </div>
            </div>
        </>
    );
};

export default AppointModal;