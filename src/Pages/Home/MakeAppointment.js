import React from 'react';
import doctor from "../../assets/images/doctor-small.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{ background: `url(${appointment})` }} className="flex justify-center items-center px-4 mt-60 mb-40">
            <div className="flex-1 hidden md:block">
                <img className="mt-[-100px]" src={doctor} alt="" />
            </div>
            <div className="flex-1 my-6">
                <h3 className="text-xl text-secondary font-semibold">Appointment</h3>
                <h2 className="text-3xl text-white font-semibold">Make an Appointment Today</h2>
                <p className="text-white my-4">Take the first step towards your well-being – Make an appointment with our dedicated team of healthcare professionals today. We're here to listen, to understand, and to provide the expert medical care you deserve. Whether it's a routine check-up, a specialized consultation, or addressing your health concerns, our clinic offers a welcoming environment where your health is our top priority. Your path to optimal health starts with that simple appointment. Let us be your partners on this journey to a healthier, happier you.</p>

                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;