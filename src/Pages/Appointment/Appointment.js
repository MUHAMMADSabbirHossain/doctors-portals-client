import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {

    const [date, setDate] = useState(new Date());


    return (
        <section>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppointments date={date} ></AvailableAppointments>
        </section>
    );
};

export default Appointment;