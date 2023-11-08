import React from 'react';
import chair from "../assets/images/chair.png";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({ date, setDate }) => {

    let footer = <p>Please pick a day.</p>;
    if (date) {
        footer = <p>You picked {format(date, 'PP')}.</p>;
    };

    return (
        <section className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm lg:max-w-xl rounded-lg shadow-2xl" alt="Dentist chair" />
                <div>
                    <DayPicker mode="single"
                        selected={date}
                        onSelect={setDate}
                        footer={footer}></DayPicker>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;