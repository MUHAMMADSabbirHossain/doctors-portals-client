import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots, price } = service;

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
                <p><small>Price: ${price}</small></p>

                <div className="card-actions justify-center" >
                    <button
                        disabled={slots.length === 0}
                        className="btn text-white font-bold uppercase bg-gradient-to-r from-secondary to-primary"
                        onClick={() => {
                            setTreatment(service)
                            document.getElementById('booking-modal').showModal()
                        }}>
                        Book Appointment
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Service;