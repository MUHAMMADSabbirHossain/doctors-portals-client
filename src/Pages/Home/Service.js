import React from 'react';

const Service = ({ serviceDetails }) => {
    // console.log(serviceDetails)

    return (
        <div className="card w-auto lg:w-96 glass shadow-xl mx-auto my-6">

            <figure><img src={serviceDetails.img} alt={serviceDetails.imgAlt} /></figure>
            <div className="card-body">
                <h2 className="card-title  mx-auto">{serviceDetails.title}</h2>
                <p>{serviceDetails.discription}</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                </div> */}
            </div>
        </div>
    );
};

export default Service;