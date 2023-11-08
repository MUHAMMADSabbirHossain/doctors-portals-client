import React from 'react';
import PrimaryButton from "../Pages/Shared/PrimaryButton";

const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title mx-auto text-secondary font-bold">{name}</h2>
                <p>
                    {
                        slots.length
                            ? <span>{slots[0]}</span>
                            : <span className="text-red-500">Try Another date.</span>

                    }
                </p>
                <p className="font-semibold">{slots.length} {slots.length > 1 ? "spaces" : "space"} available.</p>

                <div className="card-actions justify-center" >
                    <button disabled={slots.length === 0} class="btn btn-secondary text-white font-bold uppercase">Book Appointment</button>
                </div>
            </div>
        </div >
    );
};

export default Service;