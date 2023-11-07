import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card w-auto lg:w-96 bg-base-100 shadow-2xl">
            <div className="card-body">
                <p>{review.review}</p>
                <div className="">
                    <div className="avatar">
                        <div className="w-16 h-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2 mx-2">
                            <img src={review.img} alt="reviewer logo." />
                        </div>
                        <div>
                            <h4 className="text-xl">{review.name}</h4>
                            <p>{review.location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;