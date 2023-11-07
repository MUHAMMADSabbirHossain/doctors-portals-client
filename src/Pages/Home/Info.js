import React from 'react';
import InfoCard from './InfoCard';
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {

    const infoDetails = [
        {
            _id: 1,
            img: clock,
            title: "Opening Hours",
            details: "24/7 Access: Your Time, Your Way.",
            bgColor: "bg-gradient-to-tl from-primary to-secondary"
        },
        {
            _id: 2,
            img: marker,
            title: "Visit our Location",
            details: "Brooklyn, NY 10036, United States.",
            bgColor: "bg-accent",
        },
        {
            _id: 3,
            img: phone,
            title: "Contact us now",
            details: "+000 123 456789",
            bgColor: "bg-gradient-to-tl from-primary to-secondary",
        },
    ];
    // console.log(infoDetails);


    return (

        <div className="text-white md:grid md:grid-cols-3 gap-10 px-12">
            {
                infoDetails.map(cartDetails => <InfoCard key={cartDetails._id} cartDetails={cartDetails}></InfoCard>)
            }
        </div>
    );
};

export default Info;