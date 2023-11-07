import React from 'react';
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
    return (
        <section style={{ backgroundImage: `url(${appointment})` }} className="py-20 my-20">
            <div className="my-10">
                <h2 className="text-secondary font-bold text-3xl">Contact Us</h2>
                <p className='text-white text-2xl font-semibold'>Stay connected with us</p>
            </div>

            <form className="grid gap-5" action="">
                <input type="text" placeholder="Email Address" className=" mx-auto input input-bordered input-primary w-full max-w-xs" />
                <input type="text" placeholder="Subject" className=" mx-auto input input-bordered input-primary w-full max-w-xs" />
                <textarea className=" mx-auto textarea textarea-primary textarea-lg w-full max-w-xs" placeholder="Your message"></textarea>
                <div className=" justify-center">
                    <PrimaryButton>Submit</PrimaryButton>
                </div>

            </form>
        </section>
    );
};

export default Contact;