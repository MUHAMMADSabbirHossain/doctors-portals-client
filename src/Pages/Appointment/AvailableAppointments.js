import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvailableAppointments = ({ date }) => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        const url = `services.json`;
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    // console.log(services);


    return (
        <section className="px-12">

            <h2 className="text-secondary text-lg font-bold">Availabel Appointments on {format(date, 'PP')}: ({services.length})</h2>
            <p className="text-lg font-semibold text-gray-500">Please select a service.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
                {
                    services.map(service =>
                        <button key={service._id} className='btn lg:max-w-96 bg-base-100 shadow-xl py-20 text-secondary font-bold uppercase'>
                            {service.name}
                        </button>
                    )
                }
            </div>


            <h2 className="text-secondary text-lg font-bold">Available slots for Teeth Orthodontics: ({services.length}).</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </section>
    );
};

export default AvailableAppointments;