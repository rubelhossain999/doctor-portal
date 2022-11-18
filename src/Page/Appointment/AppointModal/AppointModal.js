import { format } from 'date-fns';
import React from 'react';

const AppointModal = ({ treatmentValue, selectedDate, setTreatmentValue }) => {
    const { name, slots } = treatmentValue;
    const currentData = format(selectedDate, 'PP');

    const handleappointment = event => {
        event.preventDefault();
        const form = event.target;

        const slots = form.slots.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            treatmentName: treatmentValue.name,
            appointmentDate: slots,
            patient: name,
            email,
            phone

        }

        console.log(booking);
        setTreatmentValue('')
    }



    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal text-accent">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}n</h3>
                    <form onSubmit={handleappointment}>
                        <input type='text' value={currentData} disabled name='date' placeholder='April 30, 2022' className='bg-slate-200 w-full p-2 rounded-md mt-2 mb-2 text-accent outline-none' />
                        <select name='slots' className="select bg-slate-200 w-full">
                            {
                                slots?.map((slot, i) => <option value={slot} key={i}>{slot}</option>)
                            }
                        </select>
                        <input type='text' name='name' placeholder='Full Name' className='bg-slate-200 w-full p-2 rounded-md mt-2 mb-2 text-accent outline-none' required/>
                        <input type='text' name='phone' placeholder='Phone Number' className='bg-slate-200 w-full p-2 rounded-md mt-2 mb-2 text-accent outline-none' required/>
                        <input type='email' name='email' placeholder='Email' className='bg-slate-200 w-full p-2 rounded-md mt-2 mb-2 text-accent outline-none' />
                        <button className='flex btn bg-primary border-none hover:bg-accent text-white font-semibold text-lg justify-center w-full'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AppointModal;