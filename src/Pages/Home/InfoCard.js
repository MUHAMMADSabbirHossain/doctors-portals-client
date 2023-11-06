import React from 'react';

const InfoCard = ({ cartDetails }) => {
    console.log(cartDetails);

    return (

        <div className={`card lg:card-side shadow-xl px-4 py-1 m-4 ${cartDetails.bgColor}`}>

            <figure><img src={cartDetails.img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title m-auto">{cartDetails.title}</h2>
                <p>{cartDetails.details}</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary text-white font-bold">Listen</button>
                </div> */}
            </div>
        </div>
    );
};

export default InfoCard;